<template>
	<ul>
        <!-- 路由路径中携带参数 -->
        <!-- query参数会放在route的query中 -->
		<li>消息编号：{{$route.query.id}}</li>
		<li>消息标题：{{$route.query.title}}</li>
	</ul>
</template>

<script>
	export default {
		name:'MessageDetail',
		mounted() {
			console.log(this.$route)
		},
	}
</script>