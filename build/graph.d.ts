import { ApolloClient, NormalizedCacheObject } from "@apollo/client/core";
export type Participant = {
    id: string;
};
export type Lottery = {
    id: string;
    threshold: string;
    prize: string;
    blockTimestamp: string;
    blockNumber: string;
    transactionHash: string;
};
export type GlobalStat = {
    currentLotteryId: string;
};
export declare class Graph {
    client: ApolloClient<NormalizedCacheObject>;
    constructor(uri: string);
    query(body: string): Promise<import("@apollo/client/core").ApolloQueryResult<any>>;
    getParticipants(): Promise<Participant[]>;
    getGlobalStat(): Promise<GlobalStat>;
    getActiveLottery(): Promise<Lottery>;
    getLottery(id: string): Promise<Lottery>;
}
//# sourceMappingURL=graph.d.ts.map