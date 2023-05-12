<script lang="ts">
  import {
    taiko,
    gnosis,
    mumbai,
    scroll_testnet,
    linea_testnet,
    thundercore_testnet,
  } from "./chain";
  import { sepolia, foundry } from "@wagmi/core/chains";
  import { ethereumClient, wagmiClient, web3Modal, providers } from "../../stores";
  import { configureChains, createClient } from "@wagmi/core";
  import { publicProvider } from "@wagmi/core/providers/public";
  import { EthereumClient, w3mConnectors } from "@web3modal/ethereum";
  import { Web3Modal } from "@web3modal/html";
  import { ethers } from "ethers";
  import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";

  const projectId = import.meta.env.VITE_WEB3MODAL_PROJECT_ID;

  $providers = {
    [sepolia.id]: new ethers.providers.JsonRpcProvider(sepolia.rpcUrls.default.http[0]),
    // [taiko.id]: new ethers.providers.JsonRpcProvider(taiko.rpcUrls.default.http[0]),
    [foundry.id]: new ethers.providers.JsonRpcProvider(foundry.rpcUrls.default.http[0]),
    [gnosis.id]: new ethers.providers.JsonRpcProvider(gnosis.rpcUrls.default.http[0]),
    [mumbai.id]: new ethers.providers.JsonRpcProvider(mumbai.rpcUrls.default.http[0]),
    [scroll_testnet.id]: new ethers.providers.JsonRpcProvider(
      scroll_testnet.rpcUrls.default.http[0]
    ),
    [linea_testnet.id]: new ethers.providers.JsonRpcProvider(linea_testnet.rpcUrls.default.http[0]),
    [thundercore_testnet.id]: new ethers.providers.JsonRpcProvider(
      thundercore_testnet.rpcUrls.default.http[0]
    ),
  };
  const { chains, provider } = configureChains(
    [sepolia, foundry, gnosis, mumbai, scroll_testnet, linea_testnet, thundercore_testnet],
    [
      publicProvider(),
      // jsonRpcProvider({
      //   rpc: (chain) => ({ http: $providers[chain.id].connection.url }),
      // }),
    ]
  );

  // @ts-ignore
  $wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ chains, version: 1, projectId }),
    provider,
  });
  $ethereumClient = new EthereumClient($wagmiClient, chains);
  $web3Modal = new Web3Modal(
    {
      projectId,
      defaultChain: sepolia,
      themeVariables: {
        "--w3m-font-family": "Roboto, sans-serif",
        "--w3m-accent-color": "#000000",
        "--w3m-background-color": "rgb(39, 42, 42)",
      },
    },
    $ethereumClient
  );
</script>

<slot />
