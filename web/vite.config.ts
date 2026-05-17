import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: https://gabriel-hp415.github.io/Portfolio/
// Set VITE_BASE_PATH=/Portfolio/ in CI; local dev uses /
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
