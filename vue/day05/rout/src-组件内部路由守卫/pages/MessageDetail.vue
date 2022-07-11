<template>
	<ul>
        <!-- 不用写成$route.query.title，直接从props中取 -->
		<li>消息编号：{{id}}</li>
		<li>消息标题：{{title}}</li>
		<!-- 通过props传递参数 -->
		<li>消息标题：{{a}}</li>
		<li>消息标题：{{b}}</li>
	</ul>
</template>

<script>
	export default {
		name:'MessageDetail',
		// 接收路由器中props传递的参数
		props:['id','title','a','b'],
		mounted() {
			console.log(this.$route)
		},
	}
</script>