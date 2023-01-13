<script lang="ts">
  import { _textElement, _textData, _viewport } from "@stores";
  import TextSection from "./TextSection.svelte";
</script>

<div bind:this={$_textElement}>
  {#each $_textData as textSection, index}
    <TextSection {textSection} {index} isFirst={index === 0} isLast={index === $_textData.length - 1} />
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
