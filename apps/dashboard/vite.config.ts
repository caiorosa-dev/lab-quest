import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: 'src/app',
      quoteStyle: 'single',
      semicolons: true,
      routeFileIgnorePattern: '^(_|\\()',
    }),
  ],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
