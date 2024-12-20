import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import FeatureCards from './components/FeatureCards.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('FeatureCards', FeatureCards)
  }
} as Theme 