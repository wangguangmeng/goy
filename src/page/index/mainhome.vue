<template>
	<div id="home" class="wrapper" ref="wrapper">
		<div class="content">
			<div class="bg"></div>
		    <div class="main-icons">
				<div class="icons-item" flex="dir:left main:center box:mean">
					<router-link tag="div" to="view">
						<img src="../../assets/index/place.png"/>
						<span>景点</span>
					</router-link>
					<router-link tag="div" to="view">
						<img src="../../assets/index/hotel.png"/>
						<span>酒店</span>
					</router-link>
					<router-link tag="div" to="view">
						<img src="../../assets/index/rest.png"/>
						<span>美食</span>
					</router-link>
					<router-link tag="div" to="view">
						<img src="../../assets/index/map.png"/>
						<span>地图</span>
					</router-link>
					<router-link tag="div" to="view">
						<img src="../../assets/index/yun.png"/>
						<span>托运</span>
					</router-link>
				</div>
				<div class="icons-item" flex="dir:left main:center box:mean">
					<router-link tag="div" to="view">
						<img src="../../assets/index/air.png"/>
						<span>飞机票</span>
					</router-link>
					<router-link tag="div" to="view">
						<img src="../../assets/index/tic.png"/>
						<span>火车票</span>
					</router-link>
					<router-link tag="div" to="view">
						<img src="../../assets/index/car.png"/>
						<span>打车</span>
					</router-link>
					<router-link tag="div" to="view">
						<img src="../../assets/index/ship.png"/>
						<span>轮渡</span>
					</router-link>
					<router-link tag="div" to="view">
						<img src="../../assets/index/photo.png"/>
						<span>相册</span>
					</router-link>
				</div>
			</div>
			<div class="tips">
				<span>特别提醒</span>
				<i class="iconfont">&#xe61e;</i>
			</div>
			<swipertip></swipertip>

		   	<div class="line"></div>
		   	<div class="tips">
				<span>住宿攻略</span>
			</div>
			<swiperhouse></swiperhouse>
		   	<div class="tips">
				<span>周边玩乐</span>
				<i class="iconfont">&#xe61e;</i>
			</div>
			<swiperplace></swiperplace>
			<div class="tips">
				<span>上海人最近都爱去</span>
			</div>
			<swipergo></swipergo>
			<div class="line"></div>
			<div class="title-gong">
				<span>攻略</span>
				<ul flex="dir:right main:center">
					<li>
						<span>筛选</span>
						<i class="iconfont">&#xe67a;</i>
					</li>
					<li>
						<span>精华</span>
					</li>
					<li>
						<span>最新</span>
					</li>
					<li>
						<span>全部</span>
					</li>
				</ul>
			</div>
			<ul class="filter" flex="dir:left main:center cross:center box:mean">
				<li>
					<span>玩法</span>
					<i class="iconfont">&#xe7a0;</i>
				</li>
				<li>
					<span>旅行经验</span>
					<i class="iconfont">&#xe7a0;</i>
				</li>
				<li>
					<span>人群</span>
					<i class="iconfont">&#xe7a0;</i>
				</li>
				<li>
					<span>时间</span>
					<i class="iconfont">&#xe7a0;</i>
				</li>
			</ul>
			<div class="dl-content">
				<dl flex="dir:left box:first" v-for="(item,index) in playContent" :key="index">
					<dt>
						<img v-lazy="item.img"/>
					</dt>
					<dd>
						<div><span>{{item.title}}</span></div>
						<div class="user-content">
							<img v-lazy="item.face"/>
							<div class="user-text">
								<span>{{item.desc}}</span>
								<span>{{item.keywords}}</span>
							</div>
						</div>
					</dd>
				</dl>
			</div>

	 	</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import BScroll from 'better-scroll';
	import swipertip from '@/components/swipertip'
	import swiperhouse from '@/components/swiperhouse'
	import swiperplace from '@/components/swiperplace'
	import swipergo from '@/components/swipergo'

	import img1 from '../../assets/index/bei.jpg';
	import img2 from '../../assets/index/ha.jpg';
	import img3 from '../../assets/index/la.jpg';
	import img4 from '../../assets/index/teng.jpg';
	import img5 from '../../assets/index/xuan.jpg';
	import img6 from '../../assets/index/zhong.jpg';
	import img7 from '../../assets/index/chang.jpg';
	import img8 from '../../assets/index/hai.jpg';
	import img9 from '../../assets/index/yin.jpg';
	import img10 from '../../assets/index/ao.jpg';

	import face1 from '../../assets/index/air.png';
	import face2 from '../../assets/index/car.png';
	import face3 from '../../assets/index/drink.png';
	import face4 from '../../assets/index/hotel.png';
	import face5 from '../../assets/index/map.png';
	import face6 from '../../assets/index/photo.png';
	import face7 from '../../assets/index/place.png';
	import face8 from '../../assets/index/rest.png';
	import face9 from '../../assets/index/ship.png';
	import face10 from '../../assets/index/tic.png';
	export default{
		data(){
			return{
				playContent:[
					{img:img1,title:'上海迪士尼最走心攻略（自己的游玩体会，供参考）',face:face1,desc:'2017.04.02出发/共2天',keywords:"情侣/探险"},
					{img:img2,title:'上海必去的景点推荐，来上海不去就out拉',face:face2,desc:'2016.08.21出发/共9天',keywords:"独自/海滨旅游"},
					{img:img3,title:'上海美食最强攻略',face:face3,desc:'2017.04.02出发/共2天',keywords:"情侣/探险"},
					{img:img4,title:'上海迪士尼最走心攻略（自己的游玩体会，供参考）',face:face4,desc:'2017.04.02出发/共2天',keywords:"情侣/探险"},
					{img:img5,title:'上海迪士尼最走心攻略（自己的游玩体会，供参考）',face:face5,desc:'2017.04.02出发/共2天',keywords:"情侣/探险"},
					{img:img6,title:'上海迪士尼最走心攻略（自己的游玩体会，供参考）',face:face6,desc:'2017.04.02出发/共2天',keywords:"情侣/探险"},
					{img:img7,title:'上海迪士尼最走心攻略（自己的游玩体会，供参考）',face:face7,desc:'2017.04.02出发/共2天',keywords:"情侣/探险"},
					{img:img8,title:'上海迪士尼最走心攻略（自己的游玩体会，供参考）',face:face8,desc:'2017.04.02出发/共2天',keywords:"情侣/探险"},
					{img:img9,title:'上海迪士尼最走心攻略（自己的游玩体会，供参考）',face:face9,desc:'2017.04.02出发/共2天',keywords:"情侣/探险"},
					{img:img10,title:'上海迪士尼最走心攻略（自己的游玩体会，供参考）',face:face10,desc:'2017.04.02出发/共2天',keywords:"情侣/探险"}
				]
			}
		},
		components:{
			swipertip,
			swiperhouse,
			swiperplace,
			swipergo
		},
		created(){
			this.$nextTick( () => {
		        this._initScroll()
		    })
		},
		mounted(){
			if(window.plus){
	            this.plusReady();
	        }else{
	            document.addEventListener('plusready',this._initScroll,false);
	        }
		},
		methods:{
           _initScroll () {
		      this.scroll = new BScroll(this.$refs.wrapper, {
		        click: true,
		        scrollY: true,
		        probeType: 3,
		        bounce:{
		        	top: false,
							bottom: true,
							left: false,
							right: false
		        }
		      })
		        this.scroll.on('scroll',(res)=>{
		        	if(Math.abs(Math.round(res.y)/100) >= 1){
						this.$store.state.isActive = true;
						this.$store.state.isDefault = false;
//						plus.navigator.setStatusBarBackground('#FFFFFF');
					}else{
						this.$store.state.isActive = false;
						this.$store.state.isDefault = true;
//						plus.navigator.setStatusBarBackground('transparent');
					}
	            })
		    },
		    go(){
		    	this.$router.push('/view');
		    }
		},
		computed:{
			...mapState({
				appHeight: state => state.appHeight
			}),
			ah(){
				return this.$store.state.appHeight;
			}
		},
		watch:{
			ah(val){
				if(val != 0){
					document.getElementsByClassName('wrapper')[0].style.top = document.getElementsByClassName('wrapper')[0].offsetTop + this.$store.state.appHeight + 'px';
				}
			}
		}

	}
