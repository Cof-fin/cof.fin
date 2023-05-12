<script lang="ts">
  import Button from "../../components/Button/Button.svelte";
  import SignMessageButton from "../../components/Button/SignMessageButton.svelte";
  import SignTypedMessageButton from "../../components/Button/SignTypedMessageButton.svelte";
  import DisplayLine from "../../components/Display/DisplayLine.svelte";
  import VerticalStack from "../../components/Stack/VerticalStack.svelte";
  import { signature, typedSignature } from "../../stores";

  let _signature: string = "";
  let _typedSignature: string = "";

  signature.subscribe((value) => {
    _signature = value;
  });

  typedSignature.subscribe((value) => {
    _typedSignature = value;
  });
</script>

<VerticalStack>
  <Button />
  <SignMessageButton />
  {$signature}
  <SignTypedMessageButton />
  {$typedSignature}
</VerticalStack>

<style>
</style>
