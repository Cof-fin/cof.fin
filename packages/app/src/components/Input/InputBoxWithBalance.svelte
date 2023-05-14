<script lang="ts">
  import type { BigNumber } from "ethers";
  import HorizontalStack from "../Stack/HorizontalStack.svelte";
  import { formatEther, formatUnits } from "ethers/lib/utils.js";
  import { ethInput, usdcInput } from "../../stores";

  export let icon: string;
  export let name: string;
  export let balance: BigNumber;

  let value: number;

  const handleOnChange = (event: any) => {
    if (name === "USDC") {
      usdcInput.set(event.target.value);
    } else {
      ethInput.set(event.target.value);
    }
  };
</script>

<container>
  <div class="input-header">
    <div class="input-name-wrapper">
      <input-header-text>{name}</input-header-text>
      {#if icon}
        <img src={icon} alt="Icon" />
      {/if}
    </div>
    <div class="input-balance">
      <input-header-balance on:click={() => (value = Number(balance))}
        >Balance: {balance
          ? Number(formatUnits(balance, name === "USDC" ? 6 : 18)).toFixed(2)
          : 0}</input-header-balance
      >
    </div>
  </div>
  <input type="number" bind:value on:change={handleOnChange} />
</container>

<style>
  container {
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px;
    gap: 4px;
    width: 100%;
  }

  .input-header {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }

  .input-name-wrapper {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: 100%;
  }
  .input-balance {
    flex-direction: row;
    align-self: center;
    justify-self: center;
    align-items: center;
    text-align: right;

    width: 100%;
    height: 24px;
  }

  input-header-text {
    /* Input Header Text */

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    /* identical to box height */
  }
  input-header-balance {
    /* Input Header Text */

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    /* identical to box height */
    cursor: pointer;
  }

  info {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 100%;
  }
  input {
    /* box-sizing: border-box; */

    width: 400px;
    height: 40px;

    border: 1px solid #000000;
    border-radius: 8px;
    padding-left: 16px;
  }

  button {
    /* Buttons */

    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 10px 16px;
    gap: 8px;

    width: 100px;
    height: 40px;

    background: #000000;
    border-radius: 10px;

    /* Inside auto layout */
  }
  button-text {
    /* NEXT */

    width: auto;
    height: 21px;

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
  }
</style>
