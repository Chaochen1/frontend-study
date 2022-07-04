<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddr}}</h2>
        <StudentInfo></StudentInfo>
    </div>
</template>


<script>
    import StudentInfo from './StudentInfo.vue'
    export default {
    name: "SchoolInfo",
    data() {
        return {
            schoolName: "hehai",
            schoolAddr: "nanjing"
        };
    },
    comments: {
        StudentInfo
    },
    components: { StudentInfo }
}
</script>


<style>

    .demo{
        background-color: skyblue;
    }

</style>