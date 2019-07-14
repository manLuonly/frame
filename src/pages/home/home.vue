<template>
  <div class="home">
    <a-button type="primary">首页</a-button>
    <a-button type="dashed" @click="$router.push({ path: '/404' })">404页面</a-button>

    <div>{{msg}}</div>
  </div>
</template>

<script>
import { login } from "./service.js";
import data from "./store.js";
import methods from "./action.js";

export default {
  data() {
    return data;
  },
  async created() {
    let loginResponse = await login(
      JSON.stringify({
        user: "admin",
        psd: "123456"
      })
    );
    console.log(loginResponse);
    /**
     * md5试例
     */
    const usename = _md5("lijiacheng");
    const pwd = _md5("123456");
    console.log(usename, pwd);
  },
  methods
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url("../../../static/images/123.jpg");
  background-size: cover;
}
</style>

