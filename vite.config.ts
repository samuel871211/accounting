import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: { host: '0.0.0.0' },
  css: {
    preprocessorOptions: {
      scss: {
        /* Specify options to pass to SCSS pre-processors. */
        additionalData: `
          @import "./assets/style/variables.scss";
        `,
      },
    },
  },
})
