import Vue from 'vue'

import { Button, Message, Form, Input, Checkbox} from 'ant-design-vue';
Vue.prototype.$message = Message
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);
/**
 * 配置 消息提示时间
 */
Message.config({
    duration: 1,
  });
export default Message

