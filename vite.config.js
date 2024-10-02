import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: (id) => {
        // Помечаем все модули, начинающиеся с 'gsap', как внешние
        return /^gsap/.test(id);
      }
    }
  },
  optimizeDeps: {
    include: ['gsap']
  }
})
