<template>
	<div class="add" ref="addWrapper">
		<div class="content">
			<ul class="btns" flex="dir:left box:mean">
				<li>
					<img src="../../assets/add/you.png"/>
					<span>写游记</span>
				</li>
				<li>
					<img src="../../assets/add/dian.png"/>
					<span>写点评</span>
				</li>
				<li>
					<img src="../../assets/add/xing.png"/>
					<span>创建行程</span>
				</li>
			</ul>
			<div class="titile" flex="dir:left box:justify">
				<span></span>
				<span>编辑已有</span>
				<span></span>
			</div>
			<div class="btn-div">
				<ul class="btn-ul" flex="dir:left box:mean">
					<li>
						<span>游记</span>
					</li>
					<li>
						<span>行程</span>
					</li>
				</ul>
			</div>
			<div class="album">
				<span>驼峰纪念册</span>
				<span>我要上驼峰</span>
				<i class="iconfont">&#xe61e;</i>
				<span>全部</span>
			</div>
			<img src="../../assets/index/bg2.jpg" class="photo"/>
			<dl class="author" flex="dir:left box:first">
				<dt>
					<div class="face-div">
						<img src="../../assets/index/ao.jpg"/>
					</div>
				</dt>
				<dd>
					<span class="title">五一想放空自己？ 去上海踏浪吧！</span>
					<div class="bottom">
						<span>麻小暑</span>
						<ul flex="dir:right box:mean">
							<li>
								<span>0</span>
								<i class="iconfont">&#xe638;</i>

							</li>
							<li>
								<span>3</span>
								<i class="iconfont yes">&#xe60e;</i>

							</li>
							<li>
								<span>516</span>
								<i class="iconfont">&#xe60f;</i>

							</li>
						</ul>
					</div>
				</dd>
			</dl>
			<div class="list">
				<div class="list-title">
					<span>游记达人榜</span>
				</div>
				<div class="you-wrapper" ref="youWrapper">
					<ul class="you-ul" flex="dir:left">
						<li class="you-ul-li" v-for="(item,index) in youName" :key="index">
							<div>
								<img v-lazy="item.img"/>
							</div>
							<span>{{item.name}}</span>
							<span>{{item.count}}</span>
							<span>关注</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="line">
				<span></span>
			</div>
			<div class="list">
				<div class="list-title">
					<span>点评达人榜</span>
				</div>
				<div class="you-wrapper" ref="dianWrapper">
					<ul class="dian-ul" flex="dir:left">
						<li class="dian-ul-li" v-for="(item,index) in dianName" :key="index">
							<div>
								<img v-lazy="item.img"/>
							</div>
							<span>{{item.name}}</span>
							<span>{{item.count}}</span>
							<span>关注</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';

	import img1 from '../../assets/index/bei.jpg';
	import img2 from '../../assets/index/bg2.jpg';
	import img3 from '../../assets/index/chang.jpg';
	import img4 from '../../assets/index/ha.jpg';
	import img5 from '../../assets/index/hai.jpg';
	import img6 from '../../assets/index/konglong.jpg';
	import img7 from '../../assets/index/la.jpg';
	import img8 from '../../assets/index/xihu.jpg';
	import img9 from '../../assets/index/xuan.jpg';
	import img10 from '../../assets/index/yin.jpg';
	export default{
		data(){
			return{
				youName:[
					{img:img1,name:'山野邮局',count:'精华游记3篇'},
					{img:img2,name:'渣渣辉',count:'精华游记1篇'},
					{img:img3,name:'swenty',count:'精华游记2篇'},
					{img:img4,name:'灵越',count:'精华游记5篇'},
					{img:img5,name:'芋头',count:'精华游记2篇'},
					{img:img6,name:'天乐',count:'精华游记2篇'},
					{img:img7,name:'陶渊明',count:'精华游记7篇'},
					{img:img8,name:'世外桃源',count:'精华游记1篇'},
					{img:img9,name:'小溪流水',count:'精华游记2篇'},
					{img:img10,name:'八嘎呀路',count:'精华游记3篇'}
				],
				dianName:[
					{img:img10,name:'有梦为马',count:'金骆驼点评20个'},
					{img:img9,name:'老顽童',count:'金骆驼点评20个'},
					{img:img8,name:'飞雪',count:'金骆驼点评17个'},
					{img:img7,name:'缤纷渔',count:'金骆驼点评10个'},
					{img:img6,name:'小喽喽',count:'金骆驼点评10个'},
					{img:img5,name:'德玛西亚',count:'金骆驼点评8个'},
					{img:img4,name:'艾欧尼亚',count:'金骆驼点评7个'},
					{img:img3,name:'约德尔人',count:'金骆驼点评5个'},
					{img:img2,name:'诺克萨斯',count:'金骆驼点评2个'},
					{img:img1,name:'嘿嘿哈哈',count:'金骆驼点评2个'}
				]
			}
		},
		created(){
			this.$nextTick(() => {
		    	this.addScroll = new BScroll(this.$refs.addWrapper, {
			        click: true,
			        scrollY: true,
		        	probeType: 3
			    })
		    })
			this.$nextTick(() => {
		    	this.youScroll = new BScroll(this.$refs.youWrapper, {
			        click: true,
			        scrollX: true,
			        scrollY: false
			    })
		    })
			this.$nextTick(() => {
		    	this.dianScroll = new BScroll(this.$refs.dianWrapper, {
			        click: true,
			        scrollX: true,
			        scrollY: false
			    })
		    })

		},
		mounted(){
			this.$nextTick(() => {
				document.getElementsByClassName('you-ul')[0].style.width = this.youName.length * document.getElementsByClassName('you-ul-li')[0].offsetWidth + parseFloat(window.getComputedStyle(document.getElementsByClassName('you-ul-li')[0]).marginRight) * (this.youName.length + 1) + 'px';
			})
			this.$nextTick(() => {
				document.getElementsByClassName('dian-ul')[0].style.width = this.dianName.length * document.getElementsByClassName('dian-ul-li')[0].offsetWidth + parseFloat(window.getComputedStyle(document.getElementsByClassName('dian-ul-li')[0]).marginRight) * (this.dianName.length + 1) + 'px';
			})
		},
	}
