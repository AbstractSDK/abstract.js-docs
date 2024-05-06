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
      text: 'Core',
      items: [
        {
          text: 'Introduction',
          link: '/core/introduction',
        },
      ]
    },
    {
      text: 'CLI',
      items: [
        {
          text: 'Introduction',
          link: '/cli/introduction',
        },
      ]
    },
  ],
  twoslash: {
    compilerOptions: {
      jsx: 1
    }
  }
})
