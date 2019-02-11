<template>
  <step-card class="steps">
    <h5 class="steps__title">Шаг 2: Расскажи о себе</h5>
    <div class="steps__form">
      <b-form-textarea
                      v-model="text"
                      placeholder="Немного обо мне"
                      :rows="17"
                      :max-rows="17">
      </b-form-textarea>
    </div>
  </step-card>
</template>

<script>
import StepCard from './StepCard';
import { mapState } from 'vuex';

export default {
  name: 'SecondStepCard',
  computed: {
    text: {
      get () {
        return this.$store.state.stepsForm.secondStepData.textArea
      },
      set (value) {
        this.$store.commit('changeSecondStepDataTextArea', { textArea: value });
      }
    }
  },
  components: {
    StepCard,
  },
};
</script>
