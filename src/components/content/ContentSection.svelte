<script lang="ts">
  import ContentSectionText from "./ContentSectionText.svelte";
  import { _viewport } from "@stores";
  import { type C_Scene_Settings, C_S_Element_Type } from "@models";

  export let sectionTexts: string[];
  export let isLastSection: boolean;
  export let isFirstSection: boolean;
  export let matchedSceneSettings: C_Scene_Settings;
  export let nextMatchedSceneSettings: C_Scene_Settings;
  $: marginBottom = isLastSection
    ? 0
    : nextMatchedSceneSettings.elements.find((item) => item.type === C_S_Element_Type.TRANSITION)
    ? $_viewport.h * 0.5
    : $_viewport.h * 0.1;
</script>

<div style="margin-bottom: {marginBottom}px;">
  {#each sectionTexts as text, textIndex}
    <ContentSectionText
      {text}
      {isFirstSection}
      isFirstText={textIndex === 0}
      isLastText={textIndex === sectionTexts.length - 1}
      extraMargin={matchedSceneSettings.extraTextMargin?.find((item) => item.index === textIndex)}
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
