import { ERC20 } from "./contracts";
import { CallbackOptionsType, SDK } from "./sdk";
import { Service } from "./service";
import { BigNumber } from "ethers";
export declare class Token extends Service {
    contract: ERC20;
    sdk: SDK;
    address: string;
    constructor(_sdk: SDK);
    approve(value: BigNumber, callbacks: CallbackOptionsType): Promise<void>;
    allowance(): Promise<BigNumber>;
}
//# sourceMappingURL=token.d.ts.map