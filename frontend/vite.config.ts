import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// eth-crypto pulls in Node-style code (Buffer, process). Expose them as
// browser globals so the SSI keypair derivation works under Vite.
export default defineConfig({
    plugins: [react()],
    define: {
        global: 'globalThis',
    },
    resolve: {
        alias: {
            buffer: 'buffer',
            process: 'process/browser',
        },
    },
    optimizeDeps: {
        include: ['buffer', 'process'],
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        proxy: {
            '/api': {
                target: process.env.VITE_PROXY_TARGET || 'http://localhost:3000',
                changeOrigin: true,
            },
        },
    },
});
