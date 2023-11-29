import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Prottery, ProtteryInterface } from "../Prottery";
type ProtteryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Prottery__factory extends ContractFactory {
    constructor(...args: ProtteryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<Prottery>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Prottery;
    connect(signer: Signer): Prottery__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b506080516118d561003e600039600081816111360152818161115f01526112a001526118d56000f3fe6080604052600436106101ee5760003560e01c80637b80889b1161010d578063e06118b7116100a0578063f2fde38b1161006f578063f2fde38b14610579578063f8c8765e14610599578063fc0c546a146105b9578063fc2b8cc3146105d9578063fd8ab482146105ee57600080fd5b8063e06118b71461050e578063e3ac5d261461052e578063e65f2a7e14610544578063eaeb8dda1461055957600080fd5b80638ff39099116100dc5780638ff3909914610485578063ad3cb1cc146104a5578063c7446565146104e3578063d826f88f146104f957600080fd5b80637b80889b146103f25780637e95385c1461040857806382760cd2146104285780638da5cb5b1461044857600080fd5b80634e71d92d116101855780636b31ee01116101545780636b31ee011461037a57806370a082311461039a578063715018a6146103c75780637417040e146103dc57600080fd5b80634e71d92d146103275780634f1ef2861461033c57806352d1902d1461034f5780635ec01e4d1461036457600080fd5b80633b431e92116101c15780633b431e92146102965780633ccfd60b146102b657806342cde4e8146102cb5780634cf088d9146102ef57600080fd5b806309e69ede146101f3578063200d2ed214610238578063305ec69e1461025f57806333c1420a14610281575b600080fd5b3480156101ff57600080fd5b5061022361020e3660046115a5565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561024457600080fd5b506000546102529060ff1681565b60405161022f91906115d6565b34801561026b57600080fd5b5061027f61027a3660046115a5565b61060e565b005b34801561028d57600080fd5b5061027f6106d3565b3480156102a257600080fd5b5061027f6102b13660046115a5565b6107d4565b3480156102c257600080fd5b5061027f6107fe565b3480156102d757600080fd5b506102e160045481565b60405190815260200161022f565b3480156102fb57600080fd5b50600b5461030f906001600160a01b031681565b6040516001600160a01b03909116815260200161022f565b34801561033357600080fd5b5061027f610922565b61027f61034a366004611614565b610a12565b34801561035b57600080fd5b506102e1610a31565b34801561037057600080fd5b506102e160065481565b34801561038657600080fd5b5060085461030f906001600160a01b031681565b3480156103a657600080fd5b506102e16103b53660046115a5565b60036020526000908152604090205481565b3480156103d357600080fd5b5061027f610a4e565b3480156103e857600080fd5b506102e160025481565b3480156103fe57600080fd5b506102e160095481565b34801561041457600080fd5b5061027f6104233660046115a5565b610a62565b34801561043457600080fd5b5061027f6104433660046116d6565b610a8c565b34801561045457600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031661030f565b34801561049157600080fd5b5061027f6104a03660046115a5565b610b9e565b3480156104b157600080fd5b506104d6604051806040016040528060058152602001640352e302e360dc1b81525081565b60405161022f919061171c565b3480156104ef57600080fd5b506102e1600a5481565b34801561050557600080fd5b5061027f610bc8565b34801561051a57600080fd5b50600c5461030f906001600160a01b031681565b34801561053a57600080fd5b506102e160055481565b34801561055057600080fd5b5061027f610bf0565b34801561056557600080fd5b5061027f61057436600461174f565b610d24565b34801561058557600080fd5b5061027f6105943660046115a5565b610da6565b3480156105a557600080fd5b5061027f6105b4366004611768565b610de4565b3480156105c557600080fd5b5060075461030f906001600160a01b031681565b3480156105e557600080fd5b5061027f610f41565b3480156105fa57600080fd5b506102236106093660046115a5565b61104d565b60038060005460ff166003811115610628576106286115c0565b1461065657600054604051633ba7bf8960e11b815261064d9160ff16906004016115d6565b60405180910390fd5b61065e6110d0565b6005546001600160a01b038316600090815260036020526040812080549091906106899084906117d2565b9091555050600554600980546000906106a39084906117d2565b90915550506000600a8190556004819055600581905560068190558054819060ff19166001825b02179055505050565b60018060005460ff1660038111156106ed576106ed6115c0565b1461071257600054604051633ba7bf8960e11b815261064d9160ff16906004016115d6565b61071a6110d0565b42600454600a5461072b91906117d2565b111561074a5760405163aabd5a0960e01b815260040160405180910390fd5b600860009054906101000a90046001600160a01b03166001600160a01b031663e0c862896040518163ffffffff1660e01b81526004016020604051808303816000875af115801561079f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c391906117e5565b50506000805460ff19166002179055565b6107dc6110d0565b600c80546001600160a01b0319166001600160a01b0392909216919091179055565b6108066110d0565b6007546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561084f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087391906117e5565b905060006009548261088591906117fe565b9050806000036108a857604051630686827b60e51b815260040160405180910390fd5b60075460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb906044016020604051808303816000875af11580156108f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091d9190611811565b505050565b336000908152600360205260408120549003610951576040516312d37ee560e31b815260040160405180910390fd5b600754336000818152600360205260409081902054905163a9059cbb60e01b8152600481019290925260248201526001600160a01b039091169063a9059cbb906044016020604051808303816000875af11580156109b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d79190611811565b503360009081526003602052604081205460098054919290916109fb9084906117fe565b909155505033600090815260036020526040812055565b610a1a61112b565b610a23826111d0565b610a2d82826111d8565b5050565b6000610a3b611295565b5060008051602061188083398151915290565b610a566110d0565b610a6060006112de565b565b610a6a6110d0565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b60008060005460ff166003811115610aa657610aa66115c0565b14610acb57600054604051633ba7bf8960e11b815261064d9160ff16906004016115d6565b610ad36110d0565b6007546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610b2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4e9190611811565b5042600a819055600484905560058390556000805460ff191660011781556040518492869290917fbcab9af3175c8a9d53b9308a82ee378a84c65b0c22e3dfea2afac802c73a078a9190a4505050565b610ba66110d0565b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b610bd06110d0565b6000600a819055600481905560058190556006819055805460ff19169055565b60028060005460ff166003811115610c0a57610c0a6115c0565b03610c2f57600054604051633ba7bf8960e11b815261064d9160ff16906004016115d6565b60038060005460ff166003811115610c4957610c496115c0565b03610c6e57600054604051633ba7bf8960e11b815261064d9160ff16906004016115d6565b3360008181526001602052604090205460ff1615610c9f57604051636d6d97d960e01b815260040160405180910390fd5b610ca83361104d565b610cc55760405163b014372960e01b815260040160405180910390fd5b3360009081526001602081905260408220805460ff191690911790556002805491610cef83611833565b909155505060405133907fd1de25e5823e89fe190deea4ee5d89f72828597f5a1f4f51995dd66f63ecc85490600090a2505050565b6008546001600160a01b03163314610d4e576040516282b42960e81b815260040160405180910390fd5b60028060005460ff166003811115610d6857610d686115c0565b14610d8d57600054604051633ba7bf8960e11b815261064d9160ff16906004016115d6565b6006829055600080546003919060ff19166001836106ca565b610dae6110d0565b6001600160a01b038116610dd857604051631e4fbdf760e01b81526000600482015260240161064d565b610de1816112de565b50565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff16600081158015610e2a5750825b905060008267ffffffffffffffff166001148015610e475750303b155b905081158015610e55575080155b15610e735760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610e9d57845460ff60401b1916600160401b1785555b600780546001600160a01b03199081166001600160a01b038c8116919091179092556008805482168b8416179055600b805482168a8416179055600c8054909116918816919091179055610ef03361134f565b8315610f3657845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b60028060005460ff166003811115610f5b57610f5b6115c0565b03610f8057600054604051633ba7bf8960e11b815261064d9160ff16906004016115d6565b60038060005460ff166003811115610f9a57610f9a6115c0565b03610fbf57600054604051633ba7bf8960e11b815261064d9160ff16906004016115d6565b3360008181526001602052604081205460ff1615159003610ff35760405163f6453cc560e01b815260040160405180910390fd5b336000908152600160205260408120805460ff1916905560028054916110188361184c565b909155505060405133907f74c8070b978c1c63d9c584528c108cae1dfdda370ad6ba5a7601145d8cd1e73690600090a2505050565b600b54600c5460405163a0e1192960e01b81526001600160a01b0391821660048201528382166024820152600092919091169063a0e1192990604401602060405180830381865afa1580156110a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ca9190611811565b92915050565b336111027f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b031614610a605760405163118cdaa760e01b815233600482015260240161064d565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806111b257507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166111a6600080516020611880833981519152546001600160a01b031690565b6001600160a01b031614155b15610a605760405163703e46dd60e11b815260040160405180910390fd5b610de16110d0565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611232575060408051601f3d908101601f1916820190925261122f918101906117e5565b60015b61125a57604051634c9c8ce360e01b81526001600160a01b038316600482015260240161064d565b600080516020611880833981519152811461128b57604051632a87526960e21b81526004810182905260240161064d565b61091d8383611360565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a605760405163703e46dd60e11b815260040160405180910390fd5b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6113576113b6565b610de1816113ff565b61136982611407565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a28051156113ae5761091d828261146c565b610a2d6114e2565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff16610a6057604051631afcd79f60e31b815260040160405180910390fd5b610dae6113b6565b806001600160a01b03163b60000361143d57604051634c9c8ce360e01b81526001600160a01b038216600482015260240161064d565b60008051602061188083398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b0316846040516114899190611863565b600060405180830381855af49150503d80600081146114c4576040519150601f19603f3d011682016040523d82523d6000602084013e6114c9565b606091505b50915091506114d9858383611501565b95945050505050565b3415610a605760405163b398979f60e01b815260040160405180910390fd5b6060826115165761151182611560565b611559565b815115801561152d57506001600160a01b0384163b155b1561155657604051639996b31560e01b81526001600160a01b038516600482015260240161064d565b50805b9392505050565b8051156115705780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b80356001600160a01b03811681146115a057600080fd5b919050565b6000602082840312156115b757600080fd5b61155982611589565b634e487b7160e01b600052602160045260246000fd5b60208101600483106115f857634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561162757600080fd5b61163083611589565b9150602083013567ffffffffffffffff8082111561164d57600080fd5b818501915085601f83011261166157600080fd5b813581811115611673576116736115fe565b604051601f8201601f19908116603f0116810190838211818310171561169b5761169b6115fe565b816040528281528860208487010111156116b457600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600080604083850312156116e957600080fd5b50508035926020909101359150565b60005b838110156117135781810151838201526020016116fb565b50506000910152565b602081526000825180602084015261173b8160408501602087016116f8565b601f01601f19169190910160400192915050565b60006020828403121561176157600080fd5b5035919050565b6000806000806080858703121561177e57600080fd5b61178785611589565b935061179560208601611589565b92506117a360408601611589565b91506117b160608601611589565b905092959194509250565b634e487b7160e01b600052601160045260246000fd5b808201808211156110ca576110ca6117bc565b6000602082840312156117f757600080fd5b5051919050565b818103818111156110ca576110ca6117bc565b60006020828403121561182357600080fd5b8151801515811461155957600080fd5b600060018201611845576118456117bc565b5060010190565b60008161185b5761185b6117bc565b506000190190565b600082516118758184602087016116f8565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca26469706673582212204e7412e626269efc3a97f97965b3735fe671132b291312ce498cdae0d25b59fa64736f6c63430008160033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "AddressEmptyCode";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyEnrolled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "ERC1967InvalidImplementation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ERC1967NonPayable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedInnerCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInitialization";
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
        readonly name: "NotInitializing";
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
        readonly inputs: readonly [];
        readonly name: "NothingToWithdraw";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyDelegator";
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
        readonly name: "UUPSUnauthorizedCallContext";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "slot";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Unauthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "startAt";
            readonly type: "uint256";
        }, {
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "UPGRADE_INTERFACE_VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly name: "indexer";
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
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_jackpot";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_staking";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_indexer";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }];
        readonly name: "isDelegator";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
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
        readonly name: "lockedBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
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
        readonly name: "reset";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_indexer";
            readonly type: "address";
        }];
        readonly name: "setIndexer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_jackpot";
            readonly type: "address";
        }];
        readonly name: "setJackpot";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_staking";
            readonly type: "address";
        }];
        readonly name: "setStaking";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "staking";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ProtteryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Prottery;
}
export {};
//# sourceMappingURL=Prottery__factory.d.ts.map