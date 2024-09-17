import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'Project',
      filename: 'projectEntry.js',
      exposes: {
        './Project': './src/Project.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',  // Enable top-level await
    polyfillDynamicImport: false,  // Ensure dynamic imports are handled correctly
  },
  server: {
    port: 3002,
  },
});


