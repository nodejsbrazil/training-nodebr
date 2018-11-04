<template>
  <button
    :style="{ margin: margin }"
    class="StyledBtn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'StyledButton',
  props: {
    margin: { type: String, default: '0px' }
  }
}
</script>

<style lang="scss" scoped>
.StyledBtn {
  border: 1px solid #06EF07;
  background-color: transparent;
  padding: 20px 30px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 500px;
  width: 270px;
  text-transform: uppercase;
  outline: none;
  color: #06EF07;
  transition: all .1s ease-in;

  &:hover {
    background-color: #06EF07;
    color: #fff;
    cursor: pointer;
  }
}
</style>
