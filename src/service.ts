import { ethers } from "ethers";
import { CallbackOptionsType } from "./sdk";

export abstract class Service {
  protected async submitAction(
    action: () => Promise<ethers.ContractTransaction>,
    callbacks: CallbackOptionsType
  ) {
    const { onSubmitted, onSuccess, onError, onRejected } = callbacks;

    let confirmed = false;

    try {
      const tx = await action();

      confirmed = true;

      if (onSubmitted) onSubmitted({ tx });

      const receipt = await tx.wait();

      if (onSuccess) onSuccess({ tx, receipt });
    } catch (err) {
      const providerError = err as {
        reason: string;
      };

      if (!confirmed) {
        if (onRejected) onRejected();
        return;
      }

      if (onError) onError(providerError.reason ?? err);
    }
  }
}
