import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'License',
      filename: 'licenseEntry.js',
      exposes: {
        './License': './src/License.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',  // Enable top-level await
    polyfillDynamicImport: false,  // Ensure dynamic imports are handled correctly
  },
  server: {
    port: 3001,
  },
});
