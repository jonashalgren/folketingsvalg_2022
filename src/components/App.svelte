<script lang="ts">
  import Canvas from "./canvas/Canvas.svelte";
  import Content from "./content/Content.svelte";
  import Credit from "./credit/Credit.svelte";
  import Intro from "./intro/Intro.svelte";
  import { _contentIsRendered } from "@stores";
  import "@assets/misc/images/share_img.jpg";
</script>

{#if $_contentIsRendered}
  <Intro />
  <Canvas />
{/if}

<Content />

{#if $_contentIsRendered}
  <Credit />
{/if}
