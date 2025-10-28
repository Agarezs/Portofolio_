import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Naikkan batas warning menjadi 2000 kB
    chunkSizeWarningLimit: 2000
  }
})
