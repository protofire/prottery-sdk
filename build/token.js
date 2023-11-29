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
exports.Token = void 0;
const contracts_1 = require("./contracts");
const config_1 = require("./config");
const service_1 = require("./service");
class Token extends service_1.Service {
    constructor(_sdk) {
        super();
        this.sdk = _sdk;
        this.address = config_1.config.get(_sdk.chainId).TOKEN;
        this.contract = contracts_1.ERC20__factory.connect(this.address, _sdk.signer);
    }
    approve(value, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { overrides } = options, callbacks = __rest(options, ["overrides"]);
            const action = () => __awaiter(this, void 0, void 0, function* () {
                return this.contract.approve(this.sdk.contractAddress, value, Object.assign({}, overrides));
            });
            yield this.submitAction(action, callbacks);
        });
    }
    allowance() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.allowance(this.sdk.address, this.sdk.contractAddress);
        });
    }
}
exports.Token = Token;
