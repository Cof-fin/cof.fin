<script lang="ts">
  import TabItem from "./TabItem.svelte";

  export let tabs = ["Deposit", "Withdraw", "Manage"];
  $: activeTab = "Deposit";

  const handleOnClick = (tab: string) => {
    activeTab = tab;
  };
</script>

<container>
  {#each tabs as tab}
    <TabItem name={tab} active={activeTab === tab} onClick={handleOnClick} />
  {/each}
</container>

<style lang="scss">
  @import "../../styles/colours.scss";
  container {
    /* Frame 77 */

    /* Auto layout */
    background: $accent_1;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    border-radius: 8px;

    width: 600px;
    height: 40px;
  }
</style>
