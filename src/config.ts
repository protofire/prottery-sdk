type NetworkContracts = {
  PROTTERY: string,
}

type Config = Map<number, NetworkContracts>

export const config: Config = new Map([
  [
    11155111, 
    { 
      PROTTERY: "0x94aF31F385a8253Dd4c5B74E56e6c21bAE242826"
    }
  ]
]);
