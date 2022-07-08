import VueRouter from 'vue-router'

// 引入组件
import AboutT from '../components/AboutT'
import HomeE from '../components/HomeE'


// 创建并暴露一个路由器
export default new VueRouter({
    routes: [{
            path: '/about',
            component: AboutT
        },
        {
            path: '/home',
            component: HomeE
        }
    ]
})