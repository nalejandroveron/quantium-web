// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: 'https://nalejandroveron.github.io/',
  base: process.env.CI ? '/quantium-web' : undefined,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});