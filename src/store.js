import Vue from 'vue';
import Vuex from 'vuex';
import { isEmpty } from 'ramda';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepsForm: {
      firstStepData: {},
      secondStepData: {
        textArea: '',
      },
    },
    levels: [],
    currentStep: 'First',
    steps: ['First', 'Second', 'Third'],
  },
  plugins: [createPersistedState()],
  mutations: {
    initialStepsValue: (state, { data, levels }) => {
      if (isEmpty(state.stepsForm.firstStepData)) {
        Vue.set(state.stepsForm, 'firstStepData', data);
      }

      if (isEmpty(state.levels)) {
        Vue.set(state, 'levels', levels);
      }
    },
    changeFirstStepDataLevelById: (state, { id, newLevel }) => {
      Vue.set(state.stepsForm.firstStepData[id], 'level', newLevel);
    },
    changeSecondStepDataTextArea: (state, { textArea }) => {
      Vue.set(state.stepsForm.secondStepData, 'textArea', textArea);
    },
    changeCurrentStep: (state, { newStep }) => {
      Vue.set(state, 'currentStep', newStep);
    },
  },
  actions: {
    submitStepForm(context) {
      return Promise.resolve('Форма отправлена');
    },
  },
});
