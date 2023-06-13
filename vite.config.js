import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//路径模块
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  // scss全局变量的一个配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
      },
    },
  },
});
