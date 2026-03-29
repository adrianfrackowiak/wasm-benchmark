import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#components': path.resolve(__dirname, 'src/components'),
      '#consts': path.resolve(__dirname, 'src/consts'),
      '#contexts': path.resolve(__dirname, 'src/contexts'),
      '#hooks': path.resolve(__dirname, 'src/hooks'),
      '#interfaces': path.resolve(__dirname, 'src/interfaces'),
      '#reducers': path.resolve(__dirname, 'src/reducers'),
      '#types': path.resolve(__dirname, 'src/types'),
    },
  }
});
