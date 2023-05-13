<script lang="ts">
  import type { Web3Modal } from "@web3modal/html";

  // variables
  import Logo from "../../public/images/Logo.png";
  import { web3Modal } from "../../stores";
  import { breakpoints } from "../../styles/breakpoints";

  let screenSize: number;
  let modalOpen = false;
  let _web3Modal: Web3Modal;

  function toggleModal() {
    modalOpen = !modalOpen;
    console.log(modalOpen);
  }

  web3Modal.subscribe((value) => {
    _web3Modal = value;
  });
</script>

<svelte:window bind:innerWidth={screenSize} />

<header-wrapper>
  {#if screenSize < breakpoints.large}
    <header-logo>
      <img src={Logo} alt="logo" width="100px" height="100px" />
    </header-logo>
  {/if}
  {#if screenSize >= breakpoints.large}
    <header-logo>
      <img src={Logo} alt="logo" width="100px" height="100px" />
      <header-icon>COF.FIN</header-icon>
    </header-logo>
    <header-tabs>
      <header-item>
        <a href="/">Home</a>
      </header-item>
      <header-item>
        <a href="/demo">Demo</a>
      </header-item>
    </header-tabs>
    {#if _web3Modal}
      <w3m-wrapper>
        <w3m-network-switch style="" />
        <w3m-core-button balance="hide" icon="hide" />
      </w3m-wrapper>
    {/if}
  {/if}
</header-wrapper>

<style lang="scss">
  @import "../../styles/breakpoints";
  header-logo {
    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    gap: auto;
    padding-left: 80px;
    padding-right: 80px;
    height: 140px;

    @media screen and (max-width: $large) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 0px;
      padding-right: 0px;
      height: 100px;
    }
  }
  header-icon {
    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: auto;
    height: 100px;

    /* Inside auto layout */

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 36px;
  }

  header-tabs {
    /* Frame 2 */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 56px;

    width: auto;
    height: 36px;

    /* Inside auto layout */

    color: #000000;
    font-family: "Poppins";
    font-size: 1.5rem;
    font-weight: 400;
  }

  a {
    color: #6f6f6f;
    text-decoration: none;
  }

  a:active {
    color: black;
    background-color: transparent;
    text-decoration: underline;
  }

  w3m-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
</style>
