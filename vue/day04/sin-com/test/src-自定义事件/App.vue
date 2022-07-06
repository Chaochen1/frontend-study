<template>

<!-- 
  $on和$once 绑定事件
  $emit触发事件
  $off接触绑定事件

 -->

  <div id="app">
      <!-- 父组件获取子组件信息 -->
      <!-- 1 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <h1>学校姓名是:{{schoolName}}</h1>
      <SchoolInfo :getSchoolName="getSchoolName"/>
      <!-- 2 通过父组件给子组件绑定一个自定义实现实现（第一种写法，使用@或v-on） -->
      <h1>学生姓名是:{{studentName}}</h1>
      <!-- <StudentInfo @atguigu="getStudentName"/> -->
      <!-- 3 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
      <StudentInfo ref="student"/>
  </div>
</template>

<script>
    import SchoolInfo from './components/SchoolInfo.vue'
    import StudentInfo from './components/StudentInfo.vue'

    export default {
      name: 'App',
      data() {
        return {
          schoolName:'',
          studentName:''
        }
      },
      components: {
        SchoolInfo, StudentInfo
      },
      methods:{
        getSchoolName(name) {
            console.log('app 收到了school name:' + name);
            this.schoolName = name
        },
        getStudentName(name) {
            console.log('app 收到了student name:' + name);
            this.studentName = name
        }
      },
      mounted() {
        //  $on用于绑定事件，放在mounted中可以用于设置定时或者延迟任务
        // this.$refs.student.$on('atguigu', this.getStudentName)
        // $once表示事件只生效一次
        this.$refs.student.$once('atguigu', this.getStudentName)
      },
    }
</script>
