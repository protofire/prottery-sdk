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
exports.Service = exports.USER_REJECTED_TRANSACTION = void 0;
exports.USER_REJECTED_TRANSACTION = "user rejected transaction";
class Service {
    submitAction(action, callbacks) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { onSubmitted, onSuccess, onError, onRejected } = callbacks;
            try {
                const tx = yield action();
                if (onSubmitted)
                    onSubmitted({ tx });
                const receipt = yield tx.wait();
                if (onSuccess)
                    onSuccess({ tx, receipt });
            }
            catch (err) {
                const providerError = err;
                if (providerError.reason === exports.USER_REJECTED_TRANSACTION) {
                    if (onRejected)
                        onRejected();
                    return;
                }
                if (onError)
                    onError((_a = providerError.reason) !== null && _a !== void 0 ? _a : err);
            }
        });
    }
}
exports.Service = Service;
