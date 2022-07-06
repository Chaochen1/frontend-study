<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddr}}</h2>
        <button @click="sendSchoolName">把学校名称给app</button>
    </div>
</template>


<script>

    export default {
        name: "SchoolInfo",
        props:['getSchoolName'],
        data() {
            return {
                schoolName:'hehai',
                schoolAddr:'nanjing'
            }
        },
        methods:{
            sendSchoolName() {
                console.log(this);
                this.getSchoolName(this.schoolName)
            }
        }
}
</script>


<style scoped>

    .demo{
        background-color: skyblue;
    }

</style>