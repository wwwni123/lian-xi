<template>
	<div>
		<div id="one">
			<div class="left">
				<img src="../assets/1.png" alt="" />
				<ul>
					<router-link to="/one/1" tag="li" active-class="act">数据统计{{$route.params}}</router-link>
					<router-link to="/one/2" tag="li" active-class="act">数据预测</router-link>
					<router-link to="/one/3" tag="li" active-class="act">流量分析</router-link>
					<router-link to="/one/4" tag="li" active-class="act">广告发布</router-link>
				</ul>
			</div>
			<router-view></router-view>
		</div>
			<footer>
			© 2016 fishenal MIT
			</footer>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	#one{
		width: 80%;
		margin: 20px auto;
		.left{
			width: 200px;
			height: 300px;
			float: left;
			padding: 20px 0;
			background: white;
			text-align: center;
			ul{
				li{
					height: 40px;
					line-height: 40px;
					text-align: start;
					padding: 0 20px;
				}
			}
		}
		
	}
	
	footer{
		width: 100%;
		height: 60px;
		float: left;
		background: rgba(0,0,0,0.2);
		margin-top: 20px;
		text-align: center;
		line-height: 60px;
	}
	.act{
		background: #4fc08d;
		color: white;
	}
</style>