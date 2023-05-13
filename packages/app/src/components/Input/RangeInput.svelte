<script lang="ts">
  let min: number = 0;
  let max: number = 100;
</script>

<container>
  <range-input-header>Range</range-input-header>
  <div class="range-input-container">
    <div class="range-input-min">
      Range Min
      <input type="number" bind:value={min} />
    </div>
    <div class="range-input-max">
      Range Max
      <input type="number" bind:value={max} />
    </div>
  </div>
</container>

<style>
  input[type="number"] {
    /* box-sizing: border-box; */
    width: 100%;
  }

  .range-input-min {
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    width: 100%;
    padding: 0px 10px;
    padding-left: 0px;
  }

  .range-input-max {
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    width: 100%;
    padding: 0px 10px;
  }

  .range-input-container {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    justify-content: space-between;
    padding: 0px;
    gap: 4px;
    width: 100%;
  }

  range-input-header {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    display: flex;
    align-items: center;
  }

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
