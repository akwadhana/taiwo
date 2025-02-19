import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://artistic-insights-alley-api.onrender.com', // Update to your backend URL
        changeOrigin: true,
        secure: true, // Use true for HTTPS, false for HTTP (only if necessary)
        rewrite: (path) => path.replace(/^\/api/, '') // Removes `/api` prefix when forwarding
      }
    }
  }
})
