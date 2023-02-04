<script lang="ts">
  import { _viewport, _creditsOpacity } from "@stores";
  import logo from "@assets/images/valg_logo.png";
</script>

<div
  style=" height: {$_viewport.h * 1.5}px; opacity: {$_creditsOpacity}; pointer-events: {$_creditsOpacity > 0
    ? 'auto'
    : 'none'}"
  class="credit-wrapper"
>
  <div class="credit-container" style="height: {$_viewport.h}px;">
    <div class="credit-slot">
      <div class="credit-item">
        <p class="s-p2">Kode og ide</p>
        <a class="s-p2" href="mailTo:halg@dr.dk">Jonas Halgren Nielsen</a>
      </div>
      <div class="credit-item">
        <p class="s-p2">Tekst og data</p>
        <a class="s-p2" href="mailTo:jnho@dr.dk">Jens Holm</a>
      </div>
      <div class="credit-item">
        <p class="s-p2">Grafik</p>
        <a class="s-p2" href="mailTo:ethe@dr.dk">Emil Thorbjörnsson</a>
      </div>
      <div class="credit-item">
        <p class="s-p2">Visuel Redaktør</p>
        <a class="s-p2" href="mailTo:fsto@dr.dk">Frederik Storm</a>
      </div>
      <div class="credit-item">
        <p class="s-p2">Tak til</p>
        <a class="s-p2" href="mailTo:JOHW@dr.dk">Johannes Wehner</a><br />
        <a class="s-p2" href="mailTo:niki@dr.dk">Nis Kielgast</a><br />
        <a class="s-p2" href="mailTo:RMRI@dr.dk">Rikke Gjøl Mansø</a>
      </div>
      <div class="release">
        <p class="s-p2">
          <span>Data hentet fra </span><a target="__blank" href="https://www.kmd.dk/">KMD</a> d. 2. november 2022 kl. 01:04.
        </p>
        <p class="s-p2">udgivet d. 2. november 2022 kl. 05:43.</p>
      </div>
      <img src={logo} alt="logo" />
    </div>
  </div>
</div>

<style lang="scss">
  .credit-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 20;
  }

  .credit-wrapper .credit-container {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
  }

  .credit-wrapper .credit-container .credit-slot {
    position: relative;
    width: 100%;
    max-width: 640px;
    padding: var(--spacing-xxSmall);
    text-align: center;
    padding-top: 60px;
    @media screen and (max-width: 480px) {
      padding-top: 50px;
    }
    @media screen and (max-width: 400px) {
      padding-top: 30px;
    }
  }
  .credit-wrapper .credit-container .credit-slot img {
    position: relative;
    width: 60px;
    height: 60px;
    @media screen and (max-width: 630px) {
      width: 50px;
      height: 50px;
    }
  }

  .credit-wrapper .credit-container .credit-slot .credit-item p {
    position: relative;
    margin: 15px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;
  }

  .credit-wrapper .credit-container .credit-slot .credit-item {
    position: relative;
    margin-bottom: 22px;
    @media screen and (max-width: 630px) {
      margin-bottom: 15px;
    }
  }

  .credit-wrapper .credit-container .credit-slot .credit-item p {
    font-family: Ane_Hand !important;
    margin: 0px 0px 1px 0px;
    line-height: 1;
    font-size: 19px;
    color: black;
  }

  .credit-wrapper .credit-container .credit-slot .credit-item a {
    position: relative;
    cursor: pointer;
    text-decoration: none;
    margin: 0px 0px;
    line-height: 1.3;
    font-weight: 600;
    font-size: 17px;
    color: black;
  }

  .credit-wrapper .credit-container .credit-slot .release {
    margin-bottom: 15px;
  }

  .credit-wrapper .credit-container .credit-slot .release p {
    position: relative;
    font-size: 13px;
    font-weight: 400;
    margin: 0px 0px;
    line-height: 1.5;
  }

  .credit-wrapper .credit-container .credit-slot .release p a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
</style>
