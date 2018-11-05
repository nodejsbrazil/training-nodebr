<template>
  <section class="section Author">
    <div class="container AuthorContainer">
      <StyledTitle
        color="#fff"
        margin="0px 0px 60px 0px">
        Sobre o instrutor
      </StyledTitle>
      <h3>Erick Wendel</h3>
      <p>Pós graduando em Business Intelligence with Big Data. Microsoft Most Valuable Professional (MVP). Community Manager nas comunidades NodeBR, Javascript São Paulo, Nerdzão e Nerdgirlz. Socio/CTO na EW.IT, Microsoft Certified Professional, Microsoft Specialist. Possui amplo conhecimento em desenvolvimento de software, experiência em arquitetura, desenvolvimento e segurança de aplicações. Palestrante nas maiores conferências de Javascript, Node.js e segurança da América latina.</p>
      <div>
        <a
          target="_blank"
          href="https://twitter.com/erickwendel_"
          class="icon icon--twitter" />
        <a
          target="_blank"
          href="https://github.com/erickwendel"
          class="icon icon--github" />
        <a
          target="_blank"
          href="https://www.linkedin.com/in/erickwendel"
          class="icon icon--linkedin" />
      </div>
    </div>
  </section>
</template>

<script>
import StyledTitle from './Title'

export default {
  name: 'Author',
  components: { StyledTitle }
}
</script>

<style lang="scss" scoped>
$authorHeight: 600px;
.Author {
  background-image: url(../assets/author.jpg);
  height: $authorHeight;
  background-size: cover;
  background-position: bottom;
  position: relative;
  @media screen and (max-width: 700px) {
    background-position: left;
  }
  @media screen and (max-width: 510px) {
    height: 800px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: $authorHeight;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 510px) {
      height: 800px;
    }
  }

  > .AuthorContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h3 {
      color: #fff;
      font-weight: 700;
      font-size: 40px;
      align-self: center;
      width: 600px;

      @media screen and (max-width: 700px) {
        width: 100%;
      }
    }

    > p {
      color: #fff;
      font-size: 20px;
      max-width: 600px;
      @media screen and (max-width: 700px) {
        width: 100%;
      }
    }

    > div {
      margin-top: 20px;
      width: 600px;
      @media screen and (max-width: 700px) {
        width: 100%;
      }
    }
  }
}
</style>
