<script lang="ts">
  import { _viewport } from "@stores";
  import type { S_S_ExtraTextMargin } from "@models";
  export let text: string;
  export let isFirstSection: boolean;
  export let isFirstText: boolean;
  export let isLastText: boolean;
  export let extraMargin: S_S_ExtraTextMargin | undefined = { index: 0, top: 0, bottom: 0 };

  $: marginTop =
    (isFirstText ? $_viewport.h * (isFirstSection ? 0.5 : 0.8) : $_viewport.h * 0.2) + extraMargin.top * $_viewport.h;

  $: marginBottom = (isLastText ? $_viewport.h * 0.75 : $_viewport.h / 2) + extraMargin.bottom * $_viewport.h * 2;
</script>

<div
  class={text.length > 0 ? "s-p1 text-item" : ""}
  style="margin-top: {marginTop}px; margin-bottom: {marginBottom}px;"
>
  {@html text}
</div>

<style lang="scss">
  .text-item {
    max-width: 480px;
    font-weight: 400;
    margin: 0;
    line-height: 1.32;
    margin: var(--spacing-xSmall);
    background: rgba(255, 255, 255, 1);
    padding: var(--spacing-xSmall);
  }
</style>
