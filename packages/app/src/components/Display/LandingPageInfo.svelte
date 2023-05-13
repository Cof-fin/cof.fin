<script lang="ts">
  interface LandingPageInfo {
    src: string;
    title: string;
    description: string;
  }
  export let landingPageInfo: LandingPageInfo;
</script>

<div class="vertical-container">
  <logo-container>
    <img src={landingPageInfo.src} alt={landingPageInfo.src} />
  </logo-container>
  <div class="horizontal-container">
    <title>{landingPageInfo.title}</title>
    <description>{landingPageInfo.description}</description>
  </div>
</div>

<style lang="scss">
  logo-container {
    /* Frame 111 */

    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 10px;

    width: 240px;
    height: 240px;

    background: rgba(196, 78, 197, 0.5);
    border-width: 0px 8px 8px 0px;
    border-style: solid;
    border-color: rgba(63, 15, 63, 0.5);
    border-radius: 16px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #ffffff;
  }

  description {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: flex-start;
    text-align: left;

    color: #ffffff;
  }

  .horizontal-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
  }

  .vertical-container {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 10px;
  }
</style>
