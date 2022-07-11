import VueRouter from 'vue-router'

// 引入组件
import AboutT from '../pages/AboutT'
import HomeE from '../pages/HomeE'
import MessageS from '../pages/MessageS'
import NewFF from '../pages/NewFF'
import MessageDetail from '../pages/MessageDetail'


// 创建并暴露一个路由器
const router = new VueRouter({
    // 修改路由模式为history
    mode: 'history',
    routes: [{
            path: '/about',
            component: AboutT,
            // 给路由加上元数据
            meta: { title: '关于' }
        },
        {
            path: '/home',
            component: HomeE,
            meta: { title: '主页' },
            children: [{
                    path: 'messages',
                    component: MessageS,
                    meta: { isAuth: true, title: '消息' },
                    children: [{
                        name: 'xiangqing',
                        path: 'details/:id/:title',
                        component: MessageDetail,
                        // 给路由加上元数据 需要进行鉴权
                        meta: { isAuth: true, title: '详情' },
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
                    component: NewFF,
                    meta: { isAuth: true, title: '新闻' },
                    // 独享路由守卫，与路由前置守卫 beforeEach(to, from, next)相同，
                    // 但在beforeEach(to, from, next)后触发
                    // 判断是否需要鉴权
                    beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('学校名称不对，无权访问')
                            }
                        } else {
                            next()
                        }
                    }
                }
            ]
        }
    ]
})

// 全局前置路由守卫-初始化的时候被调用(页面刚被加载)，每次路由切换之前被调用
// 在路由跳转前触发，在实际项目中应用最多，主要是登陆token验证和跳转权限判断
// router.beforeEach((to, from, next) => {
//     console.log('前置路由守卫', to, from);
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('学校名不对，无权查看')
//         }
//     } else {
//         // 认证不通过，页面跳转
//         next()
//     }
// })

//全局后置路由守卫————初始化的时候被调用(页面刚被加载)、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title
})

export default router