<script lang="ts">
  import SceneCanvas from "./SceneCanvas.svelte";
  import { _viewport } from "@stores";
</script>

<div id="scenes">
  <div style="height: {$_viewport.h}px;">
    <SceneCanvas />
  </div>
</div>

<style lang="scss">
  #scenes {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    > div {
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
</style>
