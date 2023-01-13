<script lang="ts">
  import { _viewport, _canvasIntroOpacity } from "@stores";
  import logo from "@assets/misc/images/valg_logo.png";
  import pil from "@assets/misc/images/pil.svg";
</script>

<div style="height: {$_viewport.h * 1.2}px; opacity: {$_canvasIntroOpacity};" class="intro-wrapper">
  <div style="height: {$_viewport.h}px;" class="intro-container">
    <div class="intro-slot">
      <img src={logo} alt="logo" />
      <h1 class="s-h2">Stemmerne er talt op</h1>
      <h6 class="s-p1">Se valgets mest markante og dramatiske resultater.</h6>
    </div>
    <div class="arrow-wrapper">
      <img src={pil} alt="pil" />
    </div>
  </div>
</div>

<style lang="scss">
  .intro-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
  }

  .intro-wrapper .intro-container {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .intro-wrapper .intro-container .intro-slot {
    position: relative;
    width: 100%;
    max-width: 640px;
    padding: var(--spacing-xxSmall);
    text-align: center;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 700px) {
      max-width: 560px;
    }
    @media screen and (max-width: 500px) {
      max-width: 400px;
    }
  }

  .intro-wrapper .intro-container .intro-slot h1 {
    position: relative;
    font-family: Ane_Hand;
    text-align: center;
    line-height: 1.2;
    margin: 0px;
    @media screen and (max-width: 700px) {
      margin: 0px 0px 0px 0px;
    }
  }

  .intro-wrapper .intro-container .intro-slot h6 {
    position: relative;
    margin: 0px;
    max-width: 320px;
    line-height: 1.4;
    top: -10px;
    @media screen and (max-width: 700px) {
      max-width: 300px;
      top: -5px;
    }
  }
  .intro-wrapper .intro-container .intro-slot img {
    position: relative;
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
    @media screen and (max-width: 630px) {
      width: 70px;
      height: 70px;
    }
  }

  .intro-wrapper .intro-container .arrow-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 900px) {
      bottom: 20px;
    }
  }

  .intro-wrapper .intro-container .arrow-wrapper img {
    position: relative;
    width: 80px;
    height: auto;
    animation-name: bounce;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    @keyframes bounce {
      0% {
        transform: translateY(15px);
      }
      50% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(15px);
      }
    }
    @media screen and (max-width: 450px) {
      width: 60px;
    }
  }
</style>
