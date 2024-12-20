import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MSP Notes',
  description: 'Developer Manual',
  lang: 'en-US',
  lastUpdated: true,
  appearance: 'dark',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Welcome', link: '/guide/welcome' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Development Setup', link: '/guide/setup' },
            { text: 'Hello World', link: '/guide/hello-world' },
            { text: 'Development Guide', link: '/guide/development' }
          ]
        },
        {
          text: 'Advanced Topics',
          items: [
            { text: 'Configuration', link: '/guide/configuration' },
            { text: 'Database Services', link: '/guide/database' },
            { text: 'Application Links', link: '/guide/app-links' },
            { text: 'Environment Setup', link: '/guide/environment' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clu6/msp-notes' }
    ]
  }
}) 