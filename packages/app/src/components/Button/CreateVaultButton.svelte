<script lang="ts">
  import { writeCoffinFactory } from "../../generated";
  export let handleClick: () => void = async () => {
    let tx = await writeCoffinFactory({ functionName: "createNewVault" });
    console.log("🚀 | lethandleClick: | tx:", tx);
    let results = await tx.wait();
    console.log("🚀 | lethandleClick: | results:", results);
  };
  export let buttonText = "Create Vault";
</script>

<button on:click={handleClick}>
  <button-text>{buttonText}</button-text>
</button>

<style lang="scss">
  @import "../../styles/colours.scss";
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

    background: $secondary_1;
    border-bottom: 4px solid $secondary_1_shadow;
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
