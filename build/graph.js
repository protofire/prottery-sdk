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
exports.Graph = void 0;
const core_1 = require("@apollo/client/core");
class Graph {
    constructor(uri) {
        this.client = new core_1.ApolloClient({
            uri,
            cache: new core_1.InMemoryCache(),
        });
    }
    query(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = (0, core_1.gql)(body);
            return yield this.client.query({ query });
        });
    }
    getParticipants() {
        return __awaiter(this, void 0, void 0, function* () {
            const body = `
      query GetParticipants {
        participants {
          id
        }
      }
    `;
            const { data: { participants }, } = yield this.query(body);
            return participants;
        });
    }
}
exports.Graph = Graph;
