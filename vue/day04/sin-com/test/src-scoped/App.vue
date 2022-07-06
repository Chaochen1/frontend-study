<template>

<!-- 

在vue文件中的 style 标签上，有一个特殊的属性：scoped。
当一个 style 标签拥有 scoped 属性时，它的 CSS 样式就只能作用于当前的组件，也就是说，
该样式只能适用于当前组件元素。通过该属性，可以使得组件之间的样式不互相污染。
如果一个项目中的所有 style 标签全部加上了scoped，相当于实现了样式的模块化。


 -->
 <!-- class使用了组件的样式demo，若组件中样式不用scoped，则app中就会使用组件的样式demo -->
  <div id="app" class="demo">
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
