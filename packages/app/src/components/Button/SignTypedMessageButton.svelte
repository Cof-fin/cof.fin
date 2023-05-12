<script lang="ts">
  import { signTypedData } from "@wagmi/core";
  import { parseEther } from "ethers/lib/utils.js";
  import { typedSignature } from "../../stores";

  // All properties on a domain are optional
  const domain = {
    name: "Ether Mail",
    version: "1",
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
  } as const;

  // The named list of all type definitions
  const types = {
    Person: [
      { name: "name", type: "string" },
      { name: "wallet", type: "address" },
    ],
    Mail: [
      { name: "from", type: "Person" },
      { name: "to", type: "Person" },
      { name: "token", type: "Token" },
      { name: "contents", type: "string" },
    ],
    Token: [
      { name: "name", type: "string" },
      { name: "address", type: "address" },
      { name: "amount", type: "uint256" },
    ],
  } as const;

  const value = {
    from: {
      name: "Cow",
      wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
    },
    to: {
      name: "Bob",
      wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
    },
    token: {
      name: "Ether",
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      amount: parseEther("1"),
    },
    contents: "Hello, Bob!",
  } as const;
  export let handleClick: () => void = async () => {
    const _signature = await signTypedData({
      domain,
      types,
      value,
    });
    typedSignature.set(_signature);
  };
  export let buttonText = "SIGN TYPED MESSAGE";
</script>

<button on:click={handleClick}>
  <button-text>{buttonText}</button-text>
</button>

<style>
  /* your styles go here */
  button {
    /* Buttons */

    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    gap: 8px;

    width: 100%;
    height: 40px;

    background: #222222;
    border-bottom: 4px solid #000000;
    box-shadow: 0px 0px 4px #000000;
    border-radius: 10px;

    /* Inside auto layout */
  }
  button-text {
    /* NEXT */

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
</style>
