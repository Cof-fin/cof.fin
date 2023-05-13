<script lang="ts">
  export let value: number = 1;
  export let min: number = 1;
  export let max: number = 1.8;
  export let step: number = 0.1;
</script>

<container>
  <div class="input-header">
    <slider-title>Leverage</slider-title>
    <slider-leverage-amount>{value}x</slider-leverage-amount>
  </div>
  <input type="range" bind:value {min} {max} {step} />
</container>

<style lang="scss">
  @import "../../styles/colours.scss";
  container {
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px;
    gap: 16px;
    width: 100%;
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    background-color: white;
    border-radius: 8px;
    /* margin: 10px 0; */
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: $secondary_1;
    border-radius: 50%;
    /* border: none; */
    /* margin-top: -8px; */
  }

  .input-header {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }
</style>
