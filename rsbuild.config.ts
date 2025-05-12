import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";


export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: "./index.html",
  },
  output: {
    assetPrefix: "/",
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
        changeOrigin: true,
        ws: true,
      },
    },
  },
  dev: {
    assetPrefix: "/",
    writeToDisk: true,
  },
});