<script lang="ts">
  export let name: string;
  export let active: boolean;
  export let onClick: (name: string) => void;
</script>

<container class={active ? "active" : "inactive"} on:click={onClick(name)}>
  {name}
</container>

<style lang="scss">
  @import "../../styles/colours.scss";
  .active {
    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 200px;
    height: 40px;

    /* Secondary 1 */

    background: $secondary_1;
    border-radius: 8px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* Accent 1 */

    color: $accent_1;

    cursor: pointer;
  }

  .inactive {
    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 200px;
    height: 40px;

    background: $accent_1;
    border-radius: 8px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* Secondary 1 */

    color: $secondary_1;
    cursor: pointer;
  }
</style>
