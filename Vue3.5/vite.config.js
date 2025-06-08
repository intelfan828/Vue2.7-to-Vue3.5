import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', // Modern JS for browsers
    outDir: 'dist', // Ensure the output directory is correct
    commonjsOptions: {
      transformMixedEsModules: true, // Allows both CJS and ESM
    },
  },
  plugins: [
    vue(),
    // vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  server: {
    host: '127.0.0.1',
    port: 3000, // Change to an available port
  },
  base: '/',
  css: {
    sourceMap: true,
    loaderOptions: {
      css: {
        url: false,
      },
    },
  },
  optimizeDeps: {
    include: ['@fawmi/vue-google-maps', 'fast-deep-equal', 'slick-carousel'],
  },
})
