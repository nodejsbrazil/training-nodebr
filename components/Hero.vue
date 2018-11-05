<template>
  <section class="section Hero">
    <div class="container HeroContainer">
      <h1>Node.js para Iniciantes</h1>
      <p class="subtitle"><i>By</i> <strong>#NodeBR!</strong></p>
      <VueCountdown :time="2163195621">
        <template slot-scope="props">
          <p>{{ props.days }} dias {{ props.hours }} horas {{ props.minutes }} minutos {{ props.seconds }} segundos</p>
        </template>
      </VueCountdown>
      <StyledButton margin="50px 0px">Reserve sua vaga!</StyledButton>
    </div>
  </section>
</template>

<script>
import StyledButton from './Button.vue'

export default {
  name: 'Hero',
  components: { StyledButton }
}
</script>

<style lang="scss" scoped>
.Hero {
  height: 100vh;
  background-image: url(../assets/banner.jpg);
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  > .HeroContainer {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
      color: #fff;
      font-size: 50px;
      font-weight: 700;
    }
    .subtitle {
      color: #fff;
      font-size: 30px;
      font-weight: 300;

      > strong {
        color: #fff;
      }
    }
  }
}
</style>

