<template>
    <div class="home">
       首页
    </div>
</template>

<script>
import {tesyt} from '@/services/init.js'
export default {
    created() {
       tesyt()
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

