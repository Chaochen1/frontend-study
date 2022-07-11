<template>
	<div class="col-xs-offset-2 col-xs-8">
		<div class="page-header"><h2>Vue Router Demo</h2></div>
		<button @click="back">后退</button>
			<button @click="forward">前进</button>
			<button @click="test">测试一下go</button>
	</div>
</template>

<!-- components中不存放路由组件 路由组件统一放到pages中管理 -->


<script>
	export default {
		name:'BannerR',
		methods: {
			back(){
				this.$router.back()
				// console.log(this.$router)
			},
			forward(){
				this.$router.forward()
			},
			// 跳转页面
			test(){
				this.$router.go(3)
			}
		},
	}
</script>