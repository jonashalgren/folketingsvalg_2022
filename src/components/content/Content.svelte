<script lang="ts">
  import { _contentDOMElement, _contentSectionsTexts } from "@stores";
  import { canvasScenesSettings } from "@assets";
  import ContentSection from "./ContentSection.svelte";
</script>

<div bind:this={$_contentDOMElement}>
  {#each $_contentSectionsTexts as sectionTexts, sectionIndex}
    <ContentSection
      {sectionTexts}
      isFirstSection={sectionIndex === 0}
      isLastSection={sectionIndex === $_contentSectionsTexts.length - 1}
      matchedSceneSettings={canvasScenesSettings[sectionIndex]}
      nextMatchedSceneSettings={canvasScenesSettings[sectionIndex + 1] ?? canvasScenesSettings[sectionIndex]}
    />
  {/each}
</div>

<style lang="scss">
  div {
    position: relative;
    width: 100%;
    z-index: 20;
    pointer-events: none;
  }
</style>
