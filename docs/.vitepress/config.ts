import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MSP Notes',
  description: 'Personal Knowledge Base',
  lang: 'en-US',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes/' }
    ],
    sidebar: {
      '/notes/': [
        {
          text: 'Notes',
          items: [
            // Your notes structure here
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clu6/vitepress-notes' }
    ]
  }
}) 