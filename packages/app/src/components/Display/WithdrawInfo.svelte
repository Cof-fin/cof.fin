<script lang="ts">
  import OptimalRangeLine from "./OptimalRangeLine.svelte";
</script>

<div class="vertical-container">
  You will receive:
  <div class="withdraw-info-line">
    <span>USDC</span>
    <span>1000</span>
  </div>
  <div class="withdraw-info-line">
    <span>ETH</span>
    <span>1000</span>
  </div>
</div>

<style lang="scss">
  .vertical-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 4px;
  }

  .withdraw-info-line {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
</style>
