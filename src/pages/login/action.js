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
      if (!err) {
        this.buttonIsLoading = true;
        /**
         *   await的函数出错时自动调用 catch回调函数，调用这个才不会阻塞下面进程
         */
        let loginResponse = await login(form.getFieldsValue()).catch((err)=>{
          console.log(err);
          
        })
        console.log(111);
        
        this.buttonIsLoading = false;

        if (loginResponse.status === 0) {
          window.location.href = "/waiting.html";
        }else {
          _message().error("别登陆，来打游戏");
        }
        
      }
    });
  }
}