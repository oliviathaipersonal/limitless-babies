import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // Externals: Capacitor plugins are only resolvable at runtime when the
  // app is running inside the iOS native shell. During web builds, the
  // package is intentionally NOT in node_modules. Marking it external
  // tells Rollup "don't try to bundle this — it'll be present at runtime
  // when needed." On web, the dynamic import() throws and our try/catch
  // gracefully falls back to Web Speech API.
  build: {
    rollupOptions: {
      external: ["@capacitor-community/text-to-speech"]
    }
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "Limitless Babies",
        short_name: "Limitless",
        description: "Early learning for babies — reading, math, and knowledge",
        theme_color: "#E8192C",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            handler: "CacheFirst",
            options: { cacheName: "google-fonts" }
          },
          {
            urlPattern: /^https:\/\/images\.unsplash\.com\/.+/i,
            handler: "CacheFirst",
            options: { cacheName: "baby-photos", expiration: { maxEntries: 200 } }
          }
        ]
      }
    })
  ]
});
