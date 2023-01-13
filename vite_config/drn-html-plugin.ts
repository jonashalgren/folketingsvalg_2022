// TODO: Set meta-tags, title and so forth
export default function htmlPlugin(config, embed) {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace(
        /<!--#DRN-HTML-HEAD-SOCIAL-->/,
        `
          <title>${config.VARS.SOCIAL.title}</title>
          <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
          <meta name="apple-itunes-app" content="app-id=398346158">
          <meta name="copyright" content="© DR">
          <meta name="description" content="${config.VARS.SOCIAL.description}">
          <meta name="keywords"
              content="dr1, dr2, dr3, drk, ultra, ramasjang, drtv, tv, p1, p2, p3, p4, p5, p6, p7, p8, podcast, nyheder">
          <meta name="subject" content="tv, live, radio, dr, on-demand">
          <meta name="publisher" content="DR, DR Byen, Emil Holms Kanal 20, DK-0999 København C, tlf.: +45 35 20 30 40">
          <meta name="section" content="Webfeature">
          <meta name="urn" content="urn:dr:webfeature:${config.VARS.SOCIAL.urn}">
          <meta property="og:type" content="website">
          <meta property="og:title" content="${config.VARS.SOCIAL.title}">
          <meta property="og:site_name" content="DR">
          <meta property="og:description" content="${config.VARS.SOCIAL.description}">
          <meta property="og:url" content="${config.VARS.SOCIAL.url}">
          <meta property="og:image_secure_url"
              content="${config.VARS.SOCIAL.image}">
          <meta property="og:image" content="${config.VARS.SOCIAL.image}">
          <meta property="og:image:type" content="jpg">
          <meta property="og:locale" content="da_DK">
          <meta name="twitter:card" content="summary">
          <meta name="twitter:site" content="@drnyheder">
          <meta name="twitter:creator" content="@drnyheder">
          <meta name="twitter:title" content="${config.VARS.SOCIAL.title}">
          <meta name="twitter:description" content="${config.VARS.SOCIAL.description}">
          <meta name="twitter:image" content="${config.VARS.SOCIAL.image}">
          <meta property="fb:app_id" content="334841956565056">
          <script src="https://www.dr.dk/global-navigation/topbarbundle-nonsticky.js"></script>
          <script id="ensighten-script" src="https://www.dr.dk/drdk-ensighten/Bootstrap.js"></script>
          <script src="https://www.dr.dk/drWebStat/drWebStat.js"></script>
          `
      );
    },
  };
}