</script>

<style lang="scss" scoped="scoped">
@import '../../font/iconfont.css';
@import '../../style/mixin.scss';

	img[lazy=loading] {
	  width: 100%;
	  height: 100%;
	  margin: auto;
	  background: url(../../assets/loading.gif) no-repeat center;
	}
	.wrapper{
	  width: 100%;
	  position:absolute;
	  top: 0.84rem;
	  bottom: 1.01rem;
	  overflow: hidden;
	}
	.bg{
		height: 2.66rem;
		background: transparent;
	}
	.main-icons{

		padding: 0.25rem 0.2rem 0 0.2rem;
		border-bottom: 1px solid #EEEEEE;
		background: #fff;
	}
	.icons-item{
		height: 1.5rem;
		text-align: center;
		margin-bottom: 0.25rem;
		div{
			width: 100%;
			padding:0 0.2rem;
			img{
				width: 100%;
				float:left;
				margin-bottom: 0.1rem;
			}
			span{
				letter-spacing: 3px;
				font-size: 0.24rem;
				float:left;
				width: 100%;
			}
		}
	}
	.tips{
		height: 0.75rem;
		line-height: 0.75rem;
		font-size: 0.28rem;
		padding-left: 0.25rem;
		background: #fff;
		border-top: 0.01rem solid #F5F5F5;
		i{
			float:right;
			margin-right: 0.25rem;
			color: #A8A8A8;
			font-size: 0.4rem;
			font-weight: bold;
		}
	}

	.line{
		height: 0.2rem;
		background: #F5F5F5;
	}
	.title-gong{
		height: 0.9rem;
		border-bottom: 0.02rem solid #EEEEEE;
		line-height: 0.9rem;
		padding: 0 0.2rem;
		background: #FFFFFF;
		span{
			float:left;
			font-size: 0.28rem;
			color: #333333;
		}
		ul{
			float: right;
			li{
				height: 0.3rem;
				line-height: 0.3rem;
				margin-top: 0.3rem;
				padding:0  0.2rem;
				span{
					font-size: 0.26rem;
				}
			}
			li:nth-child(2){
				border-right: 0.02rem solid #F5F5F5;
			}
		}
	}
	.filter{
		height: 0.69rem;
		line-height: 0.69rem;
/*		padding: 0 0.2rem;*/
		width: 100%;
		background: #FFFFFF;
		border-bottom: 0.02rem solid #EEEEEE;
		li{
			text-align: center;
			span{
				font-size: 0.26rem;
			}
			i{
				color: #CCCCCC;
				font-size: 0.16rem;

			}
		}
	}
	.dl-content{
		background: #FFFFFF;
		dl{
			padding: 0.2rem;
			dt{
				width: 2.8rem;
				height: 1.8rem;
				margin-right: 0.2rem;
				img{
					width: 100%;
					height: 100%;
					@include borderRadius(5px);
				}
			}
			dd{
				position: relative;
				div:nth-child(1){
					span{
						font-size: 0.28rem;
						color: #333333;
					}
				}
				.user-content{
					position: absolute;
					left: 0;
					bottom: 0;
					height: 0.6rem;
					img{
						width: 0.6rem;
						height: 0.6rem;
						@include borderRadius(50%);
						float:left;
						margin-right: 0.15rem;
					}
					.user-text{
						float:left;
						span{
							font-size: 0.24rem;
							color: #666666;
							display: block;
						}
					}
				}
			}
		}
	}
</style>