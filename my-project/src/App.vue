<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png" style="width:5rem">
      <div class="login">
        <a @click="login">登陆</a> |
        <a @click="zhuche">注册</a> |
        <a @click="about">关于</a>
      </div>
    </div>
    <div :class="{zhe:show}"></div>
    <div :class="{zhe:Zshow}"></div>
    <div :class="{zhe:Gshow}"></div>
    <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
			<div v-show="show" class="animated">
				<span @click="hide" style="position: absolute;right: 5px;top: 0;cursor: pointer;">x</span>
				<input type="text" placeholder="请输入用户名" v-model="pass1"/><br />
				<input type="password" placeholder="请输入密码" v-model="user1"/><br />
				<button @click="loginIn">登陆</button>
			</div>
		</transition>
    <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
			<div v-show="Gshow" class="animated">
				<h1>关于</h1>
				<span @click="hide" style="position: absolute;right: 5px;top: 0;cursor: pointer;">x</span>
				2017年9月19日 - 标签: vue滚动 平滑滚动 vue引入jq插件 vue滚动animate 前端开发 分类: 前端开发 在以往的做法里首选jquery的animate实现,但是Vue里并没有这个方法
			</div>
		</transition>
    <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
			<div v-show="Zshow" class="animated">
				<span @click="hide" style="position: absolute;right: 5px;top: 0;cursor: pointer;">x</span>
				<input type="text" placeholder="请输入用户名" v-model="user"/><br />
				<input type="password" placeholder="请输入密码" v-model="pass"/><br />
				<button @click="zhu">注册</button>
			</div>
		</transition>
    <router-view/>
  </div>
</template>
<script>
//	import Vue from "vue"
	import axios from "axios"
//	Vue.prototype.$http = axios;
export default {
		data(){
			return {
				show:false,
				Zshow:false,
				Gshow:false,
				user:"",
				user1:"",
				pass:"",
				pass1:"",
			}
		},
		methods:{
			login(){
				this.show=true
			},
			zhuche(){
				this.Zshow=true
			},
			about(){
				this.Gshow=true
			},
			hide(){
				this.Zshow=false
				this.show=false
				this.Gshow=false
			},
			zhu(){
				if (this.user!=""&&this.pass!="") {
				axios({
					type:"post",
					url:"/list/luntai/php/index.php?C=Login&M=sign",
					data:{
						username:this.user,
						password:this.pass
					}
				}).then((data)=>{
					console.log(data)
				})
				}else{
					alert("请填写")
				}
			},
			loginIn(){
				if (this.user1!=""&&this.pass1!="") {
					axios({
						type:"post",
						url:"/list/luntai/php/index.php?C=Login&M=login",
						data:{
							username:this.user1,
							password:this.pass1
						}
					}).then((data)=>{
						console.log(data)
					})
				}else{
					alert("请填写")
				}
			}
		}
}
</script>

<style lang="scss">
	@import url("../static/css/animate.min.css");
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  a{text-decoration: none;cursor: pointer;}
  .logo{
    width: 100%;
    height: 100px;
    padding: 0 10rem;
    background: #363636;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .animated{
  	position: absolute;
  	left: 30%;
  	padding: 20px 0;
  	top: 50%;
  	z-index: 100;
  	width: 500px;
  	height: 200px;
  	background: white;text-align: center;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: space-around;
  	input:nth-child(1){
  		width: 60%;
  		height: 30px;
  	}
  	input:nth-child(3){
  		width: 60%;
  		height: 30px;
  	}
  	button{
  		width: 150px;
  		height: 40px;
  		border: none;
  		background: #4fc08d;
  		color: white;
  		font-weight: bold;
  	}
  }
  .zhe{
  	width: 100%;
  	height: 150%;
  	z-index: 90;
  	position: absolute;
  	background: rgba(0,0,0,0.6);
  }
  .login{
    color: #b2b2b2;
    a{
    	color: #b2b2b2;
    }
  }
  body{
  	background: #f0f2f5;
  }
</style>
