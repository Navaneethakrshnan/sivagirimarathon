import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Same-origin in dev so NovaRace results API is not blocked by CORS
      '/api/novarace': {
        target: 'https://api.novarace.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/novarace/, ''),
      },
    },
  },
})
