<script lang="ts">
  import ManagePositionLine from "./ManagePositionLine.svelte";
  import OptimalRangeLine from "./OptimalRangeLine.svelte";
</script>

<div class="vertical-container">
  <title>Position Details</title>
  <ManagePositionLine lineInfo={{ name: "GHO", value: "0" }} />
  <ManagePositionLine lineInfo={{ name: "ETH", value: "0" }} />
  <ManagePositionLine lineInfo={{ name: "Range (Upper)", value: "0" }} />
  <ManagePositionLine lineInfo={{ name: "Range (Lower)", value: "0" }} />
  <ManagePositionLine lineInfo={{ name: "Yield USDC", value: "0" }} />
  <ManagePositionLine lineInfo={{ name: "Yield ETH", value: "0" }} />
  <ManagePositionLine lineInfo={{ name: "Leverage", value: "0" }} />
  <ManagePositionLine lineInfo={{ name: "Collateral", value: "0" }} />
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
