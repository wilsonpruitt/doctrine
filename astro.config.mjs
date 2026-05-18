// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://doctrine.wrootpress.com',
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'pt', 'sw'],
    routing: { prefixDefaultLocale: false },
  },
});
