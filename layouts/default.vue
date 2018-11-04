<template>
  <div class="App">
    <nuxt />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
html,
body
  width: 100%
  height: 100%

.App
  width: 100%
  height: 100%

.icon
  cursor: pointer
  margin: 5px
  display: inline-block
  vertical-align: middle
  background-repeat: no-repeat

.icon--twitter
  background-image: url('~assets/twitter.svg')
  background-size: 24px 19px
  width: 24px
  height: 19px

.icon--github
  background-image: url('~assets/github.svg')
  background-size: 22px
  width: 22px
  height: 22px

.icon--linkedin
  background-image: url('~assets/linkedin.svg')
  background-size: 22px
  width: 22px
  height: 22px
  padding-left: 15px

.icon--medium
  background-image: url('~assets/medium.png')
  background-size: 22px
  width: 22px
  height: 22px
  margin-left: 15px
</style>

