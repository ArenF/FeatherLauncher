import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Electron 활용 시 Config
// export default defineConfig({
//   plugins: [react()],
//   base: './',
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src')
//     }
//   },
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true
//   }
// });

// React 부분만 활용할 때의 Config
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000
  }
})