import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O Vite usa este arquivo para ativar o suporte ao React durante o desenvolvimento.
export default defineConfig({
  plugins: [react()],
})
