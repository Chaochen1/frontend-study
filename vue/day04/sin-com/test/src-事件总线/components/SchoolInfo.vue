<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddr}}</h2>
        <h2>学生姓名:{{studentName}}</h2>
        <button @click="sendSchoolName">把学校名称给student</button>
    </div>
</template>


<script>

    export default {
        name: "SchoolInfo",
        props:['getSchoolName'],
        data() {
            return {
                schoolName:'hehai',
                schoolAddr:'nanjing',
                studentName:''
            }
        },
        methods:{
            sendSchoolName() {
                // hello为事件名称
                this.$bus.$emit('hello', this.schoolName)
            }
        },
        mounted() {
            this.$bus.$on('haha',(data)=> {
                this.studentName = data
            }

            )
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