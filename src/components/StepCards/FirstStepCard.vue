<template>
  <step-card class="steps">
    <h5 class="steps__title">Шаг 1: Расскажи нам о своих навыках</h5>
    <div class="steps__info">
      <div class="steps__volume">
        <div class="steps__group" v-for="(level, index) in levels" :key="index">
          <img class="steps__img" :src="require(`@/${level.src}`)" />
          <p class="steps__paragraph" v-html="level.name"></p>
        </div>
      </div>
    </div>
    <div class="steps__form">
      <div class="info-row" v-for="(val, index) in formData" :key="val.id">
        <div class="info-row__item range__left-side">
          <h3 class="info-row__title">{{ val.name }}</h3>
          <p class="info-row__paragraph">{{ levels[val.level].name }}</p>
        </div>
        <range
          class="info-row__right-side"
          :levelNow="val.level"
          :levelMax="levels.length - 1"
          v-on:changeLevel="(newLevel) => onLevelChanged(index, newLevel)"
        />
      </div>
    </div>
  </step-card>
</template>

<script>
import { mapState } from 'vuex';
import Range from '../Range';
import StepCard from './StepCard';

export default {
  name: 'FirstStepCard',
  components: {
    StepCard,
    Range,
  },
  computed: mapState({
    levels: state => state.levels,
    formData: state => state.stepsForm.firstStepData,
  }),
  methods: {
    onLevelChanged(id, newLevel) {
      this.$store.commit('changeFirstStepDataLevelById', { id, newLevel });
    },
  },
};
</script>
