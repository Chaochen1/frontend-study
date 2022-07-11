<template>
  <div>
    <div class="row">
      <BannerR/>
    </div>
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

<!-- hash模式url里面永远带着#号，开发当中默认使用这个模式。如果用户考虑url的规范那么就需要使用history模式，因为history模式没有#号，
是个正常的url，适合推广宣传；
功能上：比如我们在开发app的时候有分享页面，那么这个分享出去的页面就是用vue或是react做的，
咱们把这个页面分享到第三方的app里，有的app里面url是不允许带有#号的，所以要将#号去除那么就要使用history模式，
但是使用history模式还有一个问题就是，在访问二级页面的时候，做刷新操作，会出现404错误，那么就需要和后端人配合，让他配置一下apache
或是nginx的url重定向，重定向到你的首页路由上就ok了 -->

<!-- 1.是否向后端传参：
 hash模式#号后面的参数不会当作参数传给后端，history会

2.是否刷新页面
 hash模式不会刷新页面，history会刷新页面 -->

 <!-- 在路由器配置中修改路由mode为history即可 -->

<script>
import BannerR from './components/BannerR.vue'
export default {
  name: 'App',
  components:{BannerR}
}
</script>
