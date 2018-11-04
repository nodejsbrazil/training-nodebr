<template>
  <b-collapse
    :style="{ margin: margin }"
    :open="isOpen"
    @open="isOpen = true"
    @close="isOpen = false">
    <div
      slot="trigger"
      class="CollapseHeader">
      <h3 class="CollapseHeader-title">
        <span>{{ labelText }}</span> 
        {{ title }}
      </h3>
      <button class="CollapseHeader-button">{{ isOpen ? '-' : '+' }}</button>
    </div>
    <div class="notification">
      <div class="content">
        <ul class="Collapse-list">
          <li
            v-for="(item, index) in items"
            :key="index">
            <span> ✔ </span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    margin: { type: String, default: '0px' },
    labelText: { type: String, default: 'Label text \o/' },
    title: { type: String, default: 'I\'m title!' },
    items: { type: Array, default: () => (['Item here right now']) }
  },
  data: () => ({
    isOpen: false
  })
}
</script>

<style lang="scss" scoped>
.CollapseHeader {
  padding: 10px;
  background-color: #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 4px;

  &-title {
    color: #fff;
    font-weight: 700;
    font-size: 18px;

    > span {
      font-size: 20px;
      left: -30px;
      top: -10px;
      color: #fff;
      background-color: #06EF07;
      padding: 5px 10px;
      border-radius: 10px;
    }
  }

  &-button {
    border: none;
    background-color: transparent;
    font-size: 40px;
    color: #fff;
    outline: none;
  }
}

.Collapse-list {
  margin: 0px;
  list-style: none;
  font-size: 30px;

  > li {
    display: flex;
    align-items: center;
    font-size: 17px;

    > span {
      font-size: 20px;
      margin-right: 20px;
    }
  }
}
</style>
