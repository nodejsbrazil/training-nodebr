<template>
  <h2
    :style="{
      margin: margin,
      color: color
    }"
    class="StyledTitle">
    <span class="StyledTitle--float" />
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    margin: { type: String, default: '0px' },
    color: { type: String, default: '#444' }
  }
}
</script>

<style lang="scss" scoped>
.StyledTitle {
  color: #444;
  font-weight: 700;
  font-size: 40px;
  position: relative;

  &--float {
    position: absolute;
    background-color: #06EF07;
    width: 100px;
    height: 10px;
    top: 60px;
    left: -20px;
    opacity: .5;
  }
}
</style>

