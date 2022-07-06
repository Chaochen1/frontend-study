<template>
    <div class="demo">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生地址：{{addr}}</h2>
    </div>
</template>


<script>

    export default {
    name: "StudentInfo",
    props:['name', 'addr']
}
</script>


<style scoped>

    .demo{
        background-color: skyblue;
    }

</style>