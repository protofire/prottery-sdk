import { ERC20, ERC20__factory } from "./contracts";
import { config } from "./config";
import { CallbackOptionsType, SDK } from "./sdk";
import { Service } from "./service";
import { BigNumber } from "ethers";

export class Token extends Service {
  public contract: ERC20;
  public sdk: SDK;
  public address: string;

  constructor(_sdk: SDK) {
    super();
    this.sdk = _sdk;
    this.address = config.get(_sdk.chainId)!.TOKEN;
    this.contract = ERC20__factory.connect(this.address, _sdk.signer);
  }

  public async approve(
    value: BigNumber,
    callbacks: CallbackOptionsType,
  ): Promise<void> {
    await this.submitAction(async () => {
      return this.contract.approve(this.sdk.contractAddress, value);
    }, callbacks);
  }

  public async allowance(): Promise<BigNumber> {
    return await this.contract.allowance(
      this.sdk.address!,
      this.sdk.contractAddress,
    );
  }
}
