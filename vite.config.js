import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',          // Main entry (home page)
        about: 'about.html',        // Additional pages
        contact: 'contact.html',
        services: 'services.html',
        project: 'project.html',
      },
    },
    outDir: 'dist',                  // Ensure output directory is correct
  },
});
