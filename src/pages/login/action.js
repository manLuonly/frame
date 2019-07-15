/**
 * methods 事件管理
 */
import { login } from "./service.js";

export default {
 // 键盘事件
 handleKeyup(event) {
    const e = event || window.event || arguments.callee.caller.arguments[0];
    if (!e) return;
    if (e.keyCode == "13") this._handleSubmit();
  },

  /**
   * 提交
   */
  handleSubmit(e) {
    let { form } = this;
    
    form.validateFields(async err => {
      this.buttonIsLoading = true;
      if (!err) {
        let loginResponse = await login(form.getFieldsValue());
        if (loginResponse.status === 0) {
          // this.$router.replace({path: '/wait'})
          window.location.href = "/waiting.html";
        } else {
          _message().error("别登陆，来打游戏");
        }
        this.buttonIsLoading = false;
      } else {
        this.buttonIsLoading = false;
      }
    });
  }
}