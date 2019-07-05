import Vue from 'vue'

import { Button, Message } from 'ant-design-vue';
Vue.prototype.$message = Message
Vue.use(Button);
/**
 * 配置 消息提示时间
 */
Message.config({
    duration: 1,
  });
export default Message

