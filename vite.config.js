import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: id => {
        // Если модуль начинается с одного из этих путей, он будет считаться внешним
        if (id.includes('node_modules')) return true;
        // eslint-disable-next-line no-undef
        if (builtinModules.includes(id)) return true;
        return false;
      }
    }
  }
})
