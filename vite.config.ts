import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to your GitHub repo name for GitHub Pages deployment.
// Use '/' if deploying to a custom domain or username.github.io root.
export default defineConfig({
  base: '/abhadani/',
  plugins: [react()],
})
