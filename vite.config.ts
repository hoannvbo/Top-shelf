import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        detail: resolve(__dirname, 'detail.html'),
        cart: resolve(__dirname, 'cart.html'),
        pay: resolve(__dirname, 'checkout.html'),
      },
    },
  },
});
