// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mucunguzi256.github.io/guildleaders',
  integrations: [tailwind()],
  output: 'static',
});