<template>
  <step-card>
    <div class="steps">
      <h5 class="steps__title">Шаг 3: Подтверди данные</h5>
    </div>
  </step-card>
</template>


<script>
import StepCard from './StepCard';
import mapState from 'vuex';

export default {
  name: 'ThirdStepCard',
  components: {
    StepCard,
  }
}
</script>
