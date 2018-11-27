<template>
  <section class="section AboutCourse">
    <div class="container AboutCourseContainer">
      <StyledTitle margin="0px 0px 30px 0px">Sobre o curso</StyledTitle>
      <p>Varrendo a internet, encontramos diversos treinamentos sobre
        <strong>Node.js</strong> e
        <strong>Javascript</strong>. Mas na maioria das vezes estes conteúdos
        <strong>são focados na mesma coisa</strong>! A grande maioria fala sobre a Stack
        <strong>MEAN</strong> (MongoDB, Express.js, Angular.js e Node.js), programação para Web ou apenas
        <strong>simples CRUDs</strong> (as operações básicas de sistemas: Cadastrar, Listar, Atualizar e Remover), coisas que para
        <strong>estudos</strong> funcionam muito bem, mas a
        <strong>realidade</strong> no dia a dia de desenvolvimento de
        <strong>aplicações</strong> focado em
        <strong>produção</strong> é um pouco
        <strong>diferente</strong>.
      </p>
      <br>
      <p>
        Este treinamento foi
        <strong>desenvolvido</strong> sob medida
        <strong>baseado</strong> em uma pesquisa sobre o que a
        <strong>comunidade brasileira mais necessita</strong>, suas principais
        <strong>dificuldades</strong> e
        <strong>desafios</strong>.
        Neste curso você aprenderá desde o básico de Javascript, ciclo de vida, manipulação de listas ao desenvolvimento real de aplicações em ambiente de produção. Na prática você também aprenderá conceitos sobre desenvolvimento orientado a testes, autenticação, autorização, documentação de serviços e gerenciamento de variáveis de ambiente (environments) de aplicações.
      </p>
    </div>
  </section>
</template>

<script>
import StyledTitle from "./Title";

export default {
  name: "AboutCourse",
  components: { StyledTitle }
};
</script>

<style lang="scss" scoped>
.AboutCourse {
  > .AboutCourseContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      font-size: 20px;
      text-align: justify;
    }
  }
}
</style>
