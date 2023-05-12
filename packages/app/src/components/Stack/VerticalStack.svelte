<script lang="ts">
</script>

<container>
  <slot />
</container>

<style>
  container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    gap: 1rem;
    margin: 1rem;

    word-break: break-all;
  }
</style>
