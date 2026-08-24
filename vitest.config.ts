import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.ts', 'src/**/*.astro'],
    },
  },
});
