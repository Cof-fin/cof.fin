# Cof.fin

Cof.fin is a decentralized finance (DeFi) platform that enables users to maximize their yield from liquidity mining through automated leveraged yield farming on Uniswap V3 and Aave. The platform provides a user-friendly and secure interface for yield farming, with competitive interest rates, transparent information on performance and fees, and robust risk management strategies to protect user investments.

## Problem Statement

The problem that Cof.fin aims to solve is the low yield returns for ETH holders who are looking to maximize their investments.

## Solution

Cof.fin's yield farming platform has the potential to not only generate high returns for investors but also increase the utility and adoption of GHO tokens, creating a positive feedback loop that benefits both investors and the broader DeFi ecosystem. By enabling users to deposit and withdraw GHO tokens for yield farming, Cof.fin creates a new use case for the tokens beyond simply holding them for speculative purposes. This can help to drive demand for GHO tokens and increase their overall value, while also providing users with a way to earn passive income on their investments.

Overall, Cof.fin's yield farming platform has the potential to not only address the low yield returns for GHO token holders but also increase the adoption and utility of GHO tokens in the broader DeFi ecosystem.

## User Flow

### User Flow 1: Depositing USDC and ETH to mint vault shares

1. User navigates to the Cof.fin website and connects their MetaMask wallet or a similar wallet provider.
2. User selects the "Deposit" option and enters the amount of USDC and ETH they wish to deposit into the Coffin vault.
3. User approves the transaction on their wallet and confirms the deposit on the Cof.fin platform.
4. Cof.fin platform mints vault shares corresponding to the deposited USDC and ETH and credits them to the user's wallet.
5. User can monitor the value of their vault shares and the overall performance of the Coffin vault on the Cof.fin platform.

### User Flow 2: Withdrawing USDC and ETH by burning vault shares

1. User navigates to the Cof.fin website and connects their MetaMask wallet or a similar wallet provider.
2. User selects the "Withdraw" option and enters the amount of vault shares they wish to burn and redeem for USDC and ETH.
3. User approves the transaction on their wallet and confirms the withdrawal on the Cof.fin platform.
4. Cof.fin platform burns the corresponding vault shares and returns the USDC and ETH to the user's wallet.
5. User can continue to monitor the value of their remaining vault shares and potentially deposit or withdraw more in the future.

### User Flow 3: Monitoring performance and analytics

1. User navigates to the Cof.fin website and connects their MetaMask wallet or a similar wallet provider.
2. User selects the "Analytics" option and is presented with an overview of their vault share holdings, as well as the overall performance of the Coffin vault.
3. User can view historical performance data and adjust their deposit or withdrawal strategies as needed to optimize their returns.
4. User can also view information on fees and risk management strategies employed by Cof.fin to protect their investments.

## Stack

1. Hardhat
2. Svelte + wagmi-core

## Installation

1. Prerequisite
   1. Install `pnpm`:
   2. Use node 16
   Using npm: `npm install -g pnpm`
   3. Others: <https://pnpm.io/installation>
2. `pnpm i`
3. Set web3modal project id in `packages/app/.env` ([obtain a project id for web3modal](https://cloud.walletconnect.com/sign-in))

## Setup

1. Start the local chain `pnpm node`
2. Start the web app `pnpm web`

## Faucet links

### Sepolia

- [Receive Ether on Sepolia](https://sepolia-faucet.pk910.de/)

### Taiko

- [Receive Ether on Taiko](https://l2faucet.hackathon.taiko.xyz/)