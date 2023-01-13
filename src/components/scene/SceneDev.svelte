<script lang="ts">
  import { _scrollY, _sceneActive, _sceneProgress } from "@stores";
</script>

{#if $_sceneActive !== undefined && $_sceneProgress.length > 0}
  <div id="dev">
    <div>currentIndex: {$_sceneActive}</div>
    <div>MainProgress: {$_sceneProgress[$_sceneActive].main($_scrollY)}</div>
    <div>EntryProgress: {$_sceneProgress[$_sceneActive].entry($_scrollY)}</div>
    <div>ExitProgress: {$_sceneProgress[$_sceneActive].exit($_scrollY)}</div>
    <div>PixelRatio: {window.devicePixelRatio}</div>
  </div>
{/if}

<style lang="scss">
  #dev {
    position: fixed;
    top: 0;
    left: 0;
    width: 120px;
    height: auto;
    padding: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    z-index: 9999;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.3);
    white-space: nowrap;
    div: {
      width: 100%;
      overflow: hidden;
      font-size: 11px;
      white-space: nowrap;
    }
  }
</style>
