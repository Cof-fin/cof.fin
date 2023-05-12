import { readable, writable } from "svelte/store";

import type { Client } from "@wagmi/core";
import type { EthereumClient } from "@web3modal/ethereum";
import type { Web3Modal } from "@web3modal/html";
import type { ethers } from "ethers";

export const ethereumClient = writable<EthereumClient>();
export const wagmiClient = writable<Client>();
export const web3Modal = writable<Web3Modal>();
export const providers = writable<{ [chainId: number]: ethers.providers.JsonRpcProvider }>();
export const signature = writable<string>("");
export const typedSignature = writable<string>("");

export const input = writable<string>("");
