<template>
    <h2>我是about的内容</h2>
</template>

<script>

    export default{
        name:'AboutT',
        // 组件内部路由守卫
        // 通过路由规则，进入该组件时被调用
        // 在全局路由守卫之后被调用
        beforeRouteEnter (to, from, next) {
            // ...
            console.log('About--beforeRouteEnter',to,from)
            if (to.meta.isAuth) {
                if (localStorage.getItem('school') === 'atguigu') {
                    next()
                } else {
                    alert('学校名称不对，无权查看')
                }
            } else {
                next()
            }
        },
        // 通过路由规则，离开该组件时被调用
        // 在后置路由守卫之后被调用
        beforeRouteLeave (to, from, next) {
            // ...
            console.log('About--beforeRouteLeave',to,from);
            next()
        }
    }

</script>