import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/andrewlee-29.github.io/', // 替换为你的仓库名
  plugins: [react(), tailwindcss()],
})
