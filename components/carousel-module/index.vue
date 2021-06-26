<template>
  <div class="carousel-module">
    <div class="carousel-module__container">
      <div class="carousel-module__items">
        <div ref="carousel" class="carousel-module__carousel">
          <slot />
        </div>
      </div>

      <Next
        v-if="loaded && nextActive"
        :class-name="'carousel-module__arrow r'"
        @next="goPrexOrNext"
      />
      <Prev
        v-if="loaded && prevActive"
        :class-name="'carousel-module__arrow l'"
        @prev="goPrexOrNext"
      />
    </div>
  </div>
</template>

<script>
import Prev from './Previous'
import Next from './Next'

export default {
  name: 'FullCarousel',
  components: {
    Next,
    Prev,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      current: 0,
      loaded: false,
    }
  },
  computed: {
    prevActive() {
      return this.current > 0
    },
    nextActive() {
      return this.list.length > this.current + this.getTellorance()
    },
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    getTellorance() {
      const innerW = window.innerWidth
      if (innerW > 1200) return 4
      if (innerW < 1200 && innerW > 992) return 4
      if (innerW < 992 && innerW > 768) return 4
      return 2
    },
    getItemWith() {
      return document.getElementsByClassName('carousel-module__item')[0]
        .clientWidth
    },
    goPrexOrNext(isPrev = true) {
      const itemW = this.getItemWith()
      if (this.$refs.carousel) {
        if (isPrev) {
          const current = this.current - 1
          this.$refs.carousel.style = `transform: translateX(-${
            current * itemW
          }px)`
          this.current = current
        } else {
          const current = this.current + 1
          this.$refs.carousel.style = `transform: translateX(-${
            current * itemW
          }px)`
          this.current = current
        }
      }
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
