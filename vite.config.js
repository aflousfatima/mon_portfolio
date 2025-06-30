import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mon_portfolio/', // ← TRÈS IMPORTANT
  plugins: [react()],

})
