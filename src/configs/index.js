import * as nearAPI from "near-api-js";

const { keyStores } = nearAPI;
export const connectionConfig = {
  networkId: "mainnet",
  nodeUrl: "https://rpc.mainnet.near.org",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  walletUrl: "https://wallet.mainnet.near.org",
  helperUrl: "https://helper.mainnet.near.org",
  explorerUrl: "https://explorer.mainnet.near.org",
};

export const walletAddress = `codefunhouse.near`;
export const title = `Codefun House`;