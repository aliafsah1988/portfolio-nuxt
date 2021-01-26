<template>
  <div class="home-page">
    <Banner />
    <About />
    <Skills />
    <Fileds />
    <Projects />
  </div>
</template>

<script>
import Banner from '@/components/home-sections/banner'
import About from '@/components/home-sections/about'
import Projects from '@/components/home-sections/projects'
import Skills from '@/components/home-sections/skills'
import Fileds from '@/components/home-sections/work-experiences'

export default {
  components: {
    Banner,
    About,
    Projects,
    Skills,
    Fileds,
  },
  asyncData({ app, params }) {
    return {
      title: app.i18n.t('head.home.title'),
      htmlAttrs: {
        lang: params.lang ? params.lang : 'en',
      },
    }
  },
  head() {
    return { title: this.title, htmlAttrs: this.htmlAttrs }
  },
}
</script>
