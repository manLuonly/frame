<!-- 登录 -->
<template>
    <userLayout>

      <div class="main">
        <a-form :form="form" @submit.prevent="handleSubmit" class="user-layout-login">
          <a-form-item
          >
            <a-input
              placeholder="账户: admin"
              v-decorator="[
                'user',
                {rules: [{ required: true, message: '请输入你的账户名' }]}
            ]"
            >
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>
          <a-form-item
          >
            <a-input
              placeholder="密码"
              v-decorator="[
              'psd',
              {rules: [{ required: true, message: '请输入你的密码' }]}
          ]"
            >
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-form-item >
            <a-row>
              <a-col :span="14">
                <a-input
                  placeholder="验证码"
                  v-decorator="[
              'code',
              {rules: [{ required: true, message: '请输入你的验证码' }]}
            ]"
                >
                  <a-icon slot="prefix" type="code" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
              </a-col>
              <a-col :span="8" :offset="1">
                <img :src="codeFn" alt class="img-fit-100 code-img" />
              </a-col>
            </a-row>
          </a-form-item>

          <a-form-item >
            <a-button type="primary" size="large" html-type="submit" :loading="buttonIsLoading" class="login-button">登陆</a-button>
          </a-form-item>
        </a-form>
      </div>
      
    </userLayout>
</template>

<script>
import { login } from "./service.js";
import data from "./store.js";
import methods from "./action.js";
// 包含头部和尾部的 布局组件
import userLayout from '@/components/userLayout.vue'
export default {
  components:{
      userLayout
  },
  data() {
    return {
      formData: {
        user: "admin",
        psd: "123456",
        code: "1"
      },
      buttonIsLoading: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  created() {
    window.addEventListener("keyup", this.handleKeyup);
  },
  computed: {
    codeFn() {
      return `http://120.79.160.28/image/checkcode?${Date.now()}`;
    }
  },
  methods: {
    // 键盘事件
    handleKeyup(event) {
      const e = event || window.event || arguments.callee.caller.arguments[0];
      if (!e) return;
      if (e.keyCode == "13") this.handleSubmit();
    },

    /**
     * 提交
     */
    handleSubmit(e) {
      let { buttonIsLoading, form } = this;

      if (buttonIsLoading) return;
      buttonIsLoading = true;

      form.validateFields(async err => {
        if (!err) {
          let loginResponse = await login(form.getFieldsValue());
          if (loginResponse.status === 0) {
            // this.$router.replace({path: '/wait'})
            window.location.href = "/waiting.html";
          } else {
            _message().error("别登陆，来打游戏");
          }
          buttonIsLoading = false;
        } else {
          buttonIsLoading = false;
        }
      });
    }
  },
  destroyed() {
    window.removeEventListener("keyup", this.handleKeyup);
  }
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 110px 0 144px;
  background: #f0f2f5 url(../../assets/img/background.svg) no-repeat 50%;
  background-size: 100%;
  .main {
    .user-layout-login {
      min-width: 260px;
      width: 368px;
      margin: 0 auto;

      .code-img {
        margin-top: 3px;
      }
      button.login-button {
        padding: 0 15px;
        font-size: 16px;
        height: 40px;
        width: 100%;
      }
    }
  }
}
</style>

