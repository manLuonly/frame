module.exports = (() => {
    /**
     * 简化 console.log() -> log()
     */
    window.log = console.log.bind(console)


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