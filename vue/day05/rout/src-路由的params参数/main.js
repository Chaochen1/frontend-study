import Vue from 'vue'
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

Vue.config.productionTip = false

// 使用插件
Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    // 路由信息放到vue实例中，供全局共享使用
    router: router
}).$mount('#app')