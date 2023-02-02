<script lang="ts">
  import TextSectionItem from "./TextSectionItem.svelte";
  import { _viewport, _scenes } from "@stores";
  import type { S_Settings } from "@models";
  export let textSection: string[];
  export let isLast: boolean;
  export let isFirst: boolean;
  export let sceneSettings: S_Settings;
  export let nextSceneSettings: S_Settings;
</script>

<div style="margin-bottom: {isLast ? 0 : nextSceneSettings.hasLogoIntro ? $_viewport.h * 0.5 : $_viewport.h * 0.1}px;">
  {#each textSection as textSectionItem, textSectionIndex}
    <TextSectionItem
      {textSectionItem}
      {isFirst}
      isFirstItem={textSectionIndex === 0}
      isLastItem={textSectionIndex === textSection.length - 1}
      extraTextMargin={sceneSettings.extraTextMargin?.find((item) => item.index === textSectionIndex)}
    />
  {/each}
</div>

<style lang="scss">
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    max-width: 1150px;
    margin: auto;
    z-index: 10;
    @media screen and (max-width: 1000px) {
      max-width: 800px;
    }
  }
</style>
