import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        // content of manifest
        name: "todo-list",
        short_name: "todo",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        description: "A todo list App",
        icons: [
          {
            src: "assets/icons/apple-icon-180.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
      },
      workbox: {},
    }),
  ],

  //样式表插件
  css: {
    postcss: {
      plugins: [autoprefixer, postcssNesting],
    },
  },
});
