import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base for GitHub Pages (adjust if you deploy to a different path)
  base: '/homebase/',
  server: {
    port: 3000,
  },
})
