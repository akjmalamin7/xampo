import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // নিশ্চিত করুন সঠিক পথ ব্যবহার হচ্ছে
    },
  },
});
