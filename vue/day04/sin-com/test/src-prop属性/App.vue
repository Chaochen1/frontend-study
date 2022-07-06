<template>

<!-- 

1. 作用：用于父组件给子组件传递数据
2. 读取方式一: 只指定名称
props: ['name', 'age', 'setName']
3. 读取方式二: 指定名称和类型
props: {
name: String,
age: Number,
setNmae: Function
}
4. 读取方式三: 指定名称/类型/必要性/默认值
props: {
name: {type: String, required: true, default:xxx},
}

 -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 整数前面加冒号，转换成表达式 -->
    <SchoolInfo schoolName="hehai" schoolAddr="nanjing" :schoolAge="18"></SchoolInfo>
  </div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo.vue'

export default {
  name: 'App',
  components: {
     SchoolInfo
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
