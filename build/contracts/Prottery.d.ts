import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ProtteryInterface extends utils.Interface {
    functions: {
        "UPGRADE_INTERFACE_VERSION()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "claim()": FunctionFragment;
        "enroll()": FunctionFragment;
        "finish(address)": FunctionFragment;
        "indexer()": FunctionFragment;
        "initialize(address,address,address,address)": FunctionFragment;
        "isDelegator(address)": FunctionFragment;
        "jackpot()": FunctionFragment;
        "launch(uint256,uint256)": FunctionFragment;
        "lockedBalance()": FunctionFragment;
        "numberOfParticipants()": FunctionFragment;
        "owner()": FunctionFragment;
        "participants(address)": FunctionFragment;
        "prize()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "quit()": FunctionFragment;
        "raffle()": FunctionFragment;
        "random()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "reset()": FunctionFragment;
        "setIndexer(address)": FunctionFragment;
        "setJackpot(address)": FunctionFragment;
        "setStaking(address)": FunctionFragment;
        "staking()": FunctionFragment;
        "startAt()": FunctionFragment;
        "status()": FunctionFragment;
        "threshold()": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateRandom(uint256)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "withdraw()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "UPGRADE_INTERFACE_VERSION" | "balanceOf" | "claim" | "enroll" | "finish" | "indexer" | "initialize" | "isDelegator" | "jackpot" | "launch" | "lockedBalance" | "numberOfParticipants" | "owner" | "participants" | "prize" | "proxiableUUID" | "quit" | "raffle" | "random" | "renounceOwnership" | "reset" | "setIndexer" | "setJackpot" | "setStaking" | "staking" | "startAt" | "status" | "threshold" | "token" | "transferOwnership" | "updateRandom" | "upgradeToAndCall" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "claim", values?: undefined): string;
    encodeFunctionData(functionFragment: "enroll", values?: undefined): string;
    encodeFunctionData(functionFragment: "finish", values: [string]): string;
    encodeFunctionData(functionFragment: "indexer", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string]): string;
    encodeFunctionData(functionFragment: "isDelegator", values: [string]): string;
    encodeFunctionData(functionFragment: "jackpot", values?: undefined): string;
    encodeFunctionData(functionFragment: "launch", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockedBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "numberOfParticipants", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "participants", values: [string]): string;
    encodeFunctionData(functionFragment: "prize", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "quit", values?: undefined): string;
    encodeFunctionData(functionFragment: "raffle", values?: undefined): string;
    encodeFunctionData(functionFragment: "random", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "reset", values?: undefined): string;
    encodeFunctionData(functionFragment: "setIndexer", values: [string]): string;
    encodeFunctionData(functionFragment: "setJackpot", values: [string]): string;
    encodeFunctionData(functionFragment: "setStaking", values: [string]): string;
    encodeFunctionData(functionFragment: "staking", values?: undefined): string;
    encodeFunctionData(functionFragment: "startAt", values?: undefined): string;
    encodeFunctionData(functionFragment: "status", values?: undefined): string;
    encodeFunctionData(functionFragment: "threshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateRandom", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enroll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finish", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "indexer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jackpot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "launch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numberOfParticipants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "participants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "raffle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "random", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIndexer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setJackpot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStaking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "staking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRandom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Initialized(uint64)": EventFragment;
        "LotteryCreated(uint256,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ParticipantEnrolled(address)": EventFragment;
        "ParticipantQuit(address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LotteryCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ParticipantEnrolled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ParticipantQuit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface InitializedEventObject {
    version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface LotteryCreatedEventObject {
    startAt: BigNumber;
    threshold: BigNumber;
    prize: BigNumber;
}
export type LotteryCreatedEvent = TypedEvent<[
    BigNumber,
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
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
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
        UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<[string]>;
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
        indexer(overrides?: CallOverrides): Promise<[string]>;
        initialize(_token: string, _jackpot: string, _staking: string, _indexer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isDelegator(_account: string, overrides?: CallOverrides): Promise<[boolean]>;
        jackpot(overrides?: CallOverrides): Promise<[string]>;
        launch(_threshold: BigNumberish, _prize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lockedBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        numberOfParticipants(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        participants(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        prize(overrides?: CallOverrides): Promise<[BigNumber]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
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
        reset(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setIndexer(_indexer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setJackpot(_jackpot: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setStaking(_staking: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        staking(overrides?: CallOverrides): Promise<[string]>;
        startAt(overrides?: CallOverrides): Promise<[BigNumber]>;
        status(overrides?: CallOverrides): Promise<[number]>;
        threshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateRandom(_number: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<string>;
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
    indexer(overrides?: CallOverrides): Promise<string>;
    initialize(_token: string, _jackpot: string, _staking: string, _indexer: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isDelegator(_account: string, overrides?: CallOverrides): Promise<boolean>;
    jackpot(overrides?: CallOverrides): Promise<string>;
    launch(_threshold: BigNumberish, _prize: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lockedBalance(overrides?: CallOverrides): Promise<BigNumber>;
    numberOfParticipants(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    participants(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    prize(overrides?: CallOverrides): Promise<BigNumber>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
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
    reset(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setIndexer(_indexer: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setJackpot(_jackpot: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setStaking(_staking: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    staking(overrides?: CallOverrides): Promise<string>;
    startAt(overrides?: CallOverrides): Promise<BigNumber>;
    status(overrides?: CallOverrides): Promise<number>;
    threshold(overrides?: CallOverrides): Promise<BigNumber>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateRandom(_number: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<string>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claim(overrides?: CallOverrides): Promise<void>;
        enroll(overrides?: CallOverrides): Promise<void>;
        finish(_winner: string, overrides?: CallOverrides): Promise<void>;
        indexer(overrides?: CallOverrides): Promise<string>;
        initialize(_token: string, _jackpot: string, _staking: string, _indexer: string, overrides?: CallOverrides): Promise<void>;
        isDelegator(_account: string, overrides?: CallOverrides): Promise<boolean>;
        jackpot(overrides?: CallOverrides): Promise<string>;
        launch(_threshold: BigNumberish, _prize: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lockedBalance(overrides?: CallOverrides): Promise<BigNumber>;
        numberOfParticipants(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        participants(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        prize(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        quit(overrides?: CallOverrides): Promise<void>;
        raffle(overrides?: CallOverrides): Promise<void>;
        random(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        reset(overrides?: CallOverrides): Promise<void>;
        setIndexer(_indexer: string, overrides?: CallOverrides): Promise<void>;
        setJackpot(_jackpot: string, overrides?: CallOverrides): Promise<void>;
        setStaking(_staking: string, overrides?: CallOverrides): Promise<void>;
        staking(overrides?: CallOverrides): Promise<string>;
        startAt(overrides?: CallOverrides): Promise<BigNumber>;
        status(overrides?: CallOverrides): Promise<number>;
        threshold(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateRandom(_number: BigNumberish, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        withdraw(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Initialized(uint64)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "LotteryCreated(uint256,uint256,uint256)"(startAt?: BigNumberish | null, threshold?: BigNumberish | null, prize?: BigNumberish | null): LotteryCreatedEventFilter;
        LotteryCreated(startAt?: BigNumberish | null, threshold?: BigNumberish | null, prize?: BigNumberish | null): LotteryCreatedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "ParticipantEnrolled(address)"(participant?: string | null): ParticipantEnrolledEventFilter;
        ParticipantEnrolled(participant?: string | null): ParticipantEnrolledEventFilter;
        "ParticipantQuit(address)"(participant?: string | null): ParticipantQuitEventFilter;
        ParticipantQuit(participant?: string | null): ParticipantQuitEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
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
        indexer(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_token: string, _jackpot: string, _staking: string, _indexer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isDelegator(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        jackpot(overrides?: CallOverrides): Promise<BigNumber>;
        launch(_threshold: BigNumberish, _prize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lockedBalance(overrides?: CallOverrides): Promise<BigNumber>;
        numberOfParticipants(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        participants(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        prize(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
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
        reset(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setIndexer(_indexer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setJackpot(_jackpot: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setStaking(_staking: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        staking(overrides?: CallOverrides): Promise<BigNumber>;
        startAt(overrides?: CallOverrides): Promise<BigNumber>;
        status(overrides?: CallOverrides): Promise<BigNumber>;
        threshold(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateRandom(_number: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        indexer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_token: string, _jackpot: string, _staking: string, _indexer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isDelegator(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        jackpot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        launch(_threshold: BigNumberish, _prize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lockedBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numberOfParticipants(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        participants(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        prize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        reset(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setIndexer(_indexer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setJackpot(_jackpot: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setStaking(_staking: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        staking(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        status(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        threshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateRandom(_number: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Prottery.d.ts.map