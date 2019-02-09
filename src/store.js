import Vue from 'vue';
import Vuex from 'vuex';
import { isEmpty, flatten, values } from 'ramda';
import createPersistedState from 'vuex-persistedstate';
import { get } from 'https';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepsForm: {
      firstStepData: {},
      secondStepData: {},
    },
    levels: [],
    currentStep: 'First',
    steps: ['First', 'Second', 'Third'],
  },
  plugins: [createPersistedState()],
  mutations: {
    initialStepsValue(state, { data, levels }) {
      if (isEmpty(this.state.stepsForm.firstStepData)) {
        this.state.stepsForm.firstStepData = data;
      }

      if (isEmpty(this.state.levels)) {
        this.state.levels = levels;
      }
    },
    changeLevelById(state, { id, newLevel }) {
      Vue.set(state.stepsForm.firstStepData[id], 'level', newLevel);
    },
    changeCurrentStep(state, { newStep }) {
      this.state.currentStep = newStep;
    },
    submitForm(state) {
      axios.post({
        data: {
          ...this.state.firstStepData,
          ...this.state.secondStepData,
        },
      });
    },
  },
});
