<template>
    <div class="wait_page">
        <a-spin :size="spinOp.size"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            spinOp:{
                size:'large'
            }
        }
    },
}
</script>

<style lang="less" scoped>
.wait_page {
    text-align: center;
    background: rgba(0,0,0,0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
  }
</style>

