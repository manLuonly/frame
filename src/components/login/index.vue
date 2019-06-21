<!-- 登录 -->
<template>
  <div class="home_Login">
    <div class="backgound"></div>
    <div class="login" v-if="isLog" key="login">
      <div class="login-header">
        <h2>WELCOME</h2>
      </div>
      <form method="post">
        <div class="login-input-box inputBox">
          <span class="icon icon-user"></span>
          <input type="text" placeholder="账号" v-model="loginFrom.userName" class="inputFocus">
          <hr class="inputHr">
        </div>
        <div class="login-input-box inputBox">
          <span class="icon icon-password"></span>
          <input type="password" placeholder="密码" v-model="loginFrom.passWord" class="inputFocus">
          <hr class="inputHr">
        </div>
      </form>
      <div class="login-button-box">
        <button @click="login" class="ripple">登录</button>
      </div>
      <div class="toForgetPassword">
        <span class="forgetPassword ripple" @click="changePass(false)">忘记密码？</span>
      </div>
    </div>

    <div class="login toForgetPwd" v-else key="change">
      <div class="login-header">
        <h2>修改密码</h2>
      </div>
      <el-form ref="form" label-width="100px" :rules="rules">
        <form method="post">
          <div class="login-input-box inputBox">
            <span class="icon icon-user"></span>
            <input type="text" placeholder="请输入账号" v-model="form.userName" class="inputFocus">
            <hr class="inputHr">
          </div>
          <div class="login-input-box inputBox">
            <span class="icon icon-password"></span>
            <input type="password" placeholder="请输入新密码" v-model="form.newPassWord" class="inputFocus">
            <hr class="inputHr">
          </div>
          <div class="login-input-box inputBox">
            <span class="icon icon-password"></span>
            <input type="password" placeholder="请再输入一次" v-model="form.againNewPwd" class="inputFocus">
            <hr class="inputHr">
          </div>
          <div class="login-input-box verificationCode">
            <span class="subTitle">验证码：</span>
            <el-input type="text" style="width:50%;" v-model="form.code" clearable maxlength="6"></el-input>
            <el-button
              :disabled="isCodeBtn"
              @click="sendCode"
              size="small"
              class="codeBtn"
              plain
            >{{codeText}}</el-button>
          </div>
        </form>
      </el-form>
      <div class="login-button-box">
        <button @click="changePwd" class="ripple">确定</button>
      </div>
      <div class="back">
        <span class="goBack ripple" @click="changePass(true)">返回登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    var validatePass = (rule, value, callback) => {
      console.log(value);
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.againNewPwd !== "") {
          this.$refs.form.validateField("againNewPwd");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      console.log(value);
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.newPassWord) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      //登录
      loginFrom: {
        userName: "", // 用户名
        passWord: "" // 密码
      },
      //修改密码
      form: {
        userName: "", // 用户名
        passWord: "", // 密码
        newPassWord: "", // 新密码
        againNewPwd: "", // 再输一次
        code: "" // 输入的验证码
      },
      isLog: true, // 控制切换页面
      isCodeBtn: false, // 能否发送验证码的状态
      codeText: "发送验证码",
      rules: {
        newPassWord: [{ validator: validatePass, trigger: "blur" }],
        againNewPwd: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    changePass(showLog) {
      this.isLog = showLog;
      //清空数据
    },
    async login() {
      // try {
        // let res = await AV.User.logIn(this.loginFrom.userName, this.loginFrom.passWord);
        // localStorage.setItem("uid", res.id); // 存供应商的id
        this.$message({
          message: "登录成功！",
          type: "success"
        });
        // this.$router.push({
        //   path: "/Home/myRecharge"
        // });
      // } catch (err) {
      //   console.log(err.code);
      //   switch (err.code) {
      //     case 210:
      //       this.$message.error("密码错误，请确认密码!");
      //       return;
      //     case 211:
      //       this.$message.error("用户名不存在!");
      //       return;
      //     case 219:
      //       this.$message.error("登录失败次数过多!");
      //       return;
      //     default:
      //       this.$message.error("未知错误，登陆失败!请重试");
      //       return;
      //   }
      // }
    },
    async changePwd() {
      try {
        if (
          this.form.userName == "" ||
          this.form.newPassWord == "" ||
          this.form.againNewPwd == ""
        ) {
          this.$message.error("用户名或密码为空，请填写完整!");
          return;
        } else {
          // await AV.User.resetPasswordBySmsCode(
          //   this.form.code, // 验证码
          //   this.form.newPassWord // 新密码
          // );
          // localStorage.removeItem("uid");
          this.$message.success("更改密码成功，返回登录页面！");
          this.isLog = true;
        }
        this.form.code = "";
        this.form.userName = "";
        this.form.newPassWord = "";
        this.form.againNewPwd = "";
        this.codeText = "发送验证码";
      } catch (err) {
        console.log(err.code);
        switch (err.code) {
          case -1:
            this.$message.error("请输入验证码!");
            return;
          case 603:
            this.$message.error("请输入正确的验证码!");
            return;
          default:
            this.$message.error("未知错误!请重试");
            return;
        }
      }
    },
    async sendCode() {
      try {
        // 需要去验证mobilePhoneVerified字段是否为true，true代表手机号码已经验证过
        // await AV.User.requestPasswordResetBySmsCode(this.form.userName);
        this.isCodeBtn = true;
        this.codeText = 60 + "秒";
        console.log("验证码发送成功！");
      } catch (err) {
        // console.log(err);
        // console.log(err.code)
        switch (err.code) {
          case 212:
            this.$message.error("请输入账号!");
            break;
          case 213:
            this.$message.error("请输入正确的账号!");
            break;
          case 601:
            this.$message.error("一小时内不能发送三次!");
            break;
          default:
            this.$message.error("未知错误!请重试");
            break;
        }
        return;
      }
      this.timer = setInterval(() => {
        if (parseInt(this.codeText) <= 0) {
          this.codeText = "重新发送";
          this.isCodeBtn = false;
          console.log("倒计时结束");
          clearInterval(this.timer);
        } else {
          this.codeText = parseInt(this.codeText) - 1 + "秒";
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.home_Login {
  .backgound {
    width: 100%;
    height: 100%;
    position: absolute;
    // background: url("../../assets/img/back.jpg") no-repeat;
    background-size: 100%;
    z-index: -10;
  }
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
}
</style>