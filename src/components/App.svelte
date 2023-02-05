<script lang="ts">
  import { removePreloader } from "@helpers";
  import Canvas from "./canvas/Canvas.svelte";
  import Content from "./content/Content.svelte";
  import Credit from "./credit/Credit.svelte";
  import Intro from "./intro/Intro.svelte";
  import "@assets/misc/images/share_img.jpg";
  removePreloader();
</script>

<Intro />
<Canvas />
<Content />
<Credit />
