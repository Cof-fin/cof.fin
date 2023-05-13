<script lang="ts">
  import "@fontsource/poppins/700.css"; // Defaults to weight 400.
  import "@fontsource/poppins/400.css"; // Defaults to weight 400.
  import "@fontsource/courier-prime/400.css"; // Defaults to weight 400.
  import "@fontsource/courier-prime/700.css"; // Defaults to weight 400.
  import WalletConnect from "../components/Web3/WalletConnect.svelte";

  import TopNavBar from "../components/TopNavBar/TopNavBar.svelte";
  import { onMount } from "svelte";
  import BottomNav from "../components/BottomNav/BottomNav.svelte";
  import MaxWidthContainer from "../components/Container/MaxWidthContainer.svelte";

  onMount(async () => {});
</script>

<!-- Comment to Disable WEB3 (Requires VITE_WEB3MODAL_PROJECT_ID to work) -->
<WalletConnect />

<header>
  <TopNavBar />
</header>

<!-- Header -->

<main>
  <MaxWidthContainer>
    <slot />
  </MaxWidthContainer>
</main>

<!-- <footer />

<BottomNav /> -->

<style lang="scss">
  @import "../styles/colours";
  @font-face {
    font-family: "Figtree";
    src: url("../public/fonts/Figtree/Figtree-VariableFont_wght.ttf");
  }

  header {
    background: $primary;
    font-family: "Figtree";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: $secondary_1;
  }

  main {
    font-family: "Figtree";
    background: $primary;
    color: $accent_1;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-all;
    padding-top: 40px;
  }

  footer {
    height: 100px;
  }
</style>
