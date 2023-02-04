<script lang="ts">
  import { scenesToCanvas } from "@helpers";
  import { _canvasDOMElement, _canvasSettings, _viewport, _scenes } from "@stores";
</script>

<div id="scenes">
  <div style="height: {$_viewport.h}px;">
    <div>
      <canvas
        bind:this={$_canvasDOMElement}
        use:scenesToCanvas={{ viewport: $_viewport, scenes: $_scenes, canvasSettings: $_canvasSettings }}
        style="left: {$_canvasSettings.left}px;"
      />
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
