/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'

export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     // Добавляем алиас для gsap, чтобы разрешить модульные пути
  //     'gsap': path.resolve(__dirname, 'node_modules/gsap'),
  //     '@gsap/react': path.resolve(__dirname, 'node_modules/@gsap/react')
  //   }
  // },
  // build: {
  //   rollupOptions: {
  //     external: (id) => /^gsap/.test(id) || /^@gsap\/react/.test(id)
  //   }
  // },
  // optimizeDeps: {
  //   include: ['gsap', '@gsap/react']
  // }
})
