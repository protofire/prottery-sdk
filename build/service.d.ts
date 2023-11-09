import { ethers } from "ethers";
import { CallbackOptionsType } from "./sdk";
export declare abstract class Service {
    protected submitAction(action: () => Promise<ethers.ContractTransaction>, callbacks: CallbackOptionsType): Promise<void>;
}
//# sourceMappingURL=service.d.ts.map