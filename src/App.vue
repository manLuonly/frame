<template>
  <div id="app">
      <Login />
  </div>
</template>

<script>

import {tesyt} from '@/services/init.js'
export default {
  name: 'app',
  mounted() {
    this.testApi()
  },
  methods: {
    async testApi() {
      try {
        let res = await tesyt()
        console.log(res);
        
      }catch(err) {
        console.log(err);
        
      }
    }
  },
}
</script>

<style>
@import "./style/base.scss";
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
