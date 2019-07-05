let md5 = require ('js-md5')
module.exports = (() => {
    /**
     * 简化 将md5方法挂在window上
     */
    window._md5 = md5


    // window.PB = {

    //     /**
    //      * @method message 弹出消息
    //      * @param  this Vue实例  showClose 可以添加关闭按钮 message 消息文字
    //      * @return  null
    //      */
    //     message(that, showClose, message) {
    //         that.$message({
    //             showClose,
    //             message
    //         })
    //     }
    // }
})();