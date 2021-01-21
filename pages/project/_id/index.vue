<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
    <projectImageViewer :images="images" />
  </div>
</template>

<script>
import projectImageViewer from '@/components/project-image-viewer'
import projects from '@/constants/projects'

export default {
  components: {
    projectImageViewer,
  },
  layout: 'project',
  asyncData({ app, params }) {
    const id = params.id

    return {
      title: app.i18n.t(`projects.${id}.title`),
      content: app.i18n.t(`projects.${id}.content`),
      titleHead: id + ' ' + app.i18n.t('head.project.title'),
      htmlAttrs: {
        lang: params.lang ? params.lang : 'en',
      },
      id,
    }
  },
  data() {
    return {
      images: [],
    }
  },
  mounted() {
    const imagesLength = projects.find((project) => project.id === this.id)
      ? projects.find((project) => project.id === this.id).imageCount
      : 0

    for (let i = 1; i <= imagesLength; i++)
      this.images.push(require(`../../../assets/images/${this.id}/${i}.png`))
  },
  head() {
    return { title: this.titleHead, htmlAttrs: this.htmlAttrs }
  },
}
</script>
