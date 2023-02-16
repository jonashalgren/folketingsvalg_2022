<script lang="ts">
  import { _contentDOMElement, _contentSectionsTexts, _canvasScenesSettings } from "@stores";
  import ContentSection from "./ContentSection.svelte";
</script>

{#if $_canvasScenesSettings}
  <div bind:this={$_contentDOMElement}>
    {#each $_contentSectionsTexts as sectionTexts, sectionIndex}
      <ContentSection
        {sectionTexts}
        isFirstSection={sectionIndex === 0}
        isLastSection={sectionIndex === $_contentSectionsTexts.length - 1}
        matchedSceneSettings={$_canvasScenesSettings[sectionIndex]}
        nextMatchedSceneSettings={$_canvasScenesSettings[sectionIndex + 1] ?? $_canvasScenesSettings[sectionIndex]}
      />
    {/each}
  </div>
{/if}

<style lang="scss">
  div {
    position: relative;
    width: 100%;
    z-index: 20;
    pointer-events: none;
  }
</style>
