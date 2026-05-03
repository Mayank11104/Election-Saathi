import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('@google/generative-ai')) return 'ai';
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'vendor';
          }
        }
      }
    },
    minify: 'terser',
    chunkSizeWarningLimit: 500,
  }
})
