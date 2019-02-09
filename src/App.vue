<template>
  <div id="app">
    <main-step-card />
  </div>
</template>

<script>
import MainStepCard from './components/MainStepCard.vue';

export default {
  name: 'app',
  components: {
    MainStepCard,
  },
};
</script>

<style lang="scss">
  @import '@/app.scss';
</style>
