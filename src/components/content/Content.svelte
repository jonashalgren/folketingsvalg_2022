<script lang="ts">
  import { _contentDOMElement, _contentSectionsTexts } from "@stores";
  import ContentSection from "./ContentSection.svelte";
  import { contentSettingsList } from "@assets";
</script>

<div bind:this={$_contentDOMElement}>
  {#each $_contentSectionsTexts as sectionTexts, sectionIndex}
    <ContentSection
      {sectionTexts}
      isFirstSection={sectionIndex === 0}
      isLastSection={sectionIndex === $_contentSectionsTexts.length - 1}
      matchedContentSettings={contentSettingsList[sectionIndex]}
      nextMatchedContentSettings={contentSettingsList[sectionIndex + 1] ?? contentSettingsList[sectionIndex]}
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
