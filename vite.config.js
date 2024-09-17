import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@features': path.resolve(__dirname, './src/features'),
      '@services': path.resolve(__dirname, './src/services'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@app': path.resolve(__dirname, './src/app'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@routes': path.resolve(__dirname, './src/routes'),
    },
  },
  server:{
    port:3000
  }
})
