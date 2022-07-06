<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddr}}</h2>
        <h2>学校年龄：{{age+1}}</h2>
        <!-- props属性不能修改 如果要修改需要重新赋值给另外一个新属性 -->
        <button @click="updateAge">点我年龄加1</button>
    </div>
</template>


<script>
    export default {
    name: "SchoolInfo",
    data() {
        return {
            age:this.schoolAge
        }
    },
    methods:{
        updateAge(){
            this.age++
        }
    },
    // 简单声明接收 常用
    // props:['schoolName', 'schoolAddr', 'schoolAge']

    // 声明数据类型
    // props:{
    //     schoolName:String,
    //     schoolAddr:String,
    //     schoolAge:Number
    // }

    // 类型限制 默认值限制 必要性限制
    props:{
        schoolName:{
            type:String,
            // 属性值必传 不传报错 Missing required prop: "schoolName"
            required:true,
        },
        schoolAddr:{
            type:String,
        },
        schoolAge:{
            type:Number,
            // 如果age不传 默认为99
            default:99
        }

    }
}
</script>


<style>

    .demo{
        background-color: skyblue;
    }

</style>