<!-- 登录 -->
<template>
  <a-form :form="form" 
    @submit.prevent="handleSubmit"
    >
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="用户名"
    >
      <a-input
        v-decorator="[
          'username',
          {initialValue:formData.user},   
          {rules: [{ required: true, message: '请输入你的名字' }]}
        ]"
        placeholder="请输入你的名字"
      />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="密码"
    >
      <a-input
        v-decorator="[
          'nickname',
           {initialValue:formData.psd},   
          {rules: [{ required: true, message: '请输入你的密码' }]}
        ]"
        placeholder="请输入你的密码"
      />
    </a-form-item>
  
    <a-form-item
      :label-col="formTailLayout.labelCol"
      :wrapper-col="formTailLayout.wrapperCol"
    >
      <a-button
        type="primary"
        html-type="submit"
        :loading="buttonIsLoading"
      >
        登陆
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { login } from "./service.js";
import data from "./store.js";
import methods from "./action.js";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default {
  data () {
    return {
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this),
      formData:{
        user:'admin',
        psd:'123456',
      },
      buttonIsLoading:false
    };
  },
  created() {
       window.addEventListener('keyup',this.handleKeyup)
  },
  methods: {
     // 键盘事件
    handleKeyup(event){
        const e = event || window.event || arguments.callee.caller.arguments[0]
        if(!e) return
        if (e.keyCode == '13') this.handleSubmit()
    },

    /**
     * 提交
     */
     handleSubmit  (e) {
      if(this.buttonIsLoading) return
      this.buttonIsLoading = true
       this.form.validateFields(
        async (err) => {
          if (!err) {
            let loginResponse = await login(this.formData);
            setTimeout(()=>{
              this.buttonIsLoading = false
            },2000)
          }
        },
      );
    },
    
  },
  destroyed () {
    window.removeEventListener('keyup',this.handleKeyup)
},

};
</script>

<style lang="scss" scoped>

</style>

