<template>
  <div id="fields">
    <div class="container">
      <div class="header">
        <h3>{{ $t('fields.title') }}</h3>
        <p>{{ $t('fields.intro') }}</p>
      </div>
      <div class="experience">
        <div class="experience-item">
          <h5>{{ $t('fields.front-end.title') }}</h5>
          <p>{{ $t('fields.front-end.description') }}</p>
        </div>
        <div class="experience-item">
          <h5>{{ $t('fields.back-end.title') }}</h5>
          <p>{{ $t('fields.front-end.description') }}</p>
        </div>
        <div class="experience-item">
          <h5>{{ $t('fields.software-architect.title') }}</h5>
          <p>{{ $t('fields.software-architect.description') }}</p>
        </div>
        <div class="experience-item">
          <h5>{{ $t('fields.RDBMS.title') }}</h5>
          <p>{{ $t('fields.RDBMS.description') }}</p>
        </div>
        <div class="experience-item">
          <h5>{{ $t('fields.start-up-expert.title') }}</h5>
          <p>{{ $t('fields.start-up-expert.description') }}</p>
        </div>
        <div class="experience-item">
          <h5>{{ $t('fields.microsoft.title') }}</h5>
          <p>{{ $t('fields.microsoft.description') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
@import "./style.scss";
</style>
