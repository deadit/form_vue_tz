<template>
  <step-card class="steps">
    <h5 class="steps__title">Шаг 3: Подтверди данные</h5>
    <b-container class="steps__form">
      <b-row
        class="d-flex border-top justify-content-between py-3"
        align-v="center"
        v-for="(val) in formData"
        :key="val.id">
        <h6 class="mb-0 font-weight-bold">{{ val.name }}</h6>
        <p class="mb-0 text-muted">{{ levels[val.level].name }}</p>
      </b-row>
    </b-container>
  </step-card>
</template>


<script>
import { mapState } from 'vuex';
import StepCard from './StepCard';

export default {
  name: 'ThirdStepCard',
  computed: mapState({
    levels: state => state.levels,
    formData: state => state.stepsForm.firstStepData,
  }),
  components: {
    StepCard,
  },
};
</script>
