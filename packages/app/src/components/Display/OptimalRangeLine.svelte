<script lang="ts">
  interface LineInfo {
    name: string;
    value: number;
  }
  export let lineInfo: LineInfo;
</script>

<container>
  <info-name>{lineInfo.name}</info-name>
  <info-value>{lineInfo.value?.toFixed(2)}</info-value>
</container>

<style lang="scss">
  @import "../../styles/colours.scss";
  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  info-name {
    width: auto;
    height: 21px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    display: flex;
    align-items: center;

    color: $accent_1;

    flex: none;
    order: 0;
    flex-grow: 1;
  }

  info-value {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    text-align: right;

    color: #ffffff;
    animation: fadeInAnimation 0.5s ease-in-out;
  }
</style>
