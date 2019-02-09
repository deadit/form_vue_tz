<template>
  <step-card>
    <div class="steps">
      <h5 class="steps__title">Шаг 2: Расскажи о себе</h5>
    </div>
  </step-card>
</template>


<script>
import StepCard from './StepCard';
import mapState from 'vuex';

export default {
  name: 'SecondStepCard',
  components: {
    StepCard,
  }
}
</script>
