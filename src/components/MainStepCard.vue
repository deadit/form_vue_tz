<style lang="scss" scoped>
  .mcard {
    padding: 0;
    width: 684px;
    margin: auto;
    margin: 60px auto;

    &__header {
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }

    &__body {
      width: 567px;
      margin: auto;
      padding: 34px 0;
    }
  }
</style>

<template>
  <b-container>
    <b-card no-body class="mcard">
      <b-card-header class="mcard__header bg-white text-center p-5">
        <h2 class="mb-4 font-weight-bold">Вступительное испытание</h2>
        <div>
          <b-button
            v-for="(step, index) in steps"
            :key="index"
            @click="changeCurrentStep(step)"
            :variant="step !== currentStep ? 'link' : 'primary'"
            class="px-3 mr-3"
          >Шаг {{index + 1}}</b-button>
        </div>
      </b-card-header>
      <b-card-body class="mcard__body">
        <component :is="currentStepComponent" />
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import FirstStepCard from './StepCards/FirstStepCard';
import SecondStepCard from './StepCards/SecondStepCard';
import ThirdStepCard from './StepCards/ThirdStepCard';

export default {
  name: 'MainStepCard',
  computed: {
    currentStepComponent() {
      return `${this.currentStep.toLowerCase()}-step-card`;
    },
    ...mapState({
      currentStep: state => state.currentStep,
      steps: state => state.steps,
    }),
  },
  methods: {
    changeCurrentStep(newStep) {
      if (this.currentStep === newStep) return;

      this.$store.commit('changeCurrentStep', { newStep });
    },
  },
  components: {
    FirstStepCard,
    SecondStepCard,
    ThirdStepCard,
  },
  created() {
    const jsonData = require('../data.json');
    this.$store.commit('initialStepsValue', jsonData);
  },
};
</script>
