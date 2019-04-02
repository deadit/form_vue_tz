<template>
  <div>
    <slot></slot>
    <div class="steps__group-buttons">
      <div class="steps__link-btn" v-if="currentStep !== steps[0]">
        <b-button variant="link" size="md" class="p-0" @click="prevStep()">Назад</b-button>
      </div>
      <b-button
        v-if="isReady && currentStep !== steps.length - 1"
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

export default {
  name: 'StepCard',
  data() {
    return {
      isReady: false,
    };
  },
  computed: {
    ...mapState({
      currentStep: state => state.currentStep,
      steps: state => state.steps,
    }),
    currentStepComponent() {
      return `${this.currentStep.toLowerCase()}-step`;
    },
  },
  methods: {
    changeCurrentStep(newStep) {
      if (this.currentStep === newStep) return;

      this.isReady = false;
      this.$store.commit('changeCurrentStep', { newStep });
    },
    nextStep() {
      const currIndex = this.steps.indexOf(this.currentStep);

      if (currIndex === this.steps.length - 1) {
        this.isReady = true;
        return;
      }

      this.changeCurrentStep(this.steps[currIndex + 1]);
    },
    prevStep() {
      const currIndex = this.steps.indexOf(this.currentStep);

      if (currIndex === 0) {
        this.changeCurrentStep(this.steps[this.steps.length - 1]);
      } else {
        this.changeCurrentStep(this.steps[currIndex - 1]);
      }
    },
    submitData() {
      this.$store.dispatch('submitStepForm').then(
        data => console.log(data),
      );
    },
  },
};
</script>

<style lang="scss" scoped>
  .steps {

    &__volume {
      display: flex;
    }

    &__title {
      text-align: center;
      font-weight: bold;
      margin-bottom: 34px;
      font-size: 19px;
    }

    &__paragraph {
      font-size: 14px;
      font-weight: bold;
      margin-top: 1rem;
      margin-bottom: 0;
      height: 42px;
      text-align: center;
    }

    &__info {
      display: flex;
      vertical-align: top;
    }

    &__group {
      max-width: 138px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      & + .steps__group {
        margin-left: 1px;
      }


      &:first-child .steps__paragraph {
        text-align: left;
      }

      &:last-child .steps__paragraph {
        text-align: right;
      }
    }

    &__form {
      margin-top: 60px;
    }

    &__group-buttons {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      position: relative;
    }

    &__link-btn {
      position: absolute;
      left: 0;
      display: flex;
      height: 100%;
    }
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;

    & + .info-row {
      border-top: 1px solid rgba(0, 0, 0, 0.12);
    }

    &__title {
      font-size: 16px;
      font-weight: bold;
      margin: 0;
    }

    &__paragraph {
      font-size: 14px;
      color: rgba(0,0,0,0.5);
      margin: 0;
    }

    &__left-side {
      display: flex;
      flex-direction: column;
    }

    &__right-side {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
</style>
