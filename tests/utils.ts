import { mock } from "jest-mock-extended";
import { JsonRpcProvider, JsonRpcSigner } from "@ethersproject/providers";
import { SDK } from "../src/sdk";

export const mockSdk = (address: string) => {
  const mockSigner = mock<JsonRpcSigner>();
  mockSigner.getAddress.calledWith().mockImplementation(async () => address);
  const mockProvider = mock<JsonRpcProvider>();
  mockProvider.getSigner.calledWith().mockImplementation(() => mockSigner);

  const sdk = new SDK({
    signerOrProvider: mockProvider,
  });

  return sdk;
};
