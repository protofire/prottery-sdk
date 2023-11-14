"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = void 0;
const service_1 = require("./service");
const contracts_1 = require("./contracts");
const config_1 = require("./config");
const graph_1 = require("./graph");
const isSigner = (signerOrProvider) => {
    return signerOrProvider.getSigner === undefined;
};
class SDK extends service_1.Service {
    constructor({ signerOrProvider, chainId, subgraphUri, }) {
        super();
        this.DEFAULT_CHAIN_ID = 11155111;
        if (subgraphUri)
            this.graph = new graph_1.Graph(subgraphUri);
        if (isSigner(signerOrProvider)) {
            this.signer = signerOrProvider;
        }
        else {
            this.signer = signerOrProvider.getSigner();
        }
        this.chainId = chainId !== null && chainId !== void 0 ? chainId : this.DEFAULT_CHAIN_ID;
        this.contract = contracts_1.Prottery__factory.connect(config_1.config.get(this.chainId).PROTTERY, this.signer);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.address = yield this.signer.getAddress();
        });
    }
    getNumberOfParticipants() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.numberOfParticipants();
        });
    }
    getBalanceOf(account) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.balanceOf(account);
        });
    }
    getJackpot() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.jackpot();
        });
    }
    getOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.owner();
        });
    }
    getParticipants(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.participants(id);
        });
    }
    getPrize() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.prize();
        });
    }
    getRandom() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.random();
        });
    }
    getStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.status();
        });
    }
    getThreshold() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.threshold();
        });
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.token();
        });
    }
    enroll(callbacks) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.submitAction(() => __awaiter(this, void 0, void 0, function* () { return this.contract.enroll(); }), callbacks);
        });
    }
    quit(callbacks) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.submitAction(() => __awaiter(this, void 0, void 0, function* () { return this.contract.quit(); }), callbacks);
        });
    }
    claim(callbacks) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.submitAction(() => __awaiter(this, void 0, void 0, function* () { return this.contract.claim(); }), callbacks);
        });
    }
}
exports.SDK = SDK;
