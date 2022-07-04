<template>
    <div class="dd">
        <h2>学生姓名：{{stu.name}}</h2>
        <h2>学生年龄：{{stu.age}}</h2>
    </div>
</template>



<script>

export default{
    name:'StudentInfo',
    data() {
        return {
            stu:{
                name:'cc',
                age:28
            }
        }
    },
}
</script>


<style>
    .dd{
        background-color: red;
    }

</style>