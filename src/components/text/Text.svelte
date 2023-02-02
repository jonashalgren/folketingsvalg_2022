<script lang="ts">
  import { _textElement, _textData, _viewport } from "@stores";
  import TextSection from "./TextSection.svelte";
  import { scenesSettings } from "@assets";
</script>

<div bind:this={$_textElement}>
  {#each $_textData as textSection, sceneIndex}
    <TextSection
      {textSection}
      isFirst={sceneIndex === 0}
      isLast={sceneIndex === $_textData.length - 1}
      sceneSettings={scenesSettings[sceneIndex]}
      nextSceneSettings={scenesSettings[sceneIndex + 1] ?? scenesSettings[sceneIndex]}
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
