<template>
  <section class="section CTA">
    <div class="container CTAContainer">
      <StyledTitle
        color="#fff"
        margin="0px 0px 60px 0px">Garanta sua vaga</StyledTitle>
      <StyledButton margin="0px 0px 60px 0px">{{ getRightText }}</StyledButton>
    </div>
  </section>
</template>

<script>
import StyledTitle from './Title'
import StyledButton from './Button.vue'
import { getRightText } from '@/utils/helpers'

export default {
  name: 'CTA',
  components: { StyledTitle, StyledButton },
  computed: {
    getRightText
  }
}
</script>

<style lang="scss" scoped>
.CTA {
  background-color: #232323;

  > .CTAContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
