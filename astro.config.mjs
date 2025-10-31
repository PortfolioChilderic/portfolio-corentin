// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://childeric.github.io',
  base: '/portfolio/',
  output: 'static',
  trailingSlash: 'ignore',
});