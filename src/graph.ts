import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  gql,
} from "@apollo/client/core";

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

type QueryResult<T, K extends string> = {
  [key in K]: T;
};

export class Graph {
  public client: ApolloClient<NormalizedCacheObject>;

  constructor(uri: string) {
    this.client = new ApolloClient({
      uri,
      cache: new InMemoryCache(),
    });
  }

  public async query(body: string) {
    const query = gql(body);

    return await this.client.query({ query });
  }

  public async getParticipants(): Promise<Participant[]> {
    const query = gql`
      query GetParticipants {
        participants {
          id
        }
      }
    `;

    const {
      data: { participants },
    } = await this.client.query<QueryResult<Participant[], "participants">>({
      query,
    });

    return participants;
  }

  public async getGlobalStat(): Promise<GlobalStat> {
    const id = "0x63757272656e74";

    const query = gql`
      query GetGlobalStat($id: String!) {
        globalStat(id: $id) {
          currentLotteryId
        }
      }
    `;

    const {
      data: { globalStat },
    } = await this.client.query<QueryResult<GlobalStat, "globalStat">>({
      query,
      variables: { id },
    });

    return globalStat;
  }

  public async getActiveLottery(): Promise<Lottery> {
    const globalStat = await this.getGlobalStat();

    return await this.getLottery(globalStat.currentLotteryId);
  }

  public async getLottery(id: string): Promise<Lottery> {
    const query = gql`
      query GetLottery($id: String!) {
        lottery(id: $id) {
          id
          threshold
          prize
          blockNumber
          blockTimestamp
          transactionHash
        }
      }
    `;

    const {
      data: { lottery },
    } = await this.client.query<QueryResult<Lottery, "lottery">>({
      query,
      variables: { id },
    });

    return lottery;
  }
}
