<script lang="ts">
  import { setNGetRenderer, getAnimateFunction, removePreloader } from "@helpers";
  import {
    _canvasElement,
    _canvasProperties,
    _viewport,
    _sceneBackground,
    _isAnimating,
    _rAF,
    _scenes,
    _sceneActive,
  } from "@stores";

  const preloaderElement = <HTMLDivElement>document.getElementById("preloader");
  let unsubscribe = function () {};
  $: currentScene = $_scenes[$_sceneActive];
  $: nextScene = $_scenes[$_sceneActive + 1];

  // create 3d scene renderer
  $: renderer = setNGetRenderer({
    element: $_canvasElement,
    canvasProperties: $_canvasProperties,
    viewport: $_viewport,
  });

  // precompile all scenes for smoothness when scrolling the first time
  $: if (renderer && $_scenes.length > 0) {
    $_scenes.forEach((item) => {
      renderer.compile(item.scene, item.camera);
    });
  }

  // creating the animate function
  $: animate = getAnimateFunction({
    currentScene,
    nextScene,
    renderer,
    sceneBackground: $_sceneBackground,
  });

  //subscribe/resubscribe animate to rAF
  $: if (renderer && ($_isAnimating || !$_isAnimating) && currentScene && nextScene) {
    unsubscribe();
    unsubscribe = _rAF.add(animate);
  }

  // remove preloader
  $: if (renderer && preloaderElement && currentScene && nextScene) {
    removePreloader({ preloaderElement });
  }
</script>

<div>
  <canvas style="left: -{$_canvasProperties.left}px;" bind:this={$_canvasElement} />
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
