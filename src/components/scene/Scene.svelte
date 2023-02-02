<script lang="ts">
  import { setNGetRenderer, getAnimateFunction, removePreloader } from "@helpers";
  import { _canvasElement, _canvasSettings, _viewport, _rAF, _scenes } from "@stores";
  import type { Scene } from "@classes";

  let unsubscribe = function () {};

  // create 3d scene renderer
  $: renderer = setNGetRenderer({
    element: $_canvasElement,
    canvasSettings: $_canvasSettings,
    viewport: $_viewport,
  });

  // precompile all scenes for smoothness when scrolling the first time
  $: if (renderer && $_scenes.length > 0) {
    $_scenes.forEach((item: Scene) => {
      renderer.compile(item.scene, item.camera);
    });
  }

  // creating the animate function
  $: animate = getAnimateFunction({ scenes: $_scenes, renderer });

  //subscribe/resubscribe animate to rAF
  $: if (renderer && $_scenes.length > 0) {
    unsubscribe();
    unsubscribe = _rAF.add(animate, 16.6);
  }

  // remove preloader
  $: if (renderer && $_scenes.length > 0) {
    removePreloader();
  }
</script>

<div id="scenes">
  <div style="height: {$_viewport.h}px;">
    <div>
      <canvas style="left: {$_canvasSettings.left}px;" bind:this={$_canvasElement} />
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
