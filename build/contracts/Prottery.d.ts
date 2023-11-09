import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ProtteryInterface extends utils.Interface {
    functions: {
        "balanceOf(address)": FunctionFragment;
        "claim()": FunctionFragment;
        "enroll()": FunctionFragment;
        "finish(address)": FunctionFragment;
        "jackpot()": FunctionFragment;
        "launch(uint256,uint256)": FunctionFragment;
        "numberOfParticipants()": FunctionFragment;
        "owner()": FunctionFragment;
        "participants(address)": FunctionFragment;
        "prize()": FunctionFragment;
        "quit()": FunctionFragment;
        "raffle()": FunctionFragment;
        "random()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "status()": FunctionFragment;
        "threshold()": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateRandom(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "claim" | "enroll" | "finish" | "jackpot" | "launch" | "numberOfParticipants" | "owner" | "participants" | "prize" | "quit" | "raffle" | "random" | "renounceOwnership" | "status" | "threshold" | "token" | "transferOwnership" | "updateRandom"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "claim", values?: undefined): string;
    encodeFunctionData(functionFragment: "enroll", values?: undefined): string;
    encodeFunctionData(functionFragment: "finish", values: [string]): string;
    encodeFunctionData(functionFragment: "jackpot", values?: undefined): string;
    encodeFunctionData(functionFragment: "launch", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "numberOfParticipants", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "participants", values: [string]): string;
    encodeFunctionData(functionFragment: "prize", values?: undefined): string;
    encodeFunctionData(functionFragment: "quit", values?: undefined): string;
    encodeFunctionData(functionFragment: "raffle", values?: undefined): string;
    encodeFunctionData(functionFragment: "random", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "status", values?: undefined): string;
    encodeFunctionData(functionFragment: "threshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateRandom", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enroll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finish", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jackpot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "launch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numberOfParticipants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "participants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "raffle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "random", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRandom", data: BytesLike): Result;
    events: {
        "LotteryCreated(uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ParticipantEnrolled(address)": EventFragment;
        "ParticipantQuit(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LotteryCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ParticipantEnrolled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ParticipantQuit"): EventFragment;
}
export interface LotteryCreatedEventObject {
    threshold: BigNumber;
    prize: BigNumber;
}
export type LotteryCreatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], LotteryCreatedEventObject>;
export type LotteryCreatedEventFilter = TypedEventFilter<LotteryCreatedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ParticipantEnrolledEventObject {
    participant: string;
}
export type ParticipantEnrolledEvent = TypedEvent<[
    string
], ParticipantEnrolledEventObject>;
export type ParticipantEnrolledEventFilter = TypedEventFilter<ParticipantEnrolledEvent>;
export interface ParticipantQuitEventObject {
    participant: string;
}
export type ParticipantQuitEvent = TypedEvent<[
    string
], ParticipantQuitEventObject>;
export type ParticipantQuitEventFilter = TypedEventFilter<ParticipantQuitEvent>;
export interface Prottery extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProtteryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claim(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        enroll(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        finish(_winner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        jackpot(overrides?: CallOverrides): Promise<[string]>;
        launch(_threshold: BigNumberish, _prize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        numberOfParticipants(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        participants(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        prize(overrides?: CallOverrides): Promise<[BigNumber]>;
        quit(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        raffle(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        random(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        status(overrides?: CallOverrides): Promise<[number]>;
        threshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateRandom(_number: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    claim(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    enroll(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finish(_winner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    jackpot(overrides?: CallOverrides): Promise<string>;
    launch(_threshold: BigNumberish, _prize: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    numberOfParticipants(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    participants(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    prize(overrides?: CallOverrides): Promise<BigNumber>;
    quit(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    raffle(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    random(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    status(overrides?: CallOverrides): Promise<number>;
    threshold(overrides?: CallOverrides): Promise<BigNumber>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateRandom(_number: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claim(overrides?: CallOverrides): Promise<void>;
        enroll(overrides?: CallOverrides): Promise<void>;
        finish(_winner: string, overrides?: CallOverrides): Promise<void>;
        jackpot(overrides?: CallOverrides): Promise<string>;
        launch(_threshold: BigNumberish, _prize: BigNumberish, overrides?: CallOverrides): Promise<void>;
        numberOfParticipants(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        participants(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        prize(overrides?: CallOverrides): Promise<BigNumber>;
        quit(overrides?: CallOverrides): Promise<void>;
        raffle(overrides?: CallOverrides): Promise<void>;
        random(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        status(overrides?: CallOverrides): Promise<number>;
        threshold(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateRandom(_number: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LotteryCreated(uint256,uint256)"(threshold?: BigNumberish | null, prize?: BigNumberish | null): LotteryCreatedEventFilter;
        LotteryCreated(threshold?: BigNumberish | null, prize?: BigNumberish | null): LotteryCreatedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "ParticipantEnrolled(address)"(participant?: string | null): ParticipantEnrolledEventFilter;
        ParticipantEnrolled(participant?: string | null): ParticipantEnrolledEventFilter;
        "ParticipantQuit(address)"(participant?: string | null): ParticipantQuitEventFilter;
        ParticipantQuit(participant?: string | null): ParticipantQuitEventFilter;
    };
    estimateGas: {
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claim(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        enroll(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        finish(_winner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        jackpot(overrides?: CallOverrides): Promise<BigNumber>;
        launch(_threshold: BigNumberish, _prize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        numberOfParticipants(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        participants(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        prize(overrides?: CallOverrides): Promise<BigNumber>;
        quit(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        raffle(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        random(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        status(overrides?: CallOverrides): Promise<BigNumber>;
        threshold(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateRandom(_number: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        enroll(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finish(_winner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        jackpot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        launch(_threshold: BigNumberish, _prize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        numberOfParticipants(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        participants(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        prize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quit(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        raffle(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        random(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        status(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        threshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateRandom(_number: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Prottery.d.ts.map