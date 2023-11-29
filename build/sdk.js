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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = void 0;
const service_1 = require("./service");
const contracts_1 = require("./contracts");
const config_1 = require("./config");
const graph_1 = require("./graph");
const token_1 = require("./token");
const isSigner = (signerOrProvider) => {
    return (signerOrProvider.getSigner ===
        undefined);
};
class SDK extends service_1.Service {
    constructor({ signerOrProvider, chainId, subgraphUri, }) {
        super();
        this.DEFAULT_CHAIN_ID = 421614;
        if (subgraphUri)
            this.graph = new graph_1.Graph(subgraphUri);
        if (isSigner(signerOrProvider)) {
            this.signer = signerOrProvider;
        }
        else {
            this.signer = signerOrProvider.getSigner();
        }
        this.chainId = chainId !== null && chainId !== void 0 ? chainId : this.DEFAULT_CHAIN_ID;
        this.contractAddress = config_1.config.get(this.chainId).PROTTERY;
        this.contract = contracts_1.Prottery__factory.connect(this.contractAddress, this.signer);
        this.token = new token_1.Token(this);
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
    enroll(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { overrides } = options, callbacks = __rest(options, ["overrides"]);
            const action = () => __awaiter(this, void 0, void 0, function* () { return this.contract.enroll(Object.assign({}, overrides)); });
            yield this.submitAction(action, callbacks);
        });
    }
    quit(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { overrides } = options, callbacks = __rest(options, ["overrides"]);
            const action = () => __awaiter(this, void 0, void 0, function* () { return this.contract.quit(Object.assign({}, overrides)); });
            yield this.submitAction(action, callbacks);
        });
    }
    claim(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { overrides } = options, callbacks = __rest(options, ["overrides"]);
            const action = () => __awaiter(this, void 0, void 0, function* () { return this.contract.claim(Object.assign({}, overrides)); });
            yield this.submitAction(action, callbacks);
        });
    }
    launch(threshold, prize, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { overrides } = options, callbacks = __rest(options, ["overrides"]);
            const action = () => __awaiter(this, void 0, void 0, function* () { return this.contract.launch(threshold, prize, Object.assign({}, overrides)); });
            yield this.submitAction(action, callbacks);
        });
    }
    raffle(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { overrides } = options, callbacks = __rest(options, ["overrides"]);
            const action = () => __awaiter(this, void 0, void 0, function* () { return this.contract.raffle(Object.assign({}, overrides)); });
            yield this.submitAction(action, callbacks);
        });
    }
    finish(winner, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { overrides } = options, callbacks = __rest(options, ["overrides"]);
            const action = () => __awaiter(this, void 0, void 0, function* () { return this.contract.finish(winner, Object.assign({}, overrides)); });
            yield this.submitAction(action, callbacks);
        });
    }
}
exports.SDK = SDK;
