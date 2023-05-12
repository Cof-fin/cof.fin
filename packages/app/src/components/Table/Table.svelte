<script lang="ts">
  // Create a Table component
  export let data = [
    { name: "Thundercore (Testnet)", faucet: "https://faucet-testnet.thundercore.com/" },
    { name: "Gnosis (Testnet)", faucet: "https://gnosisfaucet.com/" },
    { name: "Mantle (Testnet)", faucet: "https://faucet.testnet.mantle.xyz/" },
    { name: "Mumbai (Testnet)", faucet: "https://mumbaifaucet.com/" },
    { name: "Sepolia (Testnet)", faucet: "https://sepoliafaucet.com/" },
  ];
  export let header = Object.keys(data[0]); // Defaults to keys of the 0th element
</script>

<container>
  <table>
    <thead>
      <tr>
        {#each header as key}
          <th>{key}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          <td>{row.name}</td>
          <td><a href={row.faucet}>{row.faucet}</a></td>
        </tr>
      {/each}
    </tbody>
  </table>
</container>

<style lang="scss">
  table {
    border: 1px solid black;
    width: 100%;
  }
  td {
    border: 1px solid black;
  }
</style>
