import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import htmlPlugin from "./vite_config/drn-html-plugin";
import config from "./vite_config/config";

export default defineConfig(({ command, mode }) => {
  return {
    base: config.BASE_URL,
    build: {
      esbuild: ["es2015"],
      outDir: config.VARS.ASSETS_PATH,
      rollupOptions: {
        manualChunks: (moduleName) => {
          if (moduleName.includes("node_modules")) {
            return "vendor";
          }
        },
        output: {
          entryFileNames: `index.js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        },
      },
    },
    define: { DRN_CONFIG: JSON.stringify(config.VARS) },
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins:
      command === "build" && mode === "production"
        ? [
            svelte({
              preprocess: sveltePreprocess(),
            }),
            htmlPlugin(config, false),
          ]
        : [
            svelte({
              preprocess: sveltePreprocess(),
            }),
          ],
    resolve: {
      alias: {
        "@assets": `${__dirname}/src/assets`,
        "@helpers": `${__dirname}/src/utilities/helpers`,
        "@stores": `${__dirname}/src/utilities/stores`,
        "@models": `${__dirname}/src/utilities/models`,
        "@styles": `${__dirname}/src/utilities/styles`,
        "@classes": `${__dirname}/src/utilities/classes`,
        "@classes_abstract": `${__dirname}/src/utilities/classes_abstract`,
        "@actions": `${__dirname}/src/utilities/actions`,
      },
    },
  };
});
