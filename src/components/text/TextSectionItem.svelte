<script lang="ts">
  import { _viewport } from "@stores";
  import type { S_S_ExtraTextMargin } from "@models";
  export let textSectionItem: string;
  export let isFirst: boolean;
  export let isFirstItem: boolean;
  export let isLastItem: boolean;
  export let extraTextMargin: S_S_ExtraTextMargin | undefined = { index: 0, top: 0, bottom: 0 };
</script>

{#if textSectionItem.length > 0}
  <div
    class="s-p1 text-item"
    style="margin-top: {(isFirstItem ? $_viewport.h * (isFirst ? 0.5 : 0.8) : $_viewport.h * 0.2) +
      extraTextMargin.top * $_viewport.h}px; margin-bottom: {(isLastItem ? $_viewport.h * 0.75 : $_viewport.h / 2) +
      extraTextMargin.bottom * $_viewport.h * 2}px;"
  >
    {@html textSectionItem}
  </div>
{:else}
  <div
    style="margin-top: {(isFirstItem ? $_viewport.h * (isFirst ? 0.5 : 0.8) : $_viewport.h * 0.2) +
      extraTextMargin.top * $_viewport.h}px; margin-bottom: {(isLastItem ? $_viewport.h * 0.75 : $_viewport.h / 2) +
      extraTextMargin.bottom * $_viewport.h * 2}px;"
  />
{/if}

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
