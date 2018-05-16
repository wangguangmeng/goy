<template>
	<div class="login">
		<div class="title" flex="dir:left main:center cross:center box:mean" id="loginTitle">
			<span><i class="iconfont" @click="back()">&#xe624;</i></span>
			<span>登录</span>
			<router-link tag="span" to="/register">注册</router-link>
		</div>
		<ul class="ipts">
			<li>
				<span>手机号</span>
				<input type="text" placeholder="请输入手机号"/>
			</li>
			<li>
				<span>验证码</span>
				<input type="text" placeholder="请输入验证码"/>
				<span>获取验证码</span>
			</li>
		</ul>
		<span class="loginbtn">登录</span>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default{
		mounted(){
			document.getElementById('loginTitle').style.paddingTop = this.$store.state.appHeight + 'px';
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		computed:{
			...mapState({
				appHeight: state => state.appHeight
			})
		}
	}
</script>

<style lang="scss" scoped="scoped">
@import '../../font/iconfont.css';
@import '../../style/mixin.scss';
.login{
	width: 100%;
	height: 100%;
	background: #F3F9FC;
}
.title{
	height: 0.9rem;
	line-height: 0.9rem;
	background: #31CCCD;
	padding:0 0.3rem;
	span:nth-child(1){
		padding-top:0.1rem;
		i{
			color:#ffffff;
			font-size:0.4rem;
			font-weight: bold;
		}
	}
	span:nth-child(2){
		color: #FFFFFF;
		text-align: center;
		font-size: 0.3rem;
	}
	span:nth-child(3){
		color: #FFFFFF;
		text-align: right;
		font-size: 0.26rem;
	}
}
.ipts{
	margin-top: 0.2rem;
	border-top: 0.02rem solid #CCCCCC;
	border-bottom: 0.02rem solid #CCCCCC;
	background: #FFFFFF;
	li{
		height: 0.9rem;
		line-height: 0.9rem;
		border-bottom: 0.02rem solid #DDDDDD;
		margin: 0 0.2rem;
		span:nth-child(1){
			float:left;
			font-size: 0.28rem;
			color: #31CCCD;
			margin-right: 0.85rem;
		}
		input{
			float:left;
			height: 0.9rem;
		}
		span:nth-child(3){
			float:right;
			font-size: 0.28rem;
			color: #DADFE2;
			border: 0.02rem solid #CCCCCC;
			width: 1.98rem;
			height: 0.58rem;
			@include borderRadius(5px);
			margin-top: 0.15rem;
			line-height: 0.58rem;
			text-align: center;
		}
	}
	li:last-child{
		border-bottom : 0;
	}
}
.loginbtn{
	display: block;
	height: 1rem;
	margin: 0 0.2rem;
	background: #94E0E2;
	@include borderRadius(5px);
	margin-top: 0.3rem;
	font-size: 0.3rem;
	color: #FFFFFF;
	text-align: center;
	line-height: 1rem;
}
</style>