import { BigNumber, Signer, ethers } from "ethers";
import { Service } from "./service";
import { Prottery, Prottery__factory } from "./contracts";
import { config } from "./config";

export type CallbackOptionsType = {
  onSubmitted?: ({ tx }: { tx: ethers.ContractTransaction }) => void;
  onSuccess?: ({
    tx,
    receipt,
  }: {
    tx: ethers.ContractTransaction;
    receipt: ethers.ContractReceipt;
  }) => void;
  onError?: (err: string) => void;
  onRejected?: () => void;
};

export class SDK extends Service {
  public contract: Prottery;
  public signer: Signer;

  constructor({
    provider,
  }: {
    provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider;
  }) {
    super();
    this.signer = provider.getSigner();
    this.contract = Prottery__factory.connect(
      config.get(provider.network.chainId)!.PROTTERY,
      this.signer
    );
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

  public async enroll(callbacks: CallbackOptionsType): Promise<void> {
    await this.submitAction(async () => this.contract.enroll(), callbacks);
  }

  public async quit(callbacks: CallbackOptionsType): Promise<void> {
    await this.submitAction(async () => this.contract.quit(), callbacks);
  }

  public async claim(callbacks: CallbackOptionsType): Promise<void> {
    await this.submitAction(async () => this.contract.claim(), callbacks);
  }
}