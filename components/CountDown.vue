<template>
  <div class="CountDown">
    <p>
      <span class="CountDown-pre">
        <i>faltam</i>
      </span>
      <VueCountdown :time="2163195621">
        <template slot-scope="props">
          <strong>{{ props.days }} dias {{ props.hours }} horas {{ props.minutes }} minutos {{ props.seconds }} segundos</strong>
        </template>
      </VueCountdown>
      <span class="CountDown-after">
        <i>para o lançamento!</i>
      </span>
    </p>
  </div>
</template>

<script>
import VueCountdown from '@xkeshi/vue-countdown'

export default {
  name: 'CountDown',
  components: { VueCountdown }
}
</script>

<style lang="scss" scoped>
.CountDown {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 80px;
  background-color: #eee;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lobster Two', cursive;
  text-align: center;
  
  i {
    font-size: 20px;
    color: #999;
  }

  p strong {
    font-size: 25px;
    color: #888;
    position: relative;
  }
}

.CountDown-pre {
  position: absolute;
  font-size: 20px;
  top: 0px;
  left: 46%;
  color: #999;
}
.CountDown-after {
  position: absolute;
  font-size: 20px;
  bottom: 0px;
  left: 41.5%;
  color: #999;
}
</style>
