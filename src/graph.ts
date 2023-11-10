import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  gql,
} from "@apollo/client/core";

type Participant = {
  id: string;
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
    const body = `
      query GetParticipants {
        participants {
          id
        }
      }
    `;

    const {
      data: { participants },
    } = await this.query(body);

    return participants;
  }
}
