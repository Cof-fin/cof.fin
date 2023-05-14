<script lang="ts">
  import ManagePositionLine from "./ManagePositionLine.svelte";
  import OptimalRangeLine from "./OptimalRangeLine.svelte";

  import { readGho } from "../../generated";

  import { onMount } from "svelte";

  import { leverageValue, vaultGhoBalance } from "../../stores";
  import { formatEther } from "ethers/lib/utils.js";

  onMount(async () => {
    vaultGhoBalance.set(
      await readGho({
        functionName: "balanceOf",
        args: ["0x80b74cd7ca2ffe55fd95e8d4e9078f1b069717af"],
      })
    );
    console.log($vaultGhoBalance);
  });
</script>

<div class="vertical-container">
  <title>Position Details</title>
  <ManagePositionLine
    lineInfo={{
      name: "GHO",
      value: $vaultGhoBalance ? formatEther($vaultGhoBalance).toString() : "0",
    }}
  />
  <ManagePositionLine lineInfo={{ name: "ETH", value: "0" }} />
  <ManagePositionLine lineInfo={{ name: "Range (Upper)", value: "1960.33" }} />
  <ManagePositionLine lineInfo={{ name: "Range (Lower)", value: "1749.84" }} />
  <ManagePositionLine lineInfo={{ name: "Yield USDC", value: "0" }} />
  <ManagePositionLine lineInfo={{ name: "Yield ETH", value: "0" }} />
  <ManagePositionLine lineInfo={{ name: "Leverage", value: $leverageValue }} />
  <ManagePositionLine lineInfo={{ name: "Collateral", value: "TBD" }} />
</div>

<style lang="scss">
  title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
  }

  .vertical-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
</style>
