import { BigNumber, Signer, ethers } from "ethers";
import { Service } from "./service";
import { Prottery } from "./contracts";
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
    constructor({ provider, }: {
        provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider;
    });
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
}
//# sourceMappingURL=sdk.d.ts.map