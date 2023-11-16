import { BigNumber, Signer, ethers } from "ethers";
import { Service } from "./service";
import { Prottery } from "./contracts";
import { Graph } from "./graph";
export type CallbackOptionsType = {
    onSubmitted?: ({ tx }: {
        tx: ethers.ContractTransaction;
    }) => void;
    onSuccess?: ({ tx, receipt, }: {
        tx: ethers.ContractTransaction;
        receipt: ethers.ContractReceipt;
    }) => void;
    onError?: (err: string) => void;
    onRejected?: () => void;
};
export declare class SDK extends Service {
    contract: Prottery;
    signer: Signer;
    address?: string;
    chainId: number;
    DEFAULT_CHAIN_ID: number;
    graph?: Graph;
    constructor({ signerOrProvider, chainId, subgraphUri, }: {
        signerOrProvider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | ethers.Signer;
        chainId?: number;
        subgraphUri?: string;
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
    enroll(callbacks: CallbackOptionsType): Promise<void>;
    quit(callbacks: CallbackOptionsType): Promise<void>;
    claim(callbacks: CallbackOptionsType): Promise<void>;
    launch(threshold: BigNumber, prize: BigNumber, callbacks: CallbackOptionsType): Promise<void>;
    raffle(callbacks: CallbackOptionsType): Promise<void>;
    finish(winner: string, callbacks: CallbackOptionsType): Promise<void>;
}
//# sourceMappingURL=sdk.d.ts.map