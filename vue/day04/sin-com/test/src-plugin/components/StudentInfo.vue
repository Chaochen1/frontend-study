<template>
    <div class="demo">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生地址：{{addr}}</h2>
        <input type="text" v-fbind:value="name">
    </div>
</template>


<script>

    export default {
    name: "StudentInfo",
    props:['name', 'addr']
}
</script>


<style>

    .demo{
        background-color: skyblue;
    }

</style>