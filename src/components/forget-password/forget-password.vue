<!-- 忘记密码 组件 -->
<template>
  <div class="login toForgetPwd" key="change">
    <div class="login-header">
      <h2>修改密码</h2>
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="back">
      <span class="goBack ripple" @click="changePass()">返回登录</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      //防止登录按钮未返回请求结果前多次点击 的控制data
      loginIsSuccess: false,
      //修改密码
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      //防止登录按钮未返回请求结果前多次点击 的控制data
      changeIsSuccess: false,
      isLog: true, // 控制切换页面
      isCodeBtn: false, // 能否发送验证码的状态
      codeText: "发送验证码",
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
        // age: [
        //   { validator: checkAge, trigger: 'blur' }
        // ]
      }
    };
  },
  methods: {
    changePass() {
      this.$emit('back-to-login-page')
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background-color: rgba(255, 255, 255, 0.95);
  width: 420px;
  height: 300px;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: block;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  .login-header {
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
    border-bottom: 1px solid #dcdcdc;
    h2 {
      text-align: center;
      display: block;
    }
  }

  .login-input-box {
    margin-top: 12px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    input {
      box-sizing: border-box;
      width: 100%;
      height: 32px;
      // margin-left: 18px;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      padding-left: 50px;
      outline: none;
      // &:hover {
      //   border: 1px solid rgb(47, 148, 244);
      // }
      // ::after {
      //   border: 1px solid rgb(47, 148, 244);
      // }
    }
    .icon {
      width: 24px;
      height: 24px;
      margin: 6px 4px 6px 24px;
      display: inline-block;
      position: absolute;
      border-right: 1px solid #dcdcdc;
    }
    .icon-user {
      // background: url("../../assets/img/user.png");
      background-size: 24px;
    }
    .icon-password {
      // background: url("../../assets/img/pwd.png");
      background-size: 24px;
    }
  }

  .login-button-box {
    margin-top: 12px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    button {
      background-color: rgb(47, 148, 244);
      color: #ffffff;
      font-size: 16px;
      // width: 386px;
      width: 100%;
      height: 40px;
      // margin-left: 18px;
      border: 1px solid rgb(47, 148, 244);
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .toForgetPassword {
    margin: 20px 0;
    .forgetPassword {
      margin: 20px 25px;
      cursor: pointer;
    }
  }
}
.toForgetPwd {
  box-sizing: content-box;
  height: 360px !important;
  .verificationCode {
    margin-left: 20px;
    .codeBtn {
      margin-left: 26px;
    }
  }
  .back {
    margin: 40px 0px;
    cursor: pointer;
  }
}
</style>

