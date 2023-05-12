<script lang="ts">
</script>

<container>
  <slot />
</container>

<style>
  container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin: 1rem;

    gap: 1rem;
    word-break: break-all;
  }
</style>
