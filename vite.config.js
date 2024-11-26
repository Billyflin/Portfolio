import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';

// Configuración
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  }
})
