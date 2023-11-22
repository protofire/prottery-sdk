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
    approve(value, callbacks) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.submitAction(() => __awaiter(this, void 0, void 0, function* () {
                return this.contract.approve(this.address, value);
            }), callbacks);
        });
    }
}
exports.Token = Token;