</script>

<style scoped="scoped" lang="scss">
@import '../../style/mixin.scss';
@import '../../font/iconfont.css';
img[lazy=loading] {
  width: 100%;
  height: 100%;
  margin: auto;
  background: url(../../assets/loading.gif) no-repeat center;
}
.add{
	width: 100%;
	background: #F8F8F8;
	position: absolute;
	top: 0;
	bottom: 1.01rem;
	overflow: hidden;
}
.btns{
	height: 2.4rem;
	padding-top: 0.85rem;
	background: #FFFFFF;
	li{
		text-align:center;
		img{
			width: 1.22rem;
			height: 1.22rem;
			display: block;
			margin: 0 auto;
			margin-bottom: 0.15rem;
		}
		span{
			font-size: 0.26rem;
			color: #666666;
		}
	}
}
.titile{
	height: 0.4rem;
	line-height: 0.4rem;
	padding: 0 1.3rem;
	background: #FFFFFF;
	span:nth-child(1){
		width: 1.7rem;
		height: 0.04rem;
		background: #E6E6E6;
		margin-top: 0.18rem;
	}
	span:nth-child(2){
		text-align: center;
		font-size: 0.26rem;
		color: #666666;
	}
	span:nth-child(3){
		width: 1.7rem;
		height: 0.04rem;
		background: #E6E6E6;
		margin-top: 0.18rem;
	}
}
.btn-div{
	background: #FFFFFF;
	border-bottom: 0.02rem solid #E6E6E6;
	padding:0.26rem 0;
	margin-bottom: 0.2rem;
}
.btn-ul{
	width: 2.5rem;
	height: 0.4rem;
	line-height: 0.4rem;
	margin: 0 auto;
	li{
		text-align: center;
		border-right: 0.03rem solid #E6E6E6;
		span{
			font-size: 0.28rem;
			color: #00D6E3;
		}
	}
	li:last-child{
		border-right: 0;
	}
}
.album{
	height: 1.2rem;
	line-height: 1.2rem;
	background: #FFFFFF;
	padding: 0 0.3rem;
	span:nth-child(1){
		color: #333333;
		font-size: 0.3rem;
		float:left;
	}
	span:nth-child(2){
		width: 1.17rem;
		height: 0.42rem;
		line-height: 0.42rem;
		border: 0.02rem solid #31CCCD;
		@include borderRadius(5px);
		color: #33DFE7;
		float:left;
		text-align: center;
		font-size: 0.2rem;
		margin-top: 0.39rem;
		margin-left: 0.2rem;
	}
	span:nth-child(4){
		color: #999;
		font-size: 0.28rem;
		float:right;
		margin-right: 0.15rem;
	}
	i{
		color:#999999;
		font-size: 0.34rem;
		float:right;
		font-weight: bold;
	}
}
.photo{
	width: 100%;
	height: 3.2rem;
}
.author{
	height: 1.2rem;
	border-bottom: 0.02rem solid #E6E6E6;
	background: #FFFFFF;
	margin-bottom: 0.2rem;
	dt{
		width: 1.4rem;
		position: relative;
		.face-div{
			width: 1rem;
			height: 1rem;
			@include borderRadius(50%);
			border:0.1rem solid #fff;
			overflow:hidden;
			box-shadow: 0px 1px 8px #999;
			position:absolute;
			right:0;
			top:-0.3rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	dd{
		padding-left: 0.15rem;
		.title{
			color: #333333;
			font-size: 0.28rem;
			height: 0.7rem;
			line-height: 0.7rem;
			letter-spacing: 0.01rem;
		}
		.bottom{
			span{
				color: #999999;
				font-size: 0.26rem;
			}
			ul{
				width: 3rem;
				float:right;
				margin-right: 0.3rem;
				li{
					padding-top:0.1rem;
					i{
						float:right;
						color: #E1E1E1;
						font-size: 0.32rem;
						margin-right: 0.06rem;
					}
					span{
						font-size: 0.24rem;
						float:right;
						line-height: 0.32rem;
					}
				}
				.yes{
					font-size: 0.3rem;
				}
			}
		}
	}
}
.list{
	background: #FFFFFF;
}
.list-title{
	height: 1.2rem;
	line-height: 1.2rem;
	padding: 0 0.3rem;
	span{
		color:#333333;
		font-size: 0.3rem;
	}
}
.you-wrapper{
	height: 3.2rem;
	padding: 0 0.3rem;
	ul{
		padding-bottom: 0.4rem;
		li{
			width: 1.4rem;
			text-align: center;
			margin-right: 0.5rem;
			div{
				width: 1.2rem;
				height: 1.2rem;
				margin-left: 0.1rem;
				@include borderRadius(50%);
				border:0.1rem solid #fff;
				overflow:hidden;
				box-shadow: 0px 1px 8px #999;
				img{
					width: 100%;
					height: 100%;
				}
			}
			span:nth-child(2){
				display: block;
				font-size: 0.26rem;
				color: #333333;
				margin:0.06rem 0 0.12rem 0;
			}
			span:nth-child(3){
				display: block;
				font-size: 0.24rem;
				color: #666666;
				margin:0 0 0.2rem 0;
			}
			span:nth-child(4){
				display: block;
				font-size: 0.24rem;
				color: #FFFFFF;
				width: 1rem;
				height: 0.4rem;
				line-height: 0.4rem;
				text-align: center;
				margin: 0 auto;
				background: #05D9E0;
				@include borderRadius(15px);
			}
		}
	}
}
.line{
	background: #FFFFFF;
	width: 100%;
	span{
		display: block;
		height: 0.02rem;
		margin: 0 0.4rem;
		background: #ECECEC;
	}

}
</style>