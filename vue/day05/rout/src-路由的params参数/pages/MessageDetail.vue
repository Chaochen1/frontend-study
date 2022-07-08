<template>
	<ul>
        <!-- 路由路径中携带参数 -->
        <!-- params参数会放在route的params中 -->
		<li>消息编号：{{$route.params.id}}</li>
		<li>消息标题：{{$route.params.title}}</li>
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