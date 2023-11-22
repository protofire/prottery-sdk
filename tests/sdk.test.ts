import { mock } from "jest-mock-extended";
import { describe, expect, test, jest, beforeEach } from "@jest/globals";
import { Prottery__factory } from "../src/contracts/factories/Prottery__factory";
import { BigNumber, ethers } from "ethers";
import { Prottery } from "../src/contracts/Prottery";
import { SDK } from "../src/sdk";
import { USER_REJECTED_TRANSACTION } from "../src/service";
import { mockSdk } from "./utils";

const ADDRESS = "0x0000000000000000000000000000000000000001";

describe("SDK", () => {
  let sdk: SDK;
  let prottery: Prottery;

  beforeEach(() => {
    prottery = mock<Prottery>();
    jest.spyOn(Prottery__factory, "connect").mockImplementation(() => prottery);
    sdk = mockSdk(ADDRESS);
  });

  describe("init", () => {
    test("populates account address", async () => {
      await sdk.init();

      expect(sdk.address).toBe(ADDRESS);
    });
  });

  describe("getNumberOfParticipants", () => {
    test("returns number of participants", async () => {
      const count = BigNumber.from(5);

      const numberOfParticipantsFunction = jest
        .spyOn(prottery, "numberOfParticipants")
        .mockImplementation(async () => count);
      const numberOfParticipants = await sdk.getNumberOfParticipants();

      expect(numberOfParticipantsFunction).toBeCalledTimes(1);
      expect(numberOfParticipants).toEqual(count);
    });
  });

  describe("getBalanceOf", () => {
    test("returns account balance", async () => {
      const balance = ethers.utils.parseEther("100");
      const account = "0x0000000000000000000000000000000000000002";

      const balanceOfFunction = jest
        .spyOn(prottery, "balanceOf")
        .mockImplementation(async () => balance);
      const value = await sdk.getBalanceOf(account);

      expect(balanceOfFunction).toBeCalledWith(account);
      expect(balanceOfFunction).toBeCalledTimes(1);
      expect(value).toEqual(balance);
    });
  });

  describe("getJackpot", () => {
    test("returns jackpot address", async () => {
      const jackpotAddress = "0x0000000000000000000000000000000000000003";

      const jackpotFunction = jest
        .spyOn(prottery, "jackpot")
        .mockImplementation(async () => jackpotAddress);
      const value = await sdk.getJackpot();

      expect(jackpotFunction).toBeCalledTimes(1);
      expect(value).toEqual(jackpotAddress);
    });
  });

  describe("getOwner", () => {
    test("returns owner address", async () => {
      const ownerAddress = "0x0000000000000000000000000000000000000002";

      const ownerFunction = jest
        .spyOn(prottery, "owner")
        .mockImplementation(async () => ownerAddress);
      const value = await sdk.getOwner();

      expect(ownerFunction).toBeCalledTimes(1);
      expect(value).toEqual(ownerAddress);
    });
  });

  describe("getParticipants", () => {
    test("returns boolean", async () => {
      const active = true;
      const participantAddress = "0x0000000000000000000000000000000000000002";

      const participantsFunction = jest
        .spyOn(prottery, "participants")
        .mockImplementation(async () => active);
      const value = await sdk.getParticipants(participantAddress);

      expect(participantsFunction).toBeCalledWith(participantAddress);
      expect(participantsFunction).toBeCalledTimes(1);

      expect(value).toEqual(active);
    });
  });

  describe("getPrize", () => {
    test("returns lottery prize amount", async () => {
      const prize = ethers.utils.parseEther("10");

      const prizeFunction = jest
        .spyOn(prottery, "prize")
        .mockImplementation(async () => prize);
      const value = await sdk.getPrize();

      expect(prizeFunction).toBeCalledTimes(1);
      expect(value).toEqual(prize);
    });
  });

  describe("getRandom", () => {
    test("returns lottery random value", async () => {
      const random = BigNumber.from(123);

      const randomFunction = jest
        .spyOn(prottery, "random")
        .mockImplementation(async () => random);
      const value = await sdk.getRandom();

      expect(randomFunction).toBeCalledTimes(1);
      expect(value).toEqual(random);
    });
  });

  describe("getStatus", () => {
    test("returns lottery status", async () => {
      const status = 0;

      const statusFunction = jest
        .spyOn(prottery, "status")
        .mockImplementation(async () => status);
      const value = await sdk.getStatus();

      expect(statusFunction).toBeCalledTimes(1);
      expect(value).toEqual(status);
    });
  });

  describe("getThreshold", () => {
    test("returns lottery threshold", async () => {
      const threshold = BigNumber.from("120");

      const thresholdFunction = jest
        .spyOn(prottery, "threshold")
        .mockImplementation(async () => threshold);
      const value = await sdk.getThreshold();

      expect(thresholdFunction).toBeCalledTimes(1);
      expect(value).toEqual(threshold);
    });
  });

  describe("getToken", () => {
    test("returns token address", async () => {
      const tokenAddress = "0x0000000000000000000000000000000000000004";

      const tokenFunction = jest
        .spyOn(prottery, "token")
        .mockImplementation(async () => tokenAddress);
      const value = await sdk.getToken();

      expect(tokenFunction).toBeCalledTimes(1);
      expect(value).toEqual(tokenAddress);
    });
  });

  describe("enroll", () => {
    const tx = mock<ethers.ContractTransaction>();
    const onSubmitted = jest.fn();
    const onSuccess = jest.fn();
    const onError = jest.fn();
    const onRejected = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("when user rejects transaction", () => {
      test("callbacks onRejected", async () => {
        const enrollFunction = jest
          .spyOn(prottery, "enroll")
          .mockImplementation(() => {
            throw { reason: USER_REJECTED_TRANSACTION };
          });

        await sdk.enroll({ onSubmitted, onSuccess, onError, onRejected });

        expect(enrollFunction).toBeCalledTimes(1);
        expect(onRejected).toBeCalledTimes(1);
        expect(onSubmitted).not.toBeCalled();
        expect(onSuccess).not.toBeCalled();
        expect(onError).not.toBeCalled();
      });
    });

    describe("when transaction fails", () => {
      beforeEach(() => {
        jest.spyOn(tx, "wait").mockImplementation(() => {
          throw Error("something went wrong");
        });
      });

      test("callbacks onSubmitted and onError", async () => {
        const enrollFunction = jest
          .spyOn(prottery, "enroll")
          .mockImplementation(async () => tx);

        await sdk.enroll({ onSubmitted, onSuccess, onError });

        expect(enrollFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).not.toBeCalledTimes(1);
        expect(onError).toBeCalledTimes(1);
      });
    });

    describe("when transaction succeeds", () => {
      beforeEach(() => {
        const receipt = mock<ethers.ContractReceipt>();

        jest.spyOn(tx, "wait").mockImplementation(async () => receipt);
      });

      test("callbacks onSubmitted and onSuccess", async () => {
        const enrollFunction = jest
          .spyOn(prottery, "enroll")
          .mockImplementation(async () => tx);

        await sdk.enroll({ onSubmitted, onSuccess, onError });

        expect(enrollFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).toBeCalledTimes(1);
        expect(onError).not.toBeCalled();
      });
    });
  });

  describe("quit", () => {
    const tx = mock<ethers.ContractTransaction>();
    const onSubmitted = jest.fn();
    const onSuccess = jest.fn();
    const onError = jest.fn();
    const onRejected = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("when user rejects transaction", () => {
      test("callbacks onRejected", async () => {
        const quitFunction = jest
          .spyOn(prottery, "quit")
          .mockImplementation(() => {
            throw { reason: USER_REJECTED_TRANSACTION };
          });

        await sdk.quit({ onSubmitted, onSuccess, onError, onRejected });

        expect(quitFunction).toBeCalledTimes(1);
        expect(onRejected).toBeCalledTimes(1);
        expect(onSubmitted).not.toBeCalled();
        expect(onSuccess).not.toBeCalled();
        expect(onError).not.toBeCalled();
      });
    });

    describe("when transaction fails", () => {
      beforeEach(() => {
        jest.spyOn(tx, "wait").mockImplementation(() => {
          throw Error("something went wrong");
        });
      });

      test("callbacks onSubmitted and onError", async () => {
        const quitFunction = jest
          .spyOn(prottery, "quit")
          .mockImplementation(async () => tx);

        await sdk.quit({ onSubmitted, onSuccess, onError });

        expect(quitFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).not.toBeCalledTimes(1);
        expect(onError).toBeCalledTimes(1);
      });
    });

    describe("when transaction succeeds", () => {
      beforeEach(() => {
        const receipt = mock<ethers.ContractReceipt>();

        jest.spyOn(tx, "wait").mockImplementation(async () => receipt);
      });

      test("callbacks onSubmitted and onSuccess", async () => {
        const quitFunction = jest
          .spyOn(prottery, "quit")
          .mockImplementation(async () => tx);

        await sdk.quit({ onSubmitted, onSuccess, onError });

        expect(quitFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).toBeCalledTimes(1);
        expect(onError).not.toBeCalled();
      });
    });
  });

  describe("claim", () => {
    const tx = mock<ethers.ContractTransaction>();
    const onSubmitted = jest.fn();
    const onSuccess = jest.fn();
    const onError = jest.fn();
    const onRejected = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("when user rejects transaction", () => {
      test("callbacks onRejected", async () => {
        const claimFunction = jest
          .spyOn(prottery, "claim")
          .mockImplementation(() => {
            throw { reason: USER_REJECTED_TRANSACTION };
          });

        await sdk.claim({ onSubmitted, onSuccess, onError, onRejected });

        expect(claimFunction).toBeCalledTimes(1);
        expect(onRejected).toBeCalledTimes(1);
        expect(onSubmitted).not.toBeCalled();
        expect(onSuccess).not.toBeCalled();
        expect(onError).not.toBeCalled();
      });
    });

    describe("when transaction fails", () => {
      beforeEach(() => {
        jest.spyOn(tx, "wait").mockImplementation(() => {
          throw Error("something went wrong");
        });
      });

      test("callbacks onSubmitted and onError", async () => {
        const claimFunction = jest
          .spyOn(prottery, "claim")
          .mockImplementation(async () => tx);

        await sdk.claim({ onSubmitted, onSuccess, onError });

        expect(claimFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).not.toBeCalledTimes(1);
        expect(onError).toBeCalledTimes(1);
      });
    });

    describe("when transaction succeeds", () => {
      beforeEach(() => {
        const receipt = mock<ethers.ContractReceipt>();

        jest.spyOn(tx, "wait").mockImplementation(async () => receipt);
      });

      test("callbacks onSubmitted and onSuccess", async () => {
        const claimFunction = jest
          .spyOn(prottery, "claim")
          .mockImplementation(async () => tx);

        await sdk.claim({ onSubmitted, onSuccess, onError });

        expect(claimFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).toBeCalledTimes(1);
        expect(onError).not.toBeCalled();
      });
    });
  });

  describe("launch", () => {
    const tx = mock<ethers.ContractTransaction>();
    const onSubmitted = jest.fn();
    const onSuccess = jest.fn();
    const onError = jest.fn();
    const onRejected = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("when user rejects transaction", () => {
      test("callbacks onRejected", async () => {
        const launchFunction = jest
          .spyOn(prottery, "launch")
          .mockImplementation(() => {
            throw { reason: USER_REJECTED_TRANSACTION };
          });

        const threshold = BigNumber.from(120);
        const prize = ethers.utils.parseEther("50");

        await sdk.launch(threshold, prize, {
          onSubmitted,
          onSuccess,
          onError,
          onRejected,
        });

        expect(launchFunction).toBeCalledTimes(1);
        expect(onRejected).toBeCalledTimes(1);
        expect(onSubmitted).not.toBeCalled();
        expect(onSuccess).not.toBeCalled();
        expect(onError).not.toBeCalled();
      });
    });

    describe("when transaction fails", () => {
      beforeEach(() => {
        jest.spyOn(tx, "wait").mockImplementation(() => {
          throw Error("something went wrong");
        });
      });

      test("callbacks onSubmitted and onError", async () => {
        const launchFunction = jest
          .spyOn(prottery, "launch")
          .mockImplementation(async () => tx);

        const threshold = BigNumber.from(120);
        const prize = ethers.utils.parseEther("50");

        await sdk.launch(threshold, prize, { onSubmitted, onSuccess, onError });

        expect(launchFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).not.toBeCalledTimes(1);
        expect(onError).toBeCalledTimes(1);
      });
    });

    describe("when transaction succeeds", () => {
      beforeEach(() => {
        const receipt = mock<ethers.ContractReceipt>();

        jest.spyOn(tx, "wait").mockImplementation(async () => receipt);
      });

      test("callbacks onSubmitted and onSuccess", async () => {
        const launchFunction = jest
          .spyOn(prottery, "launch")
          .mockImplementation(async () => tx);

        const threshold = BigNumber.from(120);
        const prize = ethers.utils.parseEther("50");

        await sdk.launch(threshold, prize, { onSubmitted, onSuccess, onError });

        expect(launchFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).toBeCalledTimes(1);
        expect(onError).not.toBeCalled();
      });
    });
  });

  describe("raffle", () => {
    const tx = mock<ethers.ContractTransaction>();
    const onSubmitted = jest.fn();
    const onSuccess = jest.fn();
    const onError = jest.fn();
    const onRejected = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("when user rejects transaction", () => {
      test("callbacks onRejected", async () => {
        const raffleFunction = jest
          .spyOn(prottery, "raffle")
          .mockImplementation(() => {
            throw { reason: USER_REJECTED_TRANSACTION };
          });

        await sdk.raffle({
          onSubmitted,
          onSuccess,
          onError,
          onRejected,
        });

        expect(raffleFunction).toBeCalledTimes(1);
        expect(onRejected).toBeCalledTimes(1);
        expect(onSubmitted).not.toBeCalled();
        expect(onSuccess).not.toBeCalled();
        expect(onError).not.toBeCalled();
      });
    });

    describe("when transaction fails", () => {
      beforeEach(() => {
        jest.spyOn(tx, "wait").mockImplementation(() => {
          throw Error("something went wrong");
        });
      });

      test("callbacks onSubmitted and onError", async () => {
        const raffleFunction = jest
          .spyOn(prottery, "raffle")
          .mockImplementation(async () => tx);

        await sdk.raffle({ onSubmitted, onSuccess, onError });

        expect(raffleFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).not.toBeCalledTimes(1);
        expect(onError).toBeCalledTimes(1);
      });
    });

    describe("when transaction succeeds", () => {
      beforeEach(() => {
        const receipt = mock<ethers.ContractReceipt>();

        jest.spyOn(tx, "wait").mockImplementation(async () => receipt);
      });

      test("callbacks onSubmitted and onSuccess", async () => {
        const raffleFunction = jest
          .spyOn(prottery, "raffle")
          .mockImplementation(async () => tx);

        await sdk.raffle({ onSubmitted, onSuccess, onError });

        expect(raffleFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).toBeCalledTimes(1);
        expect(onError).not.toBeCalled();
      });
    });
  });

  describe("finish", () => {
    const tx = mock<ethers.ContractTransaction>();
    const onSubmitted = jest.fn();
    const onSuccess = jest.fn();
    const onError = jest.fn();
    const onRejected = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("when user rejects transaction", () => {
      test("callbacks onRejected", async () => {
        const finishFunction = jest
          .spyOn(prottery, "finish")
          .mockImplementation(() => {
            throw { reason: USER_REJECTED_TRANSACTION };
          });

        await sdk.finish(ADDRESS, {
          onSubmitted,
          onSuccess,
          onError,
          onRejected,
        });

        expect(finishFunction).toBeCalledTimes(1);
        expect(onRejected).toBeCalledTimes(1);
        expect(onSubmitted).not.toBeCalled();
        expect(onSuccess).not.toBeCalled();
        expect(onError).not.toBeCalled();
      });
    });

    describe("when transaction fails", () => {
      beforeEach(() => {
        jest.spyOn(tx, "wait").mockImplementation(() => {
          throw Error("something went wrong");
        });
      });

      test("callbacks onSubmitted and onError", async () => {
        const finishFunction = jest
          .spyOn(prottery, "finish")
          .mockImplementation(async () => tx);

        await sdk.finish(ADDRESS, { onSubmitted, onSuccess, onError });

        expect(finishFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).not.toBeCalledTimes(1);
        expect(onError).toBeCalledTimes(1);
      });
    });

    describe("when transaction succeeds", () => {
      beforeEach(() => {
        const receipt = mock<ethers.ContractReceipt>();

        jest.spyOn(tx, "wait").mockImplementation(async () => receipt);
      });

      test("callbacks onSubmitted and onSuccess", async () => {
        const finishFunction = jest
          .spyOn(prottery, "finish")
          .mockImplementation(async () => tx);

        await sdk.finish(ADDRESS, { onSubmitted, onSuccess, onError });

        expect(finishFunction).toBeCalledTimes(1);
        expect(onSubmitted).toBeCalledTimes(1);
        expect(onSuccess).toBeCalledTimes(1);
        expect(onError).not.toBeCalled();
      });
    });
  });
});
