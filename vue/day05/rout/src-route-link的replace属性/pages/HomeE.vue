<template>
<div>
		<h2>Home组件内容</h2>
        <!-- 子路由 -->
		<div>
			<ul class="nav nav-tabs">
				<li>
					<!-- 加上replace之后按回退按钮，不会再回退到当前home页面 -->
					<router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link replace class="list-group-item" active-class="active" to="/home/messages">Message</router-link>
				</li>
			</ul>
			<router-view></router-view>
		</div>
	</div>
</template>


<script>

export default {
    name:'HomeE'
}

</script>