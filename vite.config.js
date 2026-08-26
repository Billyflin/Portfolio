import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        es: fileURLToPath(new URL('./es/index.html', import.meta.url)),
        plain: fileURLToPath(new URL('./plain/index.html', import.meta.url)),
        esPlain: fileURLToPath(new URL('./es/plain/index.html', import.meta.url)),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
  },
});
