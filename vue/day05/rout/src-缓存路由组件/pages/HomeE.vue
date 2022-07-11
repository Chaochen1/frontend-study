<template>
<div>
		<h2>Home组件内容</h2>
        <!-- 子路由 -->
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/messages">Message</router-link>
				</li>
			</ul>
			<!-- 在路由的基本使用中我们介绍过：切换时，隐藏组件实质是销毁组件，显示组件实质是挂载组件。
缓存路由组件，即keep-alive。
用<keep-alive>标签将<router-view>包裹，隐藏组件时不会将组件销毁，组件依然挂载着。
<keep-ailve>标签上的属性include指定缓存哪个组件，其值是组件名。 -->

			<keep-alive include="NewFF">
			<router-view></router-view>
			</keep-alive>
			
		</div>
	</div>
</template>


<script>

export default {
    name:'HomeE'
}

</script>