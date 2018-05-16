<template>
	<div class="discover-wrapper" ref="discoverWrapper">
		<div class="content">
			<div class="img-swiper">
				<mt-swipe :auto="0" :prevent="true">
				  <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
				  	<img v-lazy="item.img"/>
				  	<span>{{item.text}}</span>
				  </mt-swipe-item>
				</mt-swipe>
			</div>
			<ul class="navbar" flex="dir:left main:center cross:center box:mean">
				<li v-for="(item,index) in navbarList" :key="index" @click="pushRoute(index,$event)" :class="chooseId == index ? 'active':''">
					<span>{{item}}</span>
				</li>
			</ul>
			<keep-alive>
				<router-view class="Router"/>
			</keep-alive>

		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import publicFunction from '../../js/public.js'
	import { mapState } from 'vuex'

	import d1 from '../../assets/discover/d1.jpg';
	import d2 from '../../assets/discover/d2.jpg';
	import d3 from '../../assets/discover/d3.jpg';
	import d4 from '../../assets/discover/d4.jpg';
	import d5 from '../../assets/discover/d5.jpg';
	export default{
		data(){
			return{
				bannerList:[
					{img:d1,text:'最是一年春好处，行歌踏暖园中行'},
					{img:d2,text:'最是一年春好处，行歌踏暖园中行'},
					{img:d3,text:'最是一年春好处，行歌踏暖园中行'},
					{img:d4,text:'最是一年春好处，行歌踏暖园中行'},
					{img:d5,text:'最是一年春好处，行歌踏暖园中行'}
				],
				navbarList:[
					'推荐','自驾','美食','亲子','好友'
				],
				chooseId:'0'
			}
		},
		created(){
//			this.$router.push('/discover/dischildren1');
			this.$nextTick( () => {
		        this._initScroll();
		    })
		},
		methods:{
			_initScroll(){
				this.discoverscroll = new BScroll(this.$refs.discoverWrapper, {
			        click: true,
			        scrollY: true,
			        probeType: 3
			      })
			},
			pushRoute(index,$event){
//				$event.currentTarget.classList.add('active');
//				publicFunction.siblings($event.currentTarget).forEach(function(item){
//					item.classList.remove('active');
//				})
//				index = index + 1;
//				this.$router.push('/discover/dischildren' + index);
				this.chooseId = index;
				this.$store.state.chooseIndex = index;
		}

   		},
   		computed:{
   			...mapState({
   				chooseIndex: state => state.chooseIndex
   			}),
   			getChooseIndex(){
				return this.$store.state.chooseIndex;
			}
   		},
   		watch:{
   			getChooseIndex(index){
   				var temp = index + 1;
   				this.$router.push('/discover/dischildren' + temp)
   			},
   			$route(to,from){
   				//监听路由还原同时，导航也还原
   				if(to.path == '/discover/dischildren1'){
   					this.chooseId = 0;
   				}
   			}

   		}
	}
</script>

<style lang="scss" scoped="scoped">

	img[lazy=loading] {
	  width: 100%;
	  height: 100%;
	  margin: auto;
	  background: url(../../assets/loading.gif) no-repeat center;
	}
	.discover-wrapper{
		width: 100%;
		position: absolute;
		overflow: hidden;
		top: 0;
		bottom: 1.01rem;
	}
	.img-swiper{
		height:5rem;
		.mint-swipe-item{
			img{
				width: 100%;
				height: 100%;
			}
			span{
				position: absolute;
				left: 0.2rem;
				bottom: 0.5rem;
				font-size: 0.30rem;
				color: #FFFFFF;
				letter-spacing: 2px;
			}
		}
	}
	.navbar{
		width: 100%;
		height: 0.88rem;
		border-bottom: 0.01rem solid #EEEEEE;
		li{
			height: 0.85rem;
			line-height: 0.85rem;
			text-align: center;
			color: #333333;
			span{
				font-size: 0.32rem;
			}
		}
	}
	.active{
		border-bottom: 0.03rem solid #31CCCD;
		span{
			color: #31CCCD;
		}
	}
	.Router{
		width :100%;
  		transition: all .3s ease;
	  	/*slide-right-leave-active 右滑动 左路由*/
	  	/*在过渡的结束状态 跳向下一个的页面的透明度要设置为0  过渡结束的时候都是不显示的*/
     	/*slide-right-enter中的透明度为0 代表过渡刚进入也是不显示的*/

	}
	/*.slide-left-enter, .slide-right-leave-active {
  			/*opacity :0;*/
  			/*transform :translateX(100%);
  		}*/

    	/*向左滑动 其实路由向右走 然后*/
  		/*.slide-left-leave-active, .slide-right-enter{*/
  			/*opacity:0;*/
	    	/*transform:translateX(-100%);*/
  		/*}*/
</style>
<style>
	.mint-swipe-indicators{
		left: 80%;
	}
	.mint-swipe-indicator{
		background: #808285;
		opacity: 0.8;
	}
</style>