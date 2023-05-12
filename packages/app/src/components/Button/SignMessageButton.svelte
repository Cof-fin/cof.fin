<script lang="ts">
  import { signMessage, type SignMessageArgs } from "@wagmi/core";
  import { signature } from "../../stores";
  export let handleClick: () => void = async () => {
    let args: SignMessageArgs = {
      message: "Hello World",
    };

    const _signature = await signMessage(args);
    signature.set(_signature);
  };
  export let buttonText = "SIGN MESSAGE";
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
