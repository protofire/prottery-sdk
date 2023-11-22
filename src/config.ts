type NetworkContracts = {
  PROTTERY: string;
  TOKEN: string;
};

type Config = Map<number, NetworkContracts>;

export const config: Config = new Map([
  [
    11155111,
    {
      PROTTERY: "0x94aF31F385a8253Dd4c5B74E56e6c21bAE242826",
      TOKEN: "0x2b46F98F0211444cd4DD879CB0f36F507EB47038",
    },
  ],
]);
