<template>
  <a
    :style="{ margin: margin }"
    target="__blank"
    href="https://sso.teachable.com/secure/295257/users/sign_up?origin=LandingNodeBR&after_success_url=%2Fsecure%2F295257%2Fcheckout%2F881116%2Fnode-js-para-iniciantes-nodebr"
    class="StyledBtn">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'StyledButton',
  props: {
    margin: { type: String, default: '0px' },
  },
};
</script>

<style lang="scss" scoped>
.StyledBtn {
  position: relative;
  border: 1px solid #06ef07;
  background-color: transparent;
  padding: 20px 30px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 500px;
  width: 270px;
  text-transform: uppercase;
  text-align: center;
  outline: none;
  color: #06ef07;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: #06ef07;
    color: #fff;
    cursor: pointer;
  }

  &::after {
    position: absolute;
    content: 'treinamento online e gratuito!';
    font-size: 10px;
    color: #ccc;
    font-weight: 700;
    top: -20px;
    left: 42px;
  }
}
</style>
