<template>
    <div class="demo">
        <h2>学生姓名:{{studentName}}</h2>
        <h2>学生地址：{{studentAddr}}</h2>
        <h2>学校名称：{{schoolName}}</h2>
        <button @click="sendStudentName">把学生名称给school</button>
    </div>
</template>


<script>

    export default {
        name: "StudentInfo",
        data() {
            return {
                studentName:'cc',
                studentAddr:'nanjing',
                schoolName:''
            }
        },
        methods:{
            sendStudentName() {
                this.$bus.$emit('haha', this.studentName)
            }
        },
        mounted() {
            // 真实dom生成之后绑定事件 等待触发
            this.$bus.$on('hello', (data)=>{
                console.log('我是Student组件,收到了数据',data)
                this.schoolName = data
            })
        },
        beforeDestroy() {
                // 销毁前接触事件绑定
                this.$bus.$off('hello')
        }
    
}
</script>


<style scoped>

    .demo{
        background-color: skyblue;
    }

</style>