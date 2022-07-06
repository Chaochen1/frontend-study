<template>
    <div class="demo">
        <h2>学生姓名{{name}}</h2>
        <h2>学生地址：{{addr}}</h2>
        <h2>x{{x}}</h2>
        <h2>y{{y}}</h2>
        <button @click="showName">显示名称</button>
    </div>
</template>


<script>
    import {hunhe, hunhe2} from '../mixin'

    export default {
    name: "StudentInfo",
    props:['name', 'addr'],
    mixins:[hunhe, hunhe2]
}
</script>


<style>

    .demo{
        background-color: skyblue;
    }

</style>