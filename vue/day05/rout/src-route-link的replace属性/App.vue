<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
					<!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

					<!-- Vue中借助router-link标签实现路由的切换 -->
          <!-- active-class激活样式  -->
          <!-- to 跳转到到指定页面，根据路由规则进行跳转到指定组件 -->
					<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <br>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
						<!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- 
控制路由跳转时操作浏览器历史记录的模式
 
浏览器的历史记录有两种方式，分别为push和replace，push是追加历史记录，raplace是替换当前历史记录。路由跳转的默认方是push。

浏览器的后退和前进
 
如何开启replace模式：

在router-link上增加replace属性即可 -->


<script>

export default {
  name: 'App'
}
</script>
