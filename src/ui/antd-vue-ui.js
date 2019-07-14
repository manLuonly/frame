import Vue from 'vue'

import { Button, Message, Form, Input, Checkbox, Spin, Col, Row, Icon} from 'ant-design-vue';
Vue.prototype.$message = Message
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Spin);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
/**
 * 配置 消息提示时间
 */
Message.config({
    duration: 1,
  });
export default Message

