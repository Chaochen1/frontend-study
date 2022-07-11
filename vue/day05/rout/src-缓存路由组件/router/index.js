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
                        component: MessageDetail,
                        //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                        // props: {
                        //     a: 1,
                        //     b: 'hello'
                        // }

                        //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                        // 只能是params参数
                        // props:true

                        props($route) {
                            return {
                                id: $route.query.id,
                                title: $route.query.title,
                                a: 1,
                                b: 'hello'
                            }
                        }
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