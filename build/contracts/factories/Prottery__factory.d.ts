import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Prottery, ProtteryInterface } from "../Prottery";
type ProtteryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Prottery__factory extends ContractFactory {
    constructor(...args: ProtteryConstructorParams);
    deploy(_token: string, _jackpot: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Prottery>;
    getDeployTransaction(_token: string, _jackpot: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Prottery;
    connect(signer: Signer): Prottery__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610cac380380610cac83398101604081905261002f916100fc565b338061005557604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61005e81610090565b50600780546001600160a01b039384166001600160a01b0319918216179091556008805492909316911617905561012f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100f757600080fd5b919050565b6000806040838503121561010f57600080fd5b610118836100e0565b9150610126602084016100e0565b90509250929050565b610b6e8061013e6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad578063e65f2a7e11610071578063e65f2a7e1461024d578063eaeb8dda14610255578063f2fde38b14610268578063fc0c546a1461027b578063fc2b8cc31461028e57600080fd5b8063715018a61461020f5780637417040e1461021757806382760cd2146102205780638da5cb5b14610233578063e3ac5d261461024457600080fd5b806342cde4e8116100f457806342cde4e81461019c5780634e71d92d146101b35780635ec01e4d146101bb5780636b31ee01146101c457806370a08231146101ef57600080fd5b806309e69ede14610126578063200d2ed21461015e578063305ec69e1461017f57806333c1420a14610194575b600080fd5b6101496101343660046109f5565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b60005461017290600160a01b900460ff1681565b6040516101559190610a3b565b61019261018d3660046109f5565b610296565b005b610192610350565b6101a560045481565b604051908152602001610155565b610192610458565b6101a560065481565b6008546101d7906001600160a01b031681565b6040516001600160a01b039091168152602001610155565b6101a56101fd3660046109f5565b60036020526000908152604090205481565b610192610520565b6101a560025481565b61019261022e366004610a63565b610534565b6000546001600160a01b03166101d7565b6101a560055481565b610192610652565b610192610263366004610a85565b61077c565b6101926102763660046109f5565b610812565b6007546101d7906001600160a01b031681565b610192610850565b600380600054600160a01b900460ff1660038111156102b7576102b7610a25565b146102ec57600054604051633ba7bf8960e11b81526102e391600160a01b900460ff1690600401610a3b565b60405180910390fd5b6102f4610978565b6005546001600160a01b0383166000908152600360205260408120805490919061031f908490610ab4565b909155505060006004819055600581905560068190558054819060ff60a01b1916600160a01b825b02179055505050565b600180600054600160a01b900460ff16600381111561037157610371610a25565b1461039d57600054604051633ba7bf8960e11b81526102e391600160a01b900460ff1690600401610a3b565b6103a5610978565b4260045411156103c85760405163aabd5a0960e01b815260040160405180910390fd5b600860009054906101000a90046001600160a01b03166001600160a01b031663e0c862896040518163ffffffff1660e01b81526004016020604051808303816000875af115801561041d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104419190610acd565b50506000805460ff60a01b1916600160a11b179055565b336000908152600360205260408120549003610487576040516312d37ee560e31b815260040160405180910390fd5b600754336000818152600360205260409081902054905163a9059cbb60e01b8152600481019290925260248201526001600160a01b039091169063a9059cbb906044016020604051808303816000875af11580156104e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050d9190610ae6565b5033600090815260036020526040812055565b610528610978565b61053260006109a5565b565b600080600054600160a01b900460ff16600381111561055557610555610a25565b1461058157600054604051633ba7bf8960e11b81526102e391600160a01b900460ff1690600401610a3b565b610589610978565b6007546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156105e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106049190610ae6565b50600483905560058290556000805460ff60a01b1916600160a01b178155604051839185917f47fd7f728dd62fa82686e732a84ce6c7b0ea5222a999c539c4594d7d57966e709190a3505050565b600280600054600160a01b900460ff16600381111561067357610673610a25565b0361069f57600054604051633ba7bf8960e11b81526102e391600160a01b900460ff1690600401610a3b565b600380600054600160a01b900460ff1660038111156106c0576106c0610a25565b036106ec57600054604051633ba7bf8960e11b81526102e391600160a01b900460ff1690600401610a3b565b3360008181526001602052604090205460ff161561071d57604051636d6d97d960e01b815260040160405180910390fd5b3360009081526001602081905260408220805460ff19169091179055600280549161074783610b08565b909155505060405133907fd1de25e5823e89fe190deea4ee5d89f72828597f5a1f4f51995dd66f63ecc85490600090a2505050565b6008546001600160a01b031633146107a6576040516282b42960e81b815260040160405180910390fd5b600280600054600160a01b900460ff1660038111156107c7576107c7610a25565b146107f357600054604051633ba7bf8960e11b81526102e391600160a01b900460ff1690600401610a3b565b6006829055600080546003919060ff60a01b1916600160a01b83610347565b61081a610978565b6001600160a01b03811661084457604051631e4fbdf760e01b8152600060048201526024016102e3565b61084d816109a5565b50565b600280600054600160a01b900460ff16600381111561087157610871610a25565b0361089d57600054604051633ba7bf8960e11b81526102e391600160a01b900460ff1690600401610a3b565b600380600054600160a01b900460ff1660038111156108be576108be610a25565b036108ea57600054604051633ba7bf8960e11b81526102e391600160a01b900460ff1690600401610a3b565b3360008181526001602052604081205460ff161515900361091e5760405163f6453cc560e01b815260040160405180910390fd5b336000908152600160205260408120805460ff19169055600280549161094383610b21565b909155505060405133907f74c8070b978c1c63d9c584528c108cae1dfdda370ad6ba5a7601145d8cd1e73690600090a2505050565b6000546001600160a01b031633146105325760405163118cdaa760e01b81523360048201526024016102e3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610a0757600080fd5b81356001600160a01b0381168114610a1e57600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b6020810160048310610a5d57634e487b7160e01b600052602160045260246000fd5b91905290565b60008060408385031215610a7657600080fd5b50508035926020909101359150565b600060208284031215610a9757600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610ac757610ac7610a9e565b92915050565b600060208284031215610adf57600080fd5b5051919050565b600060208284031215610af857600080fd5b81518015158114610a1e57600080fd5b600060018201610b1a57610b1a610a9e565b5060010190565b600081610b3057610b30610a9e565b50600019019056fea2646970667358221220d4b6d7e5092837fa1310d070c64a1d69819a88eedb926f4c0f4901fa3f3dba0c64736f6c63430008160033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_jackpot";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyEnrolled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum StateMachine.Status";
            readonly name: "status";
            readonly type: "uint8";
        }];
        readonly name: "InvalidStatus";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidThreshold";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotYetEnrolled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NothingToClaim";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "OwnableInvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "OwnableUnauthorizedAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Unauthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "threshold";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "prize";
            readonly type: "uint256";
        }];
        readonly name: "LotteryCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "participant";
            readonly type: "address";
        }];
        readonly name: "ParticipantEnrolled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "participant";
            readonly type: "address";
        }];
        readonly name: "ParticipantQuit";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "claim";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "enroll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_winner";
            readonly type: "address";
        }];
        readonly name: "finish";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "jackpot";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_threshold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_prize";
            readonly type: "uint256";
        }];
        readonly name: "launch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "numberOfParticipants";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "participants";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "prize";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "quit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "raffle";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "random";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "status";
        readonly outputs: readonly [{
            readonly internalType: "enum StateMachine.Status";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "threshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_number";
            readonly type: "uint256";
        }];
        readonly name: "updateRandom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ProtteryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Prottery;
}
export {};
//# sourceMappingURL=Prottery__factory.d.ts.map