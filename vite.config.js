import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        panel: resolve(__dirname, 'panel.html')  // Vue app panel
      },
    }
  }
})
