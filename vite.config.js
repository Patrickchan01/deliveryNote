import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['1cb6c10b-fab9-4ef8-a00f-5aa87e2e2bb7-00-1gvyld6f0kfgd.sisko.replit.dev']
  }
})
