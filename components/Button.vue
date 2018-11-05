<template>
  <a
    :style="{ margin: margin }"
    href="https://erickwendel.typeform.com/to/y6vACu"
    class="StyledBtn">
    <slot />
  </a>
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
  position: relative;
  border: 1px solid #06EF07;
  background-color: transparent;
  padding: 20px 30px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 500px;
  width: 270px;
  text-transform: uppercase;
  text-align: center;
  outline: none;
  color: #06EF07;
  transition: all .1s ease-in;

  &:hover {
    background-color: #06EF07;
    color: #fff;
    cursor: pointer;
  }

  &::after {
    position: absolute;
    content: "treinamento online!";
    font-size: 10px;
    color: #ccc;
    font-weight: 700;
    top: -20px;
    left: 80px;
  }
}
</style>
