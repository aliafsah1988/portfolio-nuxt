<template>
  <div :class="containerClass">
    <div class="field-item__card">
      <div>
        <div class="field-item__card__image" :style="imageStyle" />
        <div class="field-item__card__content">
          <span v-if="title" class="field-item__card__title"> {{ title }}</span>
          <span v-if="subTitle" class="field-item__card__subtitle">
            {{ subTitle }}</span
          >
        </div>
      </div>
    </div>
    <div class="field-item__details">
      <div v-if="description" class="field-item__details__description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularCityCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  computed: {
    containerClass() {
      return `field-item ${this.className}`
    },
    imageStyle() {
      return { backgroundImage: `url(${this.image})` }
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
