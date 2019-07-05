<template>
  <div class="home">
    <a-button type="primary">首页</a-button>
    <a-button type="dashed" @click="goNotFoundPageAction">404页面</a-button>
  </div>
</template>

<script>
import { login } from "@/api";

export default {
  async created() {
    let loginResponse = await login({});
    console.log(loginResponse);
    /**
     * md5试例
     */
    const usename = _md5("lijiacheng");
    const pwd = _md5("123456");
    console.log(usename, pwd);
  },
  methods: {
    goNotFoundPageAction() {
      this.$router.push({
        path: "/404"
      });
    }
  }
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

