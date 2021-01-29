<template>
  <div id="fields">
    <div class="container">
      <div class="header">
        <h3>{{ $t('fields.title') }}</h3>
        <p>{{ $t('fields.intro') }}</p>
      </div>
      <div class="experience">
        <FieldsItem
          :title="$t('fields.front-end.title')"
          :description="$t('fields.front-end.description')"
          :image="require('../../../assets/images/fields/front-end.jpg')"
        />
        <FieldsItem
          :title="$t('fields.back-end.title')"
          :description="$t('fields.back-end.description')"
          :image="require('../../../assets/images/fields/back-end.png')"
        />
        <FieldsItem
          :title="$t('fields.software-architect.title')"
          :description="$t('fields.software-architect.description')"
          :image="
            require('../../../assets/images/fields/software-architecture.jpg')
          "
        />
        <FieldsItem
          :title="$t('fields.RDBMS.title')"
          :description="$t('fields.RDBMS.description')"
          :image="require('../../../assets/images/fields/database.jpg')"
        />
        <FieldsItem
          :title="$t('fields.start-up-expert.title')"
          :description="$t('fields.start-up-expert.description')"
          :image="require('../../../assets/images/fields/startup.jpg')"
        />
        <FieldsItem
          :title="$t('fields.microsoft.title')"
          :description="$t('fields.microsoft.description')"
          :image="require('../../../assets/images/fields/microsoft.jpg')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FieldsItem from '../../field-item'
export default {
  components: {
    FieldsItem,
  },
}
</script>

<style lang="sass">
@import "./style.scss";
</style>
