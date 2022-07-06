<template>

<!-- 
  $on和$once 绑定事件
  $emit触发事件
  $off接触绑定事件

 -->

  <div id="app">
      <SchoolInfo/>
      <StudentInfo/>
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
      methods:{
      },
    }
</script>
