<template>
    <div class="demo">
        <h2>学生姓名:{{studentName}}</h2>
        <h2>学生地址：{{studentAddr}}</h2>
        <button @click="sendStudentName">把学生名称给app</button>
        <button @click="unbind">解绑事件</button>
        <button @click="death">销毁事件</button>
    </div>
</template>


<script>

    export default {
    name: "StudentInfo",
    data() {
        return {
            studentName:'cc',
            studentAddr:'nanjing'
        }
    },
    methods:{
        sendStudentName() {
            // 触发athuigu事件，将学生姓名返回
            this.$emit('atguigu', this.studentName)
        },
        unbind() {
            this.$off('atguigu')
            // this.$off(['atguigu','demo']) //解绑多个自定义事件
			// this.$off() //解绑所有的自定义事件
        },
        death() {
            this.$destroy()
        }
    }
}
</script>


<style scoped>

    .demo{
        background-color: skyblue;
    }

</style>