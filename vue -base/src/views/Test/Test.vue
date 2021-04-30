<template>
    <div>
        <el-button @click="msgTest">测试点击消息</el-button>
        <el-button @click="msgTest2">测试点击消息2</el-button>
        <el-button @click="testGet">测试GET</el-button>
        <el-button @click="testPost">测试POST</el-button>
    </div>
</template>

<script>
    export default {
        name: "test",
        methods :{
            msgTest(){
                let that = this;
                this.msg.info("测试消息",function () {
                    that.msg.success(1111)
                },function () {
                    that.msg.error(2222)
                })
            },
            msgTest2(){
                let that = this;
                this.msg.info("测试消息",function () {
                    that.msg.success(1111)
                })
            },
            testGet(){
                this.api.testGet().then(function (res) {
                    console.log(res)
                });

            },
            testPost(){
                console.log(process.env.NODE_ENV)
                let param = {
                    "a":1,
                    "b":2
                }
                this.api.testPost(param).then(function (res) {
                    console.log(res)
                });
            }
        }

    }
</script>

<style scoped>

</style>