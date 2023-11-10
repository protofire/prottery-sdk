import { describe, expect, test, jest } from "@jest/globals";
import { Graph } from "../src/graph";
import { ApolloClient, gql, NetworkStatus } from "@apollo/client/core";

describe("Graph", () => {
  describe("getParticipants", () => {
    test("returns array of participants", async () => {
      const query = gql`
        query GetParticipants {
          participants {
            id
          }
        }
      `;

      const participants = [
        { id: "0x0000000000000000000000000000000000000001" },
        { id: "0x0000000000000000000000000000000000000002" },
      ];

      const functionCall = jest
        .spyOn(ApolloClient.prototype, "query")
        .mockResolvedValue({
          data: { participants },
          loading: false,
          networkStatus: NetworkStatus.ready,
        });

      const graph = new Graph("https://subgraph-url.com");

      const result = await graph.getParticipants();

      expect(functionCall).toBeCalledWith({ query });
      expect(result).toEqual(participants);
    });
  });
});
