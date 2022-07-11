<template>
	<ul>
		<!-- 当路由组件从news切换到message时，news输入框中的文本会消失，此时需要缓存路由组件 在引入的地方加入keep-alive -->
		<li :style="{opacity}">欢迎学习Vue</li>
		<li>news001 <input type="text"></li>
		<li>news002 <input type="text"></li>
		<li>news003 <input type="text"></li>
	</ul>
</template>

<script>
	export default {
		name:'NewFF',
		data() {
			return {
				opacity:1
			}
		},
		// 由于使用了keep alive标签使得news组件不被销毁，所以无法使用beforeDestory来进行销毁前的工作
		// 可以使用activated和deactivated来进行处理
		activated() {
			console.log("news组件被激活了");
			this.timer = setInterval(()=>{
				console.log('@')
				this.opacity -= 0.01
				if(this.opacity <= 0) this.opacity = 1
			}, 16)
		},
		deactivated() {
			console.log('News组件失活了')
			clearInterval(this.timer)
		},
	}
</script>