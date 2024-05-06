import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  logoUrl: { dark: '/logo-dark.svg', light: '/logo-light.svg' },
  sidebar: [
    {
      text: 'Introduction',
      link: '/introduction',
    },
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
  twoslash: {
    compilerOptions: {
      jsx: 1
    }
  }
})
