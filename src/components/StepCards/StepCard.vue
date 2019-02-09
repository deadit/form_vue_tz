<template>
  <div>
    <slot></slot>
    <div class="steps__group-buttons">
      <div class="steps__link-btn" v-if="currentStep !== steps[0]">
        <b-button variant="link" size="md" class="p-0" @click="prevStep()">Назад</b-button>
      </div>
      <b-button
        v-if="ready && currentStep !== steps.length - 1"
        variant="primary"
        size="lg"
        @click="submitData()"
      >Отправить</b-button>
      <b-button v-else variant="primary" size="lg" @click="nextStep()">Продолжить</b-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import json from '../../data.json';

export default {
  name: 'StepCard',
  data() {
    return {
      ready: false
    }
  },
  computed: {
    ...mapState([
      'currentStep',
      'steps'
    ]),
    currentStepComponent() {
      return `${this.currentStep.toLowerCase()}-step`;
    },
  },
  methods: {
    changeCurrentStep(newStep) {
      if (this.currentStep === newStep) return;

      this.ready = false;
      this.$store.commit('changeCurrentStep', { newStep })
    },
    nextStep() {
      const currIndex = this.steps.indexOf(this.currentStep);

      if (currIndex === this.steps.length - 1) {
        this.ready = true;
        return;
      }

      this.changeCurrentStep(this.steps[currIndex + 1])
    },
    prevStep() {
      const currIndex = this.steps.indexOf(this.currentStep);

      if (currIndex === 0) {
        this.changeCurrentStep(this.steps[this.steps.length - 1]);
        return;
      }

      this.changeCurrentStep(this.steps[currIndex - 1])
    }
  },
  created() {
    this.$store.commit('initialStepsValue', json);
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
