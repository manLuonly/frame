<template>
    <div class="home">
       首页
    </div>
</template>

<script>
export default {
    created() {
        Message({
          showClose: true,
          message: '这是一条消息提示'
        });
        // PB.message(this, true, 'test')
        // Message({
        //   showClose: true,
        //   message: '这是一条消息提示'
        // })
    }
}
</script>

<style lang="scss" scoped>
 .home {
      width: 100%;
      height: 100%;
      background: url('../../../static/images/123.jpg');
      background-size: cover;
 }
</style>

