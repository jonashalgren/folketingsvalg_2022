<script lang="ts">
  import { setNGetRenderer, getAnimateFunction, removePreloader } from "@helpers";
  import { _canvasElement, _canvasSettings, _viewport, _rAF, _scenes } from "@stores";
  import type { Scene } from "@classes";

  const preloaderElement = <HTMLDivElement>document.getElementById("preloader");
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
    unsubscribe = _rAF.add(animate, 16);
  }

  // remove preloader
  $: if (renderer && preloaderElement && $_scenes.length > 0) {
    removePreloader({ preloaderElement });
  }
</script>

<div>
  <canvas style="left: {$_canvasSettings.left}px;" bind:this={$_canvasElement} />
</div>

<style lang="scss">
  div {
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
</style>
