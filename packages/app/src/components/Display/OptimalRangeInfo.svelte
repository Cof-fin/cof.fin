<script lang="ts">
  import { bbhl, bbhu, bbll, bblu } from "../../stores";
  import OptimalRangeLine from "./OptimalRangeLine.svelte";
</script>

<div class="vertical-container">
  <OptimalRangeLine lineInfo={{ name: "Long Time Frame BB (7 Days) Upper Bound", value: $bbhu }} />
  <OptimalRangeLine lineInfo={{ name: "Long Time Frame BB (7 Days) Lower Bound", value: $bbhl }} />
  <OptimalRangeLine lineInfo={{ name: "Short Time Frame BB (3 Days) Upper Bound", value: $bblu }} />
  <OptimalRangeLine lineInfo={{ name: "Short Time Frame BB (3 Days) Lower Bound", value: $bbll }} />
</div>

<style lang="scss">
  .vertical-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
</style>
