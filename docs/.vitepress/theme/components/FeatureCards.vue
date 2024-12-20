<template>
  <div class="feature-cards">
    <div v-for="feature in features" :key="feature.title" class="feature-card" :style="{ background: feature.background }">
      <div class="icon">{{ feature.icon }}</div>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.details }}</p>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()

const features = [
  {
    icon: '🌐',
    title: 'Universal Access',
    details: 'Access any application remotely, including official apps, store apps, and custom developed applications',
    background: isDark.value 
      ? 'linear-gradient(145deg, rgba(40,40,40,0.9), rgba(30,30,30,0.9))'
      : 'linear-gradient(145deg, rgba(240,240,240,0.9), rgba(250,250,250,0.9))'
  },
  {
    icon: '🔒',
    title: 'Advanced Security',
    details: 'End-to-end VPN encryption with zero-trust hardware security design',
    background: isDark.value
      ? 'linear-gradient(145deg, rgba(40,40,40,0.9), rgba(30,30,30,0.9))'
      : 'linear-gradient(145deg, rgba(240,240,240,0.9), rgba(250,250,250,0.9))'
  },
  {
    icon: '⚡',
    title: 'Powerful Computing',
    details: 'Intel AI chip with up to 4.5GHz, supporting OpenVINO/IPEX-LLM AI inference framework',
    background: isDark.value
      ? 'linear-gradient(145deg, rgba(40,40,40,0.9), rgba(30,30,30,0.9))'
      : 'linear-gradient(145deg, rgba(240,240,240,0.9), rgba(250,250,250,0.9))'
  }
]
</script>

<style scoped>
.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}

.feature-card {
  padding: 24px;
  border-radius: 12px;
  transition: all 0.3s;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255,255,255,0.2);
}

.icon {
  font-size: 20px;
  margin-bottom: 12px;
}

h3 {
  margin: 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text);
}

p {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style> 