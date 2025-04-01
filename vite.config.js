import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js'
      }
    }
  },
  server: {
    host: '0.0.0.0',  // Explicitly set to 0.0.0.0 instead of true
    port: 3000,
    strictPort: true,
    hmr: {
      host: '0.0.0.0',
      port: 3000
    },
    watch: {
      usePolling: true  // Might help with VM file watching
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3000
  }
})
