<template>
	<ul>
		<!-- 当路由组件从news切换到message时，news输入框中的文本会消失，此时需要缓存路由组件 在引入的地方加入keep-alive -->
		<li>news001 <input type="text"></li>
		<li>news002 <input type="text"></li>
		<li>news003 <input type="text"></li>
	</ul>
</template>

<script>
	export default {
		name:'NewFF'
	}
</script>