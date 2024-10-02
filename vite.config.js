import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: (id) => {
        // Помечаем все модули, начинающиеся с 'gsap' или '@gsap/react', как внешние
        return /^gsap/.test(id) || /^@gsap\/react/.test(id);
      }
    }
  },
  optimizeDeps: {
    include: ['gsap', '@gsap/react'] // Оптимизируем gsap и @gsap/react
  }
})
