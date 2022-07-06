<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddr}}</h2>
        <button @click="showName">显示名称</button>
    </div>
</template>


<script>
    import {hunhe} from '../mixin'

    export default {
    name: "SchoolInfo",
    data() {
        return {
            name:this.schoolName
        }
    },
    props:['schoolName', 'schoolAddr'],
    mixins:[hunhe]
}
</script>


<style>

    .demo{
        background-color: skyblue;
    }

</style>