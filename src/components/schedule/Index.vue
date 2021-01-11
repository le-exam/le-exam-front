<template>
  <div>
    <v-nav></v-nav>
  </div>
</template>

<style scoped>
.y {
  position: relative;
  left: 630px;
}
#b {
  position: relative;
  left: 600px;
}
</style>

<script>
import nav from '@/components/nav'
export default {
  components: {
    'v-nav': nav
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
