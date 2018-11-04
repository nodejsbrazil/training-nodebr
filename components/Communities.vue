<template>
  <section class="section Communities">
    <div class="container CommunitiesContainer">
      <StyledTitle margin="0px 0px 60px 0px">Comunidades Parceiras</StyledTitle>
      <div>
        <a
          target="_blank"
          href="https://www.meetup.com/pt-BR/nodebr/">
          <img
            src="../assets/nodebr.jpg"
            alt="nodebr">
        </a>
        <a
          target="_blank"
          href="https://www.meetup.com/pt-BR/Javascript-SP/">
          <img
            src="../assets/jssp.jpeg"
            alt="jssp">
        </a>
        <a
          target="_blank"
          href="https://www.meetup.com/pt-BR/Nerdzao/">
          <img
            src="../assets/nerdzao.jpeg"
            alt="nerdzao">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import StyledTitle from './Title'
export default {
  name: 'Commuties',
  components: { StyledTitle }
}
</script>

<style lang="scss" scoped>
.Communities {

  > .CommunitiesContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      @media screen and (max-width: 700px) {
        flex-direction: column;
      }

      > a {
        @media screen and (max-width: 700px) {
          margin-top: 20px;
        }
        > img {
          display: inline-block;
          vertical-align: middle;
          max-width: 90%;
          width: 100px;
          height: auto;
          margin: 0 12px 20px 12px;
        }
      }
    }
  }
}
</style>
