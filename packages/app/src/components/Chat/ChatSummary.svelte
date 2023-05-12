<script lang="ts">
  import Blockie from "../Blockie/Blockie.svelte";
  import HorizontalStack from "../Stack/HorizontalStack.svelte";
  import VerticalStack from "../Stack/VerticalStack.svelte";

  export let chatId: string = "test";
  export let chatName: string;
  export let summaryText: string;
</script>

<chat-container>
  <Blockie id={chatId} />
  <chat-text-container>
    <title>{chatName}</title>
    <description>{summaryText}</description>
  </chat-text-container>
</chat-container>

<style lang="scss">
  @import "../../styles/colours";

  chat-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 0.5rem;
    gap: 0.25rem;

    word-break: break-all;
  }

  chat-container:hover {
    background-color: #000000;
  }

  chat-text-container {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    width: 100%;
    gap: 0.25rem;

    word-break: break-all;
  }

  title {
    width: auto;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;

    display: flex;
    align-items: center;

    color: #000000;
  }

  description {
    width: auto;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
</style>
