import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port : 3000,
    proxy: {
      '/api':{
        target: 'https://invoices-api-5fpa.onrender.com',
        changeOrigin:true
      }
    }
  },
  resolve: {
    // Ajoutez ici les extensions que vous souhaitez prendre en charge
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
