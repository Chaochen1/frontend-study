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


<!-- 在路由的基本使用中我们介绍过：切换时，隐藏组件实质是销毁组件，显示组件实质是挂载组件。
缓存路由组件，即keep-alive。
用<keep-alive>标签将<router-view>包裹，隐藏组件时不会将组件销毁，组件依然挂载着。
<keep-ailve>标签上的属性include指定缓存哪个组件，其值是组件名。 -->


<script>

export default {
  name: 'App'
}
</script>
