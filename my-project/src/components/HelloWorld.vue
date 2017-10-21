<template>
  <div>
  	<div class="content">
	    <div class="leyout">
	      <h3>全部产品</h3>
	      <h4>PC产品</h4>
	      <ul class="b">
	        <li v-for="(item,index) in Plists">{{item.title}} <span v-if="item.hot" style="background: orangered;color: white;">HOT</span></li>
	      </ul>
	      <hr />
	      <h4>手机应用类</h4>
	      <ul class="a">
	        <li v-for="(item,index) in Slists">{{item.title}} <span v-if="item.hot" style="background: orangered;color: white;">HOT</span></li>
	      </ul>
	    </div>
	    <div class="swiper-container swiperOne">
	        <div class="swiper-wrapper">
	          <div class="swiper-slide">
	              <img src="../assets/pic1.jpg" alt="">
	          </div>
	          <div class="swiper-slide">
	              <img src="../assets/pic2.jpg" alt="">
	          </div>
	          <div class="swiper-slide">
	              <img src="../assets/pic3.jpg" alt="">
	          </div>
	          <div class="swiper-slide">
	              <img src="../assets/pic4.jpg" alt="">
	          </div>
	        </div>
	        <div class="swiper-pagination"></div>
	    </div>
  	</div>
  	<div class="cont">
  		<div class="leyout">
  			<h3>最新消息</h3>
  		</div>
  		<div class="slides">
  			<div class="slide" v-for="(item,index) in contents">
  				<img :src="item.imgs" alt="" width="50px"/>
  				<div>
  					<h2>{{item.title}}</h2>
  					<p>{{item.alt}}</p>
  					<p><router-link :to="item.btn" tag="button" avtive-class="act">立即购买</router-link></p>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			Plists:[
				{
					title:"数据统计",
					hot:false
				},
				{
					title:"数据预测",
					hot:false
				},
				{
					title:"流量分析",
					hot:true
				},
				{
					title:"广告发布",
					hot:false
				}
			],
			Slists:[
				{
					title:"91助手",
					hot:false
				},
				{
					title:"产品助手",
					hot:false
				},
				{
					title:"智能地图",
					hot:true
				},
				{
					title:"团队语音",
					hot:false
				}
			],
			contents:[
				{
					imgs:require("../assets/1.png"),
					title:"开放产品",
					alt:"开放产品是一款开放茶农",
					btn:"/one/1"
				},
				{
					imgs:require("../assets/2.png"),
					title:"品牌营销",
					alt:"品牌营销帮助你的产品更加的找到定位",
					btn:"one/2"
				},
				{
					imgs:require("../assets/3.png"),
					title:"使命必达",
					alt:"使命必达快速迭代保持最高端的速度",
					btn:"one/3"
				},
				{
					imgs:require("../assets/4.png"),
					title:"勇攀高峰",
					alt:"帮你勇攀高峰到事业巅峰",
					btn:"one/4"
				}
			]
		}
	},
  mounted(){
  	var one=new Swiper(".swiperOne",{
  		autoplay:1000,
  		pagination:".swiper-pagination"
  	})
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-pagination{
	position: absolute;
	bottom: 0;
	background: rgba(50,210,120,0.6);
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
}
	.content{
		clear: both;
		width: 80%;
		display: flex;
		justify-content: space-between;
		margin:10px auto;
		
		.swiperOne{
			width: 75%;
			img{
				width: 100%;
			}
		}
	}
	.leyout{
			width: 200px;
			height: 400px;
			background: white;
			float: left;
			h3{
				height: 30px;
				line-height: 30px;
				padding: 0 10px;
				background: #4fc08d;
				color: white;
			}
			h4{
				padding: 0 10px;
				height: 40px;
				line-height: 40px;
			}
			li{
				height: 30px;
				padding: 0 20px;
			}
		}
		.cont{
			width: 80%;
			margin: 20px auto;
		}
		.slides{
			width:75% ;
			display: flex;
			justify-content: space-around;
			float: right;
			flex-wrap: wrap;
			.slide{
				width: 48%;
				height: 150px;
				margin: 20px 0;
				background: white;
				display: flex;
				align-items: center;
				img{
					margin: 0 20px;
				}
				p{
					margin: 10px 0;
				}
				button{
					width: 100px;
					height: 30px;
					border: none;
					background: #4fc08d;
					color: white;
					font-weight: bold;
				}
			}
		}
</style>
