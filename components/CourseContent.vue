<template>
  <section class="section CourseContent">
    <div class="container CourseContentContainer">
      <StyledTitle margin="0px 0px 30px 0px">Conteúdo programático</StyledTitle>
      <div class="CourseContentContainer-accordions">
        <Collapse
          v-for="(item, index) in courseContent"
          :key="index"
          :label-text="`Módulo ${index}`"
          :title="item.title"
          :items="item.items"
          margin="15px 0px" />
      </div>
    </div>
  </section>
</template>

<script>
import StyledTitle from './Title'
import Collapse from './Collapse'
import courseContent from '@/content/courseContent'

export default {
  name: 'CourseContent',
  components: { StyledTitle, Collapse },
  data: () => ({
    courseContent
  })
}
</script>

<style lang="scss" scoped>
.CourseContent {

  > .CourseContentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-accordions {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
