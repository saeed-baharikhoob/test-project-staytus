import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    css: false,
    globals: true,
    watch: false,
    environment: 'jsdom',
  },

})
