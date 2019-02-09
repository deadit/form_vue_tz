
<style lang="scss" scoped>
  .range {
    &__next,
    &__prev {
      width: 19px;
      height: 19px;
      display: flex;
      border: none;
      padding: 0;
      width: 100%;
      background: transparent;

      path {
        fill: #000;
      }

      &[disable="true"] {
        opacity: 0.25;
      }
    }

    &__container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__block {
      background: rgba(196, 196, 196, 0.25);
      width: 47px;
      height: 10px;
      border: none;
      padding: 0;

      & + .range__block {
        margin-left: 2px;
      }

      &.none {
        &::before {
          content: '';
          display: block;
          background: #202257;
          width: 5px;
          height: 10px;
        }
      }

      &.active {
        background: #1EB295;
      }
    }
  }
</style>

<template>
  <div class="range">
    <button class="range__prev mr-3" type="button" :disable="prevDisable" @click="prevLevel">
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.5C0 4.26148 4.26185 0 9.5 0C14.7382 0 19 4.26148 19 9.5C19 14.7385 14.7382 19 9.5 19C4.26185 19 0 14.7385 0 9.5ZM0.730769 9.5C0.730769 14.3351 4.66487 18.2692 9.5 18.2692C14.3351 18.2692 18.2692 14.3351 18.2692 9.5C18.2692 4.66487 14.3351 0.730769 9.5 0.730769C4.66487 0.730769 0.730769 4.66487 0.730769 9.5ZM14 9H5V10H14V9Z" fill="white"/>
      </svg>
    </button>
    <div class="range__container">
      <button
        v-for="block in levelMax"
        :key="block"
        @click="level = block"
        class="range__block"
        :class="{ active: block <= level, none: block === 1 && level === 0 }"></button>
    </div>
    <button class="range__next ml-3" type="button" :disable="nextDisable" @click="nextLevel">
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0C4.26185 0 0 4.26148 0 9.5C0 14.7385 4.26185 19 9.5 19C14.7382 19 19 14.7385 19 9.5C19 4.26148 14.7382 0 9.5 0ZM9.5 18.2692C4.66487 18.2692 0.730769 14.3351 0.730769 9.5C0.730769 4.66487 4.66487 0.730769 9.5 0.730769C14.3351 0.730769 18.2692 4.66487 18.2692 9.5C18.2692 14.3351 14.3351 18.2692 9.5 18.2692Z" fill="white"/>
        <path d="M14.0673 9.13462H9.86535V5.11538C9.86535 4.91333 9.70166 4.75 9.49996 4.75C9.29827 4.75 9.13458 4.91333 9.13458 5.11538V9.13462H4.93266C4.73096 9.13462 4.56727 9.29794 4.56727 9.5C4.56727 9.70206 4.73096 9.86539 4.93266 9.86539H9.13458V14.25C9.13458 14.4521 9.29827 14.6154 9.49996 14.6154C9.70166 14.6154 9.86535 14.4521 9.86535 14.25V9.86539H14.0673C14.269 9.86539 14.4327 9.70206 14.4327 9.5C14.4327 9.29794 14.269 9.13462 14.0673 9.13462Z" fill="white"/>
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Range',
    props: {
      levelMax: Number,
      levelNow: Number
    },
    data () {
      return {
        level: this.levelNow
      }
    },
    computed: {
      prevDisable() {
        return this.level === 0;
      },
      nextDisable() {
        return this.level === this.levelMax;
      },
    },
    watch: {
      level() {
        this.$emit('changeLevel', this.level);
      },
    },
    methods: {
      nextLevel() {
        if (!this.nextDisable) {
          this.level = this.level + 1;
        }
      },
      prevLevel() {
        if (!this.prevDisable) {
          this.level = this.level - 1;
        }
      }
    }
  }
</script>
