import { describe, expect, test, jest, beforeEach } from "@jest/globals";
import { Token } from "../src/token";
import { SDK } from "../src/sdk";
import { mockSdk } from "./utils";
import { ERC20, ERC20__factory } from "../src/contracts";
import { mock } from "jest-mock-extended";
import { ethers } from "ethers";
import { USER_REJECTED_TRANSACTION } from "../src/service";

const ADDRESS = "0x0000000000000000000000000000000000000001";

describe("Token", () => {
  let sdk: SDK;
  let erc20: ERC20;
  let token: Token;

  beforeEach(() => {
    erc20 = mock<ERC20>();
    jest.spyOn(ERC20__factory, "connect").mockImplementation(() => erc20);
    sdk = mockSdk(ADDRESS);
    token = new Token(sdk);
  });

  describe("approve", () => {
    const tx = mock<ethers.ContractTransaction>();
    const onSubmitted = jest.fn();
    const onSuccess = jest.fn();
    const onError = jest.fn();
    const onRejected = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("when transaction succeeds", () => {
      beforeEach(() => {
        const receipt = mock<ethers.ContractReceipt>();

        jest.spyOn(tx, "wait").mockImplementation(async () => receipt);
      });
      test("callbacks onSubmitted and onSuccess", async () => {
        const func = jest
          .spyOn(erc20, "approve")
          .mockImplementation(async () => tx);

        const amount = ethers.utils.parseEther("10");

        await token.approve(amount, {
          onSubmitted,
          onSuccess,
          onError,
          onRejected,
        });

        expect(func).toBeCalledTimes(1);
        expect(func).toBeCalledWith(sdk.contractAddress, amount, {});
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).toBeCalledTimes(1);
        expect(onError).not.toBeCalled();
        expect(onRejected).not.toBeCalled();
      });
    });

    describe("when transaction fails", () => {
      beforeEach(() => {
        jest.spyOn(tx, "wait").mockImplementation(() => {
          throw Error("something went wrong");
        });
      });

      test("callbacks onSubmitted and onError", async () => {
        const func = jest
          .spyOn(erc20, "approve")
          .mockImplementation(async () => tx);

        const amount = ethers.utils.parseEther("10");

        await token.approve(amount, { onSubmitted, onSuccess, onError });

        expect(func).toBeCalledTimes(1);
        expect(func).toBeCalledWith(sdk.contractAddress, amount, {});
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).not.toBeCalledTimes(1);
        expect(onError).toBeCalledTimes(1);
        expect(onRejected).not.toBeCalled();
      });
    });

    describe("when user rejects transaction", () => {
      test("callbacks onRejected", async () => {
        const func = jest.spyOn(erc20, "approve").mockImplementation(() => {
          throw { reason: USER_REJECTED_TRANSACTION };
        });

        const amount = ethers.utils.parseEther("10");

        await token.approve(amount, {
          onSubmitted,
          onSuccess,
          onError,
          onRejected,
        });

        expect(func).toBeCalledTimes(1);
        expect(func).toBeCalledWith(sdk.contractAddress, amount, {});
        expect(onRejected).toBeCalledTimes(1);
        expect(onSubmitted).not.toBeCalled();
        expect(onSuccess).not.toBeCalled();
        expect(onError).not.toBeCalled();
      });
    });
  });

  describe("allowance", () => {
    test("returns allowance", async () => {
      const expectedAllowance = ethers.utils.parseEther("5");

      const func = jest
        .spyOn(erc20, "allowance")
        .mockImplementation(async () => expectedAllowance);

      const allowance = await token.allowance();

      expect(func).toBeCalledTimes(1);
      expect(allowance).toEqual(expectedAllowance);
    });
  });
});
