import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // or whatever folder you're targeting
    assetsDir: 'assets', // ensures Vite places static assets correctly
    rollupOptions: {
      input: 'index.html', // main entry
    },
  },
});
