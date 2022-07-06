<template>

<!-- 

ref
1. 作用：用于给节点打标识 可以获取标签信息
2. 读取方式：this.$refs.xxxxxx

 -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" ref="pic">
    <SchoolInfo ref="sch"></SchoolInfo>
    <button ref="bt" @click="showDm">点我输出上方的dom元素</button>
  </div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo.vue'

export default {
  name: 'App',
  components: {
     SchoolInfo
  },
  methods:{
    showDm() {
      console.log(this.$refs.pic);
      console.log(this.$refs.bt);
      console.log(this.$refs.sch);
    }
  }
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
