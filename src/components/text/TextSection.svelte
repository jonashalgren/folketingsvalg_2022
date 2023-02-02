<script lang="ts">
  import TextSectionItem from "./TextSectionItem.svelte";
  import { _viewport, _scenes } from "@stores";
  import { getAdditionalScroll } from "@helpers";
  import { scenesSettings } from "@assets";
  export let textSection: string[];
  export let isLast: boolean;
  export let isFirst: boolean;
  export let index: number;
  $: nextSceneSettings = scenesSettings[index + 1] ?? scenesSettings[index];
</script>

<div style="margin-bottom: {isLast ? 0 : nextSceneSettings.hasLogoIntro ? $_viewport.h * 0.5 : $_viewport.h * 0.1}px;">
  {#each textSection as textSectionItem, i}
    <TextSectionItem
      {textSectionItem}
      {isFirst}
      isFirstItem={i === 0}
      isLastItem={i === textSection.length - 1}
      additionalScroll={getAdditionalScroll({
        sceneSettings: scenesSettings[index],
        index: i,
      })}
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
