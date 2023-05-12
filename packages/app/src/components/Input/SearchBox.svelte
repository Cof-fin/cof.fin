<script lang="ts">
  import { writable } from "svelte/store";
  import { input } from "../../stores";

  function updateStore(event: any) {
    input.set(event.target.value);
  }
</script>

<container>
  <input type="text" placeholder="Search..." bind:value={$input} on:change={updateStore} />
  {$input}
</container>

<style>
  container {
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 0px;
    width: 100%;
  }

  input {
    /* box-sizing: border-box; */
    padding: 1px 8px;
    border: 1px solid #000000;
    border-radius: 2px;
    width: 100px;

    background-color: #ffffff;

    transition: ease-in-out, background-color 0.15s ease-in-out, width 0.15s ease-in-out;
  }

  input:focus {
    width: 100%;
    background-color: #f5f5f5;
  }
</style>
