<script lang="ts">
  import { scenesSettings } from "@assets";
  import { _contentDOMElement, _viewport, _elementsMeshes } from "@stores";
  import { canvasRender } from "@actions";
</script>

<div id="scenes">
  <div style="height: {$_viewport.h}px;">
    <div>
      {#if Boolean($_elementsMeshes)}
        <canvas
          use:canvasRender={{
            viewport: $_viewport,
            scenesSettings: scenesSettings,
            elementsMeshes: $_elementsMeshes,
            contentDOMElement: $_contentDOMElement,
          }}
        />
      {/if}
    </div>
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
      > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        canvas {
          position: relative;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
        }
      }
    }
  }
</style>
