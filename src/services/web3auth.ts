import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";

const polygonChainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x89", // hex of 137, polygon mainnet
  rpcTarget: "https://rpc.ankr.com/polygon",
  // Avoid using public rpcTarget in production.
  // Use services like Infura, Quicknode etc
  displayName: "Polygon Mainnet",
  blockExplorer: "https://polygonscan.com",
  ticker: "MATIC",
  tickerName: "Matic",
};

const polygonTestChainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x13881", // hex of 80001, polygon testnet
  rpcTarget: "https://rpc.ankr.com/polygon_mumbai",
  // Avoid using public rpcTarget in production.
  // Use services like Infura, Quicknode etc
  displayName: "Polygon Mumbai Testnet",
  blockExplorer: "https://mumbai.polygonscan.com/",
  ticker: "MATIC",
  tickerName: "Matic",
};

const clientId =
  "BA_nIT6dUaUHGfDg7PABFhG0Ty8X7kOtcGkcUl_5aW78O3cRcSzykjOKzz5meSqBMj80DVCaP8ae0RtBFntYtNc";

export const web3auth = new Web3Auth({
  clientId: clientId, // get it from Web3Auth Dashboard
  web3AuthNetwork: "cyan",
  chainConfig: polygonTestChainConfig,
});
