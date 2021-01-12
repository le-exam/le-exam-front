<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) in con" :key="index" @click="say($event)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      con: ['a', 'b']
    }
  },
  methods: {
    say: function (event) {
      // 获取点击对象
      var el = event.currentTarget
      alert('当前对象的内容：' + el.innerHTML)
    }
  }
}
</script>
