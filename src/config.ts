type NetworkContracts = {
  PROTTERY: string;
  TOKEN: string;
  SUBGRAPH: string;
};

type Config = Map<number, NetworkContracts>;

export const config: Config = new Map([
  [
    421614,
    {
      PROTTERY: "0x906a022A544c45Bb297eC2b2f635d79A733E04ad",
      TOKEN: "0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04",
      SUBGRAPH:
        "https://api.studio.thegraph.com/query/8290/prottery-arbitrum-sepolia/version/latest",
    },
  ],
  [
    42161,
    {
      PROTTERY: "0x02d1f0d6f0bb52eebedac461c3703678438ae5d5",
      TOKEN: "0x9623063377ad1b27544c965ccd7342f7ea7e88c7",
      SUBGRAPH:
        "https://query-prottery.protofire-thegraph.com/subgraphs/name/protofire/prottery-one",
    },
  ],
]);
