import { defineConfig } from 'vite';

export default defineConfig({
    base: '/sveak-test/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    server: {
        port: 3000,
        open: true,
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
                chunkFileNames: 'assets/[name].[hash].js',
                entryFileNames: 'assets/[name].[hash].js',
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "./src/scss/variables" as *;`
            }
        }
    }
});