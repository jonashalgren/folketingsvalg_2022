<script lang="ts">
  import { _contentDOMElement, _viewport, _canvasContentElementsDetails } from "@stores";
  import { canvasAnimate } from "@actions";
</script>

<div id="scenes">
  <div style="height: {$_viewport.h}px;">
    <div>
      {#if Boolean($_canvasContentElementsDetails)}
        <canvas
          use:canvasAnimate={{
            viewport: $_viewport,
            canvasContentElementsDetails: $_canvasContentElementsDetails,
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
