import { ethers } from "ethers";
import { CallbackOptionsType } from "./sdk";

export const USER_REJECTED_TRANSACTION = "user rejected transaction";

export abstract class Service {
  protected async submitAction(
    action: () => Promise<ethers.ContractTransaction>,
    callbacks: CallbackOptionsType
  ) {
    const { onSubmitted, onSuccess, onError, onRejected } = callbacks;

    try {
      const tx = await action();

      if (onSubmitted) onSubmitted({ tx });

      const receipt = await tx.wait();

      if (onSuccess) onSuccess({ tx, receipt });
    } catch (err) {
      const providerError = err as {
        reason: string;
      };

      if (providerError.reason === USER_REJECTED_TRANSACTION) {
        if (onRejected) onRejected();
        return;
      }

      if (onError) onError(err);
    }
  }
}
