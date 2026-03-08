import { defineConfig } from 'vite'
/* Enables JSX, Fast Refresh (HMR for React), and React-specific optimizations */
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
