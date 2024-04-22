import { BigNumber, Signer, ethers } from "ethers";
import { Service } from "./service";
import { Prottery, Prottery__factory } from "./contracts";
import { config } from "./config";
import { Graph } from "./graph";
import { Token } from "./token";

export type CallbackOptionsType = {
  onSubmitted?: ({ tx }: { tx: ethers.ContractTransaction }) => void;
  onSuccess?: ({
    tx,
    receipt,
  }: {
    tx: ethers.ContractTransaction;
    receipt: ethers.ContractReceipt;
  }) => void;
  onError?: (err: unknown) => void;
  onRejected?: () => void;
};

export type OptionsType = CallbackOptionsType & {
  overrides?: ethers.Overrides;
};

const isSigner = (
  signerOrProvider:
    | ethers.providers.Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.Signer
): signerOrProvider is ethers.Signer => {
  return (
    (signerOrProvider as ethers.providers.JsonRpcProvider).getSigner ===
    undefined
  );
};

export class SDK extends Service {
  public contractAddress: string;
  public contract: Prottery;
  public signer: Signer;
  public address?: string;
  public chainId: number;
  public DEFAULT_CHAIN_ID = 421614;
  public graph?: Graph;
  public token: Token;

  constructor({
    signerOrProvider,
    chainId,
    account,
  }: {
    signerOrProvider:
      | ethers.providers.Web3Provider
      | ethers.providers.JsonRpcProvider
      | ethers.Signer;
    chainId?: number;
    account?: string;
  }) {
    super();

    if (isSigner(signerOrProvider)) {
      this.signer = signerOrProvider;
    } else {
      this.signer = signerOrProvider.getSigner(
        account || "0x0000000000000000000000000000000000000001"
      );
    }

    this.chainId = chainId ?? this.DEFAULT_CHAIN_ID;

    this.graph = new Graph(config.get(this.chainId)!.SUBGRAPH);
    this.contractAddress = config.get(this.chainId)!.PROTTERY;

    this.contract = Prottery__factory.connect(
      this.contractAddress,
      this.signer
    );
    this.token = new Token(this);
  }

  public async init(): Promise<void> {
    try {
      this.address = await this.signer.getAddress();
    } catch (error) {
      console.log(error);
    }
  }

  public async getNumberOfParticipants(): Promise<BigNumber> {
    return await this.contract.numberOfParticipants();
  }

  public async getBalanceOf(account: string): Promise<BigNumber> {
    return await this.contract.balanceOf(account);
  }

  public async getJackpot(): Promise<string> {
    return await this.contract.jackpot();
  }

  public async getOwner(): Promise<string> {
    return await this.contract.owner();
  }

  public async getParticipants(id: string): Promise<boolean> {
    return await this.contract.participants(id);
  }

  public async getPrize(): Promise<BigNumber> {
    return await this.contract.prize();
  }

  public async getRandom(): Promise<BigNumber> {
    return await this.contract.random();
  }

  public async getStatus(): Promise<number> {
    return await this.contract.status();
  }

  public async getThreshold(): Promise<BigNumber> {
    return await this.contract.threshold();
  }

  public async getToken(): Promise<string> {
    return await this.contract.token();
  }

  public async isDelegator(account: string): Promise<boolean> {
    return await this.contract.isDelegator(account);
  }

  public async enroll(options: OptionsType): Promise<void> {
    const { overrides, ...callbacks } = options;

    const action = async () => this.contract.enroll({ ...overrides });

    await this.submitAction(action, callbacks);
  }

  public async quit(options: OptionsType): Promise<void> {
    const { overrides, ...callbacks } = options;

    const action = async () => this.contract.quit({ ...overrides });

    await this.submitAction(action, callbacks);
  }

  public async claim(options: OptionsType): Promise<void> {
    const { overrides, ...callbacks } = options;

    const action = async () => this.contract.claim({ ...overrides });

    await this.submitAction(action, callbacks);
  }

  public async launch(
    threshold: BigNumber,
    prize: BigNumber,
    options: OptionsType
  ): Promise<void> {
    const { overrides, ...callbacks } = options;

    const action = async () =>
      this.contract.launch(threshold, prize, { ...overrides });

    await this.submitAction(action, callbacks);
  }

  public async raffle(options: OptionsType): Promise<void> {
    const { overrides, ...callbacks } = options;

    const action = async () => this.contract.raffle({ ...overrides });

    await this.submitAction(action, callbacks);
  }

  public async finish(winner: string, options: OptionsType): Promise<void> {
    const { overrides, ...callbacks } = options;

    const action = async () => this.contract.finish(winner, { ...overrides });

    await this.submitAction(action, callbacks);
  }
}
