import { describe, expect, test, jest } from "@jest/globals";
import { Graph, Lottery, Participant } from "../src/graph";
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

      const participants: Participant[] = [
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

  describe("getLottery", () => {
    test("returns lottery by id", async () => {
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

      const lottery: Lottery = {
        id: "0x0000000000000000000000000000000000000001",
        threshold: "120",
        prize: "5000000000000000000",
        transactionHash: "0x0000000000000000000000000000000000000001",
        blockNumber: "1234",
        blockTimestamp: "12345678",
      };

      const func = jest
        .spyOn(ApolloClient.prototype, "query")
        .mockResolvedValue({
          data: { lottery },
          loading: false,
          networkStatus: NetworkStatus.ready,
        });

      const graph = new Graph("https://subgraph-url.com");

      const id = "0x0000000000000000000000000000000000000001";

      const result = await graph.getLottery(id);

      expect(func).toBeCalledWith({ query, variables: { id } });
      expect(result).toEqual(lottery);
    });
  });

  describe("getActiveLottery", () => {
    test("returns active lottery", async () => {
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

      const lottery: Lottery = {
        id: "0x0000000000000000000000000000000000000001",
        threshold: "120",
        prize: "5000000000000000000",
        transactionHash: "0x0000000000000000000000000000000000000001",
        blockNumber: "1234",
        blockTimestamp: "12345678",
      };

      const func = jest
        .spyOn(ApolloClient.prototype, "query")
        .mockResolvedValue({
          data: { lottery },
          loading: false,
          networkStatus: NetworkStatus.ready,
        });

      const id = "0x0000000000000000000000000000000000000001";

      jest.spyOn(Graph.prototype, "getGlobalStat").mockResolvedValue({
        currentLotteryId: id,
        numberOfParticipants: "0",
      });

      const graph = new Graph("https://subgraph-url.com");

      const result = await graph.getActiveLottery();

      expect(func).toBeCalledWith({ query, variables: { id } });
      expect(result).toEqual(lottery);
    });
  });
});
