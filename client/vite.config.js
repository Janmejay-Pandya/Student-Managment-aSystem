import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://classroom-management-backend-one.vercel.app',
        secure: true,
        changeOrigin: true,  // Ensures the host header matches the target
      },
    },
  },
  plugins: [
    react({
      // SWC configuration
      jsxImportSource: 'react',
      jsc: {
        transform: {
          react: {
            throwIfNamespace: false,  // Disable namespace check
          },
        },
      },
    }),
  ],
})
