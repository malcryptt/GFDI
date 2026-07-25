import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        port: 3000,
        open: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                issues: resolve(__dirname, 'issues.html'),
                report: resolve(__dirname, 'report.html'),
                volunteer: resolve(__dirname, 'volunteer.html'),
                partners: resolve(__dirname, 'partners.html'),
                resources: resolve(__dirname, 'resources.html'),
                contact: resolve(__dirname, 'contact.html'),
            }
        }
    }
});
