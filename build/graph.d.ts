import { ApolloClient, NormalizedCacheObject } from "@apollo/client/core";
type Participant = {
    id: string;
};
export declare class Graph {
    client: ApolloClient<NormalizedCacheObject>;
    constructor(uri: string);
    query(body: string): Promise<import("@apollo/client/core").ApolloQueryResult<any>>;
    getParticipants(): Promise<Participant[]>;
}
export {};
//# sourceMappingURL=graph.d.ts.map