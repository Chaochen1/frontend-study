<template>
  <div id="app">
      <CountN/>
  </div>
</template>

<!-- 

  vuex 全局状态管理，多个组件共享数据

  安装 
  vue2 对应 vuex 3  
  npm -i vuex@3

 -->

<script>
import CountN from './components/CountN.vue';


    export default {
      name: 'App',
      components: {
        CountN
      },
      methods:{
      },
    }
</script>
