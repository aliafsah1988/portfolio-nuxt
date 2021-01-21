<template>
  <div class="social-media">
    <a :href="SOCIAL_LINKS.LINKEDIN" target="_blank">
      <img src="@/assets/images/linkedin.svg" />
    </a>
    <a :href="SOCIAL_LINKS.GITHUB" target="_blank">
      <img src="@/assets/images/github.svg" />
    </a>
    <a :href="SOCIAL_LINKS.MEDIUM" target="_blank">
      <img src="@/assets/images/blog.svg" />
    </a>
    <a :href="SOCIAL_LINKS.FACEBOOK" target="_blank">
      <img src="@/assets/images/facebook.svg" />
    </a>
  </div>
</template>

<script>
import SOCIAL_LINKS from '@/constants/social-links.js'

export default {
  data() {
    return {
      SOCIAL_LINKS,
    }
  },
}
</script>

<style lang="sass" scoped>
@import "./style.scss";
</style>
