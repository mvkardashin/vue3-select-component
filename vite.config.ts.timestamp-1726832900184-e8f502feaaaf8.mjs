// vite.config.ts
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "file:///Users/maximk/projects/vue3-select-component/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/maximk/projects/vue3-select-component/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevtools from "file:///Users/maximk/projects/vue3-select-component/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import dts from "file:///Users/maximk/projects/vue3-select-component/node_modules/vite-plugin-dts/dist/index.mjs";
import cssInject from "file:///Users/maximk/projects/vue3-select-component/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/maximk/projects/vue3-select-component/vite.config.ts";
var resolve = (path) => fileURLToPath(new URL(path, __vite_injected_original_import_meta_url));
var vite_config_default = defineConfig((configEnv) => {
  const config = {
    plugins: [vue()],
    resolve: { alias: { "@": resolve("./src") } }
  };
  if (configEnv.mode === "test") {
    config.test = {
      environment: "happy-dom",
      coverage: {
        provider: "v8",
        include: ["src/**/*.vue", "src/**/*.ts"]
      }
    };
  }
  if (configEnv.mode === "production") {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        cssInject(),
        dts({ tsconfigPath: "tsconfig.build.json", cleanVueFileName: true })
      ],
      build: {
        target: "es2015",
        lib: {
          name: "vue3-select-component",
          entry: resolve("./src/index.ts"),
          formats: ["es", "umd"],
          fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
          external: ["vue"],
          output: { globals: { vue: "Vue" } }
        }
      }
    };
  }
  if (["development", "development:playground"].includes(configEnv.mode)) {
    config.plugins.push(vueDevtools());
  }
  if (configEnv.mode.includes("playground")) {
    config.root = resolve("./playground");
  }
  return config;
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWF4aW1rL3Byb2plY3RzL3Z1ZTMtc2VsZWN0LWNvbXBvbmVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21heGltay9wcm9qZWN0cy92dWUzLXNlbGVjdC1jb21wb25lbnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21heGltay9wcm9qZWN0cy92dWUzLXNlbGVjdC1jb21wb25lbnQvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyBVUkwsIGZpbGVVUkxUb1BhdGggfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuaW1wb3J0IHsgdHlwZSBVc2VyQ29uZmlnLCBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgdnVlRGV2dG9vbHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgY3NzSW5qZWN0IGZyb20gXCJ2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanNcIjtcblxuY29uc3QgcmVzb2x2ZSA9IChwYXRoOiBzdHJpbmcpID0+IGZpbGVVUkxUb1BhdGgobmV3IFVSTChwYXRoLCBpbXBvcnQubWV0YS51cmwpKTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoY29uZmlnRW52KSA9PiB7XG4gIC8vIERlZmF1bHQgY29uZmlnIHNoYXJlZCBjb25maWcgYnkgYWxsIG1vZGVzLlxuICBjb25zdCBjb25maWc6IFVzZXJDb25maWcgPSB7XG4gICAgcGx1Z2luczogW3Z1ZSgpXSxcbiAgICByZXNvbHZlOiB7IGFsaWFzOiB7IFwiQFwiOiByZXNvbHZlKFwiLi9zcmNcIikgfSB9LFxuICB9O1xuXG4gIC8vIFdoZW4gcnVubmluZyB2aXRlc3QsIGFkZCB0aGUgdGVzdCBjb25maWcuXG4gIGlmIChjb25maWdFbnYubW9kZSA9PT0gXCJ0ZXN0XCIpIHtcbiAgICBjb25maWcudGVzdCA9IHtcbiAgICAgIGVudmlyb25tZW50OiBcImhhcHB5LWRvbVwiLFxuICAgICAgY292ZXJhZ2U6IHtcbiAgICAgICAgcHJvdmlkZXI6IFwidjhcIixcbiAgICAgICAgaW5jbHVkZTogW1wic3JjLyoqLyoudnVlXCIsIFwic3JjLyoqLyoudHNcIl0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvLyBCdWlsZCBsaWJyYXJ5IHdoZW4gaW4gcHJvZHVjdGlvbiBtb2RlIChucG0gcnVuIGJ1aWxkKS5cbiAgaWYgKGNvbmZpZ0Vudi5tb2RlID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jb25maWcsXG5cbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgLi4uY29uZmlnLnBsdWdpbnMhLFxuICAgICAgICBjc3NJbmplY3QoKSxcbiAgICAgICAgZHRzKHsgdHNjb25maWdQYXRoOiBcInRzY29uZmlnLmJ1aWxkLmpzb25cIiwgY2xlYW5WdWVGaWxlTmFtZTogdHJ1ZSB9KSxcbiAgICAgIF0sXG5cbiAgICAgIGJ1aWxkOiB7XG4gICAgICAgIHRhcmdldDogXCJlczIwMTVcIixcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgbmFtZTogXCJ2dWUzLXNlbGVjdC1jb21wb25lbnRcIixcbiAgICAgICAgICBlbnRyeTogcmVzb2x2ZShcIi4vc3JjL2luZGV4LnRzXCIpLFxuICAgICAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwidW1kXCJdLFxuICAgICAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXR9LmpzYCxcbiAgICAgICAgfSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgIGV4dGVybmFsOiBbXCJ2dWVcIl0sXG4gICAgICAgICAgb3V0cHV0OiB7IGdsb2JhbHM6IHsgdnVlOiBcIlZ1ZVwiIH0gfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGlmIChbXCJkZXZlbG9wbWVudFwiLCBcImRldmVsb3BtZW50OnBsYXlncm91bmRcIl0uaW5jbHVkZXMoY29uZmlnRW52Lm1vZGUpKSB7XG4gICAgY29uZmlnLnBsdWdpbnMhLnB1c2godnVlRGV2dG9vbHMoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnRW52Lm1vZGUuaW5jbHVkZXMoXCJwbGF5Z3JvdW5kXCIpKSB7XG4gICAgY29uZmlnLnJvb3QgPSByZXNvbHZlKFwiLi9wbGF5Z3JvdW5kXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsS0FBSyxxQkFBcUI7QUFFbkMsU0FBMEIsb0JBQW9CO0FBQzlDLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxlQUFlO0FBUDBLLElBQU0sMkNBQTJDO0FBU2pQLElBQU0sVUFBVSxDQUFDLFNBQWlCLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUc5RSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxjQUFjO0FBRXpDLFFBQU0sU0FBcUI7QUFBQSxJQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsSUFDZixTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssUUFBUSxPQUFPLEVBQUUsRUFBRTtBQUFBLEVBQzlDO0FBR0EsTUFBSSxVQUFVLFNBQVMsUUFBUTtBQUM3QixXQUFPLE9BQU87QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLFNBQVMsQ0FBQyxnQkFBZ0IsYUFBYTtBQUFBLE1BQ3pDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFHQSxNQUFJLFVBQVUsU0FBUyxjQUFjO0FBQ25DLFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUVILFNBQVM7QUFBQSxRQUNQLEdBQUcsT0FBTztBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsSUFBSSxFQUFFLGNBQWMsdUJBQXVCLGtCQUFrQixLQUFLLENBQUM7QUFBQSxNQUNyRTtBQUFBLE1BRUEsT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsS0FBSztBQUFBLFVBQ0gsTUFBTTtBQUFBLFVBQ04sT0FBTyxRQUFRLGdCQUFnQjtBQUFBLFVBQy9CLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxVQUNyQixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxRQUN2QztBQUFBLFFBQ0EsZUFBZTtBQUFBLFVBQ2IsVUFBVSxDQUFDLEtBQUs7QUFBQSxVQUNoQixRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssTUFBTSxFQUFFO0FBQUEsUUFDcEM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLENBQUMsZUFBZSx3QkFBd0IsRUFBRSxTQUFTLFVBQVUsSUFBSSxHQUFHO0FBQ3RFLFdBQU8sUUFBUyxLQUFLLFlBQVksQ0FBQztBQUFBLEVBQ3BDO0FBRUEsTUFBSSxVQUFVLEtBQUssU0FBUyxZQUFZLEdBQUc7QUFDekMsV0FBTyxPQUFPLFFBQVEsY0FBYztBQUFBLEVBQ3RDO0FBRUEsU0FBTztBQUNULENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
