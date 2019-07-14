<template>
  <div id="app">
     
     <router-view :key="$route.fullpath"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "./style/base.scss";
#app {
}
</style>
