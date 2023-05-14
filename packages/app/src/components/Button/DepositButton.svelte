<script lang="ts">
  import { ethers } from "ethers";
  import "../../generated";
  import { writeCoffin } from "../../generated";
  import { leverageValue, ethBalance, ethInput } from "../../stores";
  export let handleClick: () => void = async () => {
    console.log($leverageValue);

    const position = {
      token: ethers.constants.AddressZero,
      leverage: Math.round((Number($leverageValue) - 1) * 10000),
      active: false,
      amount: ethers.utils.parseEther("0"),
    };
    console.log("🚀 | lethandleClick: | position:", position);
    console.log(ethers.utils.parseEther($ethInput));

    let tx = await writeCoffin({
      functionName: "createLeveragedPositionETH",
      args: [position],
      overrides: { value: ethers.utils.parseEther($ethInput) },
    });
    console.log("🚀 | lethandleClick: | tx:", tx);
  };
  export let buttonText = "DEPOSIT";
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
