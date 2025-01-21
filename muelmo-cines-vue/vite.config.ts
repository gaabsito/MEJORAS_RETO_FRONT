import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath} from 'url'


export default defineConfig({
  plugins: [
  vue()
  ],
  css: {
  preprocessorOptions: {
  scss: {
  additionalData: `@import "@/assets/styles/main.scss";`,
  }
  }
  },
  resolve: {
  alias: {
  '@': fileURLToPath(new URL('./src', import.meta.url))
  }
  }
  })