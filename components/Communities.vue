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
        <a
          target="_blank"
          href="https://www.facebook.com/groups/534575580022737/">
          <img
            :style="{
              width: '130px'
            }"
            src="../assets/nerdgirlz.jpg"
            alt="nerdgirlz">
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.meetup.com/pt-BR/THT-Things-Hacker-Team/">
          <img
            src="../assets/tht.png"
            alt="tht">
        </a>
        <a
          target="_blank"
          href="https://criciumadev.com.br/">
          <img
            :style="{
              width: '180px'
            }"
            src="../assets/criciuma.svg"
            alt="criciuma">
        </a>
        <a
          target="_blank"
          href="https://workweb.congressodeti.com.br/">
          <img
            :style="{
              width: '180px'
            }"
            src="../assets/congresso-ti.png"
            alt="Congresso de TI">
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.meetup.com/pt-BR/Coders-in-Rio/">
          <img
            src="../assets/coders-in-rio.png"
            alt="coders in rio">
        </a>
        
        <a
          target="_blank"
          href="https://www.facebook.com/thememecode/">
          <img
            src="../assets/memecode.png"
            alt="memecode">
        </a>
        <a
          target="_blank"
          href="https://www.meetup.com/pt-BR/graphdb-sp/">
          <img
            src="../assets/graph-databases-sp.jpeg"
            alt="graph databases sp">
        </a>
        <a
          target="_blank"
          href="https://www.meetup.com/pt-BR/nosqlsp">
          <img
            src="../assets/no-sql-sp.jpeg"
            alt="nosql sp">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import StyledTitle from './Title';
export default {
  name: 'Commuties',
  components: { StyledTitle },
};
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
        display: flex;
        justify-content: center;
        align-items: center;

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
