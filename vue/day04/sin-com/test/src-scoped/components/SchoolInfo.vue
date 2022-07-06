<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddr}}</h2>
    </div>
</template>


<script>

    export default {
    name: "SchoolInfo",
    props:['schoolName', 'schoolAddr'],
}
</script>


<style scoped>

    .demo{
        background-color: skyblue;
    }

</style>