import VueRouter from 'vue-router'

// 引入组件
import AboutT from '../pages/AboutT'
import HomeE from '../pages/HomeE'
import MessageS from '../pages/MessageS'
import NewFF from '../pages/NewFF'
import MessageDetail from '../pages/MessageDetail'


// 创建并暴露一个路由器
export default new VueRouter({
    routes: [{
            path: '/about',
            component: AboutT
        },
        {
            path: '/home',
            component: HomeE,
            // 多级路由
            // 路由路径前面不需要再加/ 加了会报错
            children: [{
                    path: 'messages',
                    component: MessageS,
                    children: [{
                        // 给路由命名，后面可替代路径
                        name: 'xiangqing',
                        path: 'details',
                        component: MessageDetail
                    }]
                },
                {
                    path: 'news',
                    component: NewFF
                }
            ]
        }
    ]
})