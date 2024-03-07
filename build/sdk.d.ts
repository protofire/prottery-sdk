import { BigNumber, Signer, ethers } from "ethers";
import { Service } from "./service";
import { Prottery } from "./contracts";
import { Graph } from "./graph";
import { Token } from "./token";
export type CallbackOptionsType = {
    onSubmitted?: ({ tx }: {
        tx: ethers.ContractTransaction;
    }) => void;
    onSuccess?: ({ tx, receipt, }: {
        tx: ethers.ContractTransaction;
        receipt: ethers.ContractReceipt;
    }) => void;
    onError?: (err: unknown) => void;
    onRejected?: () => void;
};
export type OptionsType = CallbackOptionsType & {
    overrides?: ethers.Overrides;
};
export declare class SDK extends Service {
    contractAddress: string;
    contract: Prottery;
    signer: Signer;
    address?: string;
    chainId: number;
    DEFAULT_CHAIN_ID: number;
    graph?: Graph;
    token: Token;
    constructor({ signerOrProvider, chainId, subgraphUri, account, }: {
        signerOrProvider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | ethers.Signer;
        chainId?: number;
        subgraphUri?: string;
        account?: string;
    });
    init(): Promise<void>;
    getNumberOfParticipants(): Promise<BigNumber>;
    getBalanceOf(account: string): Promise<BigNumber>;
    getJackpot(): Promise<string>;
    getOwner(): Promise<string>;
    getParticipants(id: string): Promise<boolean>;
    getPrize(): Promise<BigNumber>;
    getRandom(): Promise<BigNumber>;
    getStatus(): Promise<number>;
    getThreshold(): Promise<BigNumber>;
    getToken(): Promise<string>;
    isDelegator(account: string): Promise<boolean>;
    enroll(options: OptionsType): Promise<void>;
    quit(options: OptionsType): Promise<void>;
    claim(options: OptionsType): Promise<void>;
    launch(threshold: BigNumber, prize: BigNumber, options: OptionsType): Promise<void>;
    raffle(options: OptionsType): Promise<void>;
    finish(winner: string, options: OptionsType): Promise<void>;
}
//# sourceMappingURL=sdk.d.ts.map