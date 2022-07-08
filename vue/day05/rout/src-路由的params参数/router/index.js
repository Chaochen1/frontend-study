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
                        // 路由路径携带params参数 /home/messages/details/1/cc
                        // http://localhost:8080/#/home/messages/details/001/%E6%B6%88%E6%81%AF001
                        // details后面的为params参数
                        name: 'xiangqing',
                        path: 'details/:id/:title',
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