import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// hadoken-io.github.io is a *user* pages repo, served from the domain root,
// so base stays '/'. (A project-page repo would need base: '/repo-name/'.)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
