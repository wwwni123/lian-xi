<template>
	<div id="">
		<div class="right">
				<h3>广告发布</h3>
				<p>
					广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审
					核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务
					就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督
				</p>
				<h6><span>购买数量:</span><button class="jian" @click="jian">-</button><input type="text" v-model="num"/><button class="jia" @click="jia">+</button></h6>
				<h6>
					<span>产品版本:</span>
					<a :class="{act:act}" @click="act=!act">初级版</a>
					<a :class="{act:act1}" @click="act1=!act1">初级版</a>
					<a :class="{act:act2}" @click="act2=!act2">初级版</a>
					<a :class="{act:act3}" @click="act3=!act3">初级版</a>
				</h6>
				<h6>
					<span>有效时间:</span>
					<a>半年</a>
				</h6>
				<h6>
					<span>总价:</span>
					<a>500元</a>
				</h6>
				<h6>
					<span>确认购买:</span>
					<button class="shopping">立即购买</button>
				</h6>
		</div>
		<div class="footer">
		<div class="foot">
			<h3>产品说明</h3>
			<p>
				广告活动按照广告计划执行，到完成广告创作并形
				成广告作品之后，经过广告主的最后审核同意，即可送到
				预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的
				任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。
			</p>
			<table border="1" cellspacing="0" cellpadding="0">
				<tr>
					<th>安全安保</th>
					<th>办公文教</th>
					<th>彩票</th>
					<th>车辆物流</th>
					<th>成人用品</th>
					<th>出版传媒</th>
					<th>电脑硬件</th>
				</tr>
				<tr>
					<th>电脑硬件</th>
					<th>电脑硬件</th>
					<th>电脑硬件</th>
					<th>电脑硬件</th>
					<th>电脑硬件</th>
					<th>电脑硬件</th>
					<th>电脑硬件</th>
				</tr>
			</table>
		</div>
		</div>
		
	</div>
</template>

<script>
export default{
	data(){
		return {
			num:0,
			act:false,
			act1:false,
			act2:false,
			act3:false
		}
	},
	methods:{
		jian(){
			if (this.num>0) {
				this.num--
			}
		},
		jia(){
				this.num++
		}
	}
}
</script>

<style scoped lang="scss">
.act{
		background: #4fc08d;
		color: white;
	}
	.right{
			width: 80%;
			line-height: 30px;
			float: right;
			background: white;
			h3{
				height: 40px;
				line-height: 40px;
				padding:0 20px;
			}
			>p{
				padding: 0 20px;
				background: greenyellow;
			}
			>h6{
				height: 80px;
				padding: 0 20px;
				line-height: 50px;
				font-size: 20px;
				a{
					height: 30px;
					border: 1px solid lightgray;
					display: inline-block;
					padding:0 2px;
					line-height: 30px;
				}
				.jian{
					width: 50px;
					height: 30px;
					font-size: 25px;
					background: #4fc08d;
					border: none;
					color: white;
				}
				input{
					width: 50px;
					height: 30px;
					font-size: 25px;
					text-align: center;
				}
				.jia{
					width: 50px;
					height: 30px;
					font-size: 25px;
					background: #4fc08d;
					border: none;
					color: white;
				}
				span{
					display: inline-block;
					width: 150px;
				}
				.shopping{
					width: 150px;
					height: 30px;
					font-size: 20px;
					background: #4fc08d;
					border: none;
					color: white;
				}
			}
		}
		.footer{
		width: 80%;
		float: right;
		.foot{
			margin-top: 20px;
			width: 100%;
			padding: 20px 0;
			background: white;
			float: right;
			line-height: 30px;
			background: white;
			h3{
				height: 40px;
				line-height: 40px;
				padding:0 20px;
			}
			>p{
				padding: 0 20px;
			}
			table{
				width: 95%;
				margin: 0 20px;
			}
		}
	}
</style>