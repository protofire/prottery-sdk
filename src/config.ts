type NetworkContracts = {
  PROTTERY: string;
  TOKEN: string;
};

type Config = Map<number, NetworkContracts>;

export const config: Config = new Map([
  [
    421614,
    {
      PROTTERY: "0x906a022A544c45Bb297eC2b2f635d79A733E04ad",
      TOKEN: "0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04",
    },
  ],
]);
