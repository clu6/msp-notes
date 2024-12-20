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
const features = [
  {
    icon: '🌐',
    title: 'Cross Platform',
    details: 'Support for Windows, Linux, macOS, Android, iOS',
    background: 'linear-gradient(to right bottom, #e8f5fe, #e8f0ff)'
  },
  {
    icon: '🔒',
    title: 'Secure Storage',
    details: 'VPN encryption, secure storage design',
    background: 'linear-gradient(to right bottom, #fff0f6, #f3e5ff)'
  },
  {
    icon: '⚡',
    title: 'High Performance',
    details: 'Powered by Intel AI chip, up to 4.5GHz',
    background: 'linear-gradient(to right bottom, #e3fcf7, #e8fff0)'
  },
  // Add more features as needed
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
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.icon {
  font-size: 20px;
  margin-bottom: 12px;
}

h3 {
  margin: 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

p {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}
</style> 