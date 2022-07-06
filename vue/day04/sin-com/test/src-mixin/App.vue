<template>

<!-- 

3.3 混入
1. Vue 插件是一个包含install 方法的对象
2. 通过install 方法给Vue 或Vue 实例添加方法, 定义全局指令等

 -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SchoolInfo schoolName="hehai" schoolAddr="nanjing"></SchoolInfo>
    <StudentInfo name="ccc" addr="nanjing"></StudentInfo>
  </div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo.vue'
import StudentInfo from './components/StudentInfo.vue'

export default {
  name: 'App',
  components: {
     SchoolInfo, StudentInfo
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
