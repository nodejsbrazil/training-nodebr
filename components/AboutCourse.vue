<template>
  <section class="section AboutCourse">
    <div class="container AboutCourseContainer">
      <StyledTitle margin="0px 0px 30px 0px">Sobre o curso</StyledTitle>
      <p>
        Varrendo a internet, encontramos diversos treinamentos de Node.js e Javascript. Mas na maioria das vezes estes conteúdos <strong>são focados na mesma coisa</strong>! Seja a Stack MEAN (MongoDB, Express.js, Angular.js e Node.js) seja programação para Web ou simples CRUDs (cinco operações básicas em programação)
        Este treinamento foi desenvolvido sob medida baseado em uma pesquisa sobre o que a comunidade brasileira mais necessita, suas principais dificuldades e desafios.
        Neste curso você aprenderá desde o básico de Javascript, ciclo de vida, manipulação de listas ao desenvolvimento real de aplicações em ambiente de produção. Autenticação, Autorização, Documentação e gerenciamento de variáveis de nossa API.
      </p>
    </div>
  </section>
</template>

<script>
import StyledTitle from './Title'

export default {
  name: 'AboutCourse',
  components: { StyledTitle }
}
</script>

<style lang="scss" scoped>
.AboutCourse {

  > .AboutCourseContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
