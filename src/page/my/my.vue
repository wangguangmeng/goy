<template>
	<div class="my" ref="myWrapper">
		<div class="content">
			<div class="title">
				<div class="title-content">
					<div class="title-top"></div>
					<img src="../../assets/my/face.png" class="user-face"/>
				</div>
			</div>
			<div class="title-bottom">
				<div class="btns">
					<router-link tag="span" to="/login">登录</router-link>
					<router-link tag="span" to="/register">注册</router-link>
					<div class="clear"></div>
				</div>
			</div>
			<div class="message">
				<i class="iconfont">&#xe60d;</i>
				<span>聪明有范儿又会玩儿的你！快来加入聪明旅行家!</span>
			</div>
			<div class="lists">
				<ul class="list-ul" flex="dir:left main:center cross:center box:mean">
					<li>
						<i class="iconfont">&#xe6ca;</i>
						<span>游记</span>
					</li>
					<li>
						<i class="iconfont">&#xe608;</i>
						<span>行程</span>
					</li>
					<li>
						<i class="iconfont">&#xe64a;</i>
						<span>评论</span>
					</li>
					<li>
						<i class="iconfont">&#xe696;</i>
						<span>下载</span>
					</li>
					<li>
						<i class="iconfont">&#xe633;</i>
						<span>邀请好友</span>
					</li>
				</ul>
				<ul class="list-ul list-ul-second" flex="dir:left main:center cross:center box:mean">
					<li>
						<i class="iconfont">&#xe611;</i>
						<span>订单查询</span>
					</li>
					<li>
						<i class="iconfont">&#xe750;</i>
						<span>余额提现</span>
					</li>
					<li>
						<i class="iconfont">&#xe617;</i>
						<span>拿去花</span>
					</li>
					<li>
						<i class="iconfont">&#xe737;</i>
						<span>代金券</span>
					</li>
					<li>
						<i class="iconfont">&#xe6b6;</i>
						<span>建议反馈</span>
					</li>
				</ul>
			</div>
			<div class="collect">
				<span>我的收藏</span>
			</div>
			<div class="collect-content">
				<span>登录后查看收藏内容</span>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default{
		created(){
			this.$nextTick( () => {
		        this.myscroll = new BScroll(this.$refs.myWrapper, {
			        click: true,
			        scrollY: true,
			        probeType: 3
			      })
		    })
		}
	}
</script>

<style lang="scss" scoped="scoped">
@import '../../font/iconfont.css';
@import '../../style/mixin.scss';
.my{
	background: #F5F5F8;
	position:absolute;
	width: 100%;
	top: 0;
	bottom: 1.01rem;
}
.title{
	height: 2.96rem;
	background: url(../../assets/discover/d3.jpg) no-repeat center;
	background-size: 100% 100%;
	position: relative;
}
.title-content{
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	.title-top{
		width: 100%;
		height: 0.4rem;
		border-top-left-radius: 40%;
		border-top-right-radius: 40%;
		background: #FFFFFF;
	}

}
.title-bottom{
	height: 1.4rem;
	background: #FFFFFF;
	padding-top: 0.4rem;
	.btns{
		width: 4.08rem;
		margin: 0 auto;
		span:nth-child(1){
			width: 1.76rem;
			height: 0.56rem;
			background: #31CCCD;
			color: #FFFFFF;
			text-align: center;
			float:left;
			@include borderRadius(20px);
			font-size: 0.28rem;
			line-height: 0.56rem;
			letter-spacing: 0.02rem;
		}
		span:nth-child(2){
			width: 1.74rem;
			height: 0.54rem;
			color: #31CCCD;
			text-align: center;
			float:right;
			@include borderRadius(20px);
			font-size: 0.28rem;
			line-height: 0.54rem;
			border: 0.02rem solid #31CCCD;
			letter-spacing: 0.02rem;
		}
	}
}
.user-face{
	width: 1.22rem;
	height: 1.22rem;
	position: absolute;
	left: 0;
	right: 0;
	top: -0.61rem;
	margin: 0 auto;
}
.message{
	height: 0.88rem;
	line-height: 0.88rem;
	margin-top: 0.2rem;
	padding: 0 0.3rem;
	background: #FFFFFF;
	border-bottom: 0.02rem solid #EEEEEE;
	i{
		font-size: 0.4rem;
		color: #FF8D31;
		float:left;
		margin-right: 0.05rem;
	}
	span{
		font-size: 0.26rem;
		color: #22D4D6;
		letter-spacing: 0.01rem;
	}
}
.lists{
	background: #FFFFFF;
	margin-bottom: 0.2rem;
	.list-ul{
		li{
			margin: 0.3rem 0;
			text-align: center;
			i{
				display: block;
				font-size: 0.6rem;
				margin-bottom: 0.1rem;
			}
			span{
				font-size: 0.24rem;
			}
		}
		li:nth-child(1){
			i{
				color: #51E17A;
			}
		}
		li:nth-child(2){
			i{
				color: #1CDDD2;
			}
		}
		li:nth-child(3){
			i{
				color: #449AFF;
			}
		}
		li:nth-child(4){
			i{
				color: #FDB947;
			}
		}
		li:nth-child(5){
			i{
				color: #FF4D39;
			}
		}

	}
	.list-ul-second{
		li:nth-child(1){
			i{
				color: #FDBB40;
			}
		}
		li:nth-child(2){
			i{
				color: #FF539A;
			}
		}
		li:nth-child(3){
			i{
				color: #9E52FF;
			}
		}
		li:nth-child(4){
			i{
				color: #3C98FF;
			}
		}
		li:nth-child(5){
			i{
				color: #48DF7D;
			}
		}
	}
}
.collect{
	height: 0.88rem;
	line-height: 0.88rem;
	padding-left: 0.2rem;
	background: #FFFFFF;
	span{
		font-size: 0.28rem;
		color: #666666;
	}
}
.collect-content{
	text-align: center;
	span{
		font-size: 0.28rem;
		color: #666666;
		line-height: 2rem;
	}
}
</style>