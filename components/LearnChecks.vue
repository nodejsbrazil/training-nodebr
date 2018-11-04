<template>
  <section class="section LearnChecks">
    <div class="container LearnChecksContainer">
      <StyledTitle
        color="#fff"
        margin="0px 0px 20px 0px">O que você vai aprender?</StyledTitle>
      <div class="LearnChecksContainer-list">
        <ul>
          <li> <span>🤖</span> Criar suas próprias Web APIs</li>
          <li> <span>😍</span> Expor e publicar serviços ao mundo</li>
          <li> <span>🦄</span> Entender e criar seu fluxo de testes</li>
          <li> <span>💥</span> Entender e executar padrões de projetos</li>
        </ul>
        <ul>
          <li> <span>🙀</span> Usar multi bancos de dados</li>
          <li> <span>🔥</span> Criar, manter e documentar seus serviços</li>
          <li> <span>⚡</span> Usar Nodejs como ferramenta de linha de comando</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import StyledTitle from './Title'

export default {
  name: 'LearnChecks',
  components: { StyledTitle }
}
</script>

<style lang="scss" scoped>
.LearnChecks {
  background-color: #232323;

  > .LearnChecksContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.LearnChecksContainer-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > ul {
    color: #fff;

    > li {
      display: flex;
      align-items: center;
      padding: 20px 0px;
      font-size: 25px;

      > span {
        font-size: 55px;
        margin-right: 20px;
      }
    }
  }
}
</style>
