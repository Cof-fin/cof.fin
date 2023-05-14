import type { BigNumber, ethers } from "ethers";
import { readable, writable } from "svelte/store";

import type { Client } from "@wagmi/core";
import type { EthereumClient } from "@web3modal/ethereum";
import type { Web3Modal } from "@web3modal/html";

export const ethereumClient = writable<EthereumClient>();
export const wagmiClient = writable<Client>();
export const web3Modal = writable<Web3Modal>();
export const providers = writable<{ [chainId: number]: ethers.providers.JsonRpcProvider }>();
export const signature = writable<string>("");
export const typedSignature = writable<string>("");

export const input = writable<string>("");

export const activeTab = writable<string>("Deposit");

export const ghoBalance = writable<BigNumber>();
export const usdcBalance = writable<BigNumber>();
export const ethBalance = writable<BigNumber>();
export const ethData = writable<{ date: number; value: number }[]>();

export const bblu = writable<number>();
export const bbll = writable<number>();
export const bbhu = writable<number>();
export const bbhl = writable<number>();
