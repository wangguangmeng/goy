<template>
	<div class="swipergo-wrapper" ref="swipergoWrapper">
		<ul class="swipergo-ul">
			<li v-for='(item,index) in box4Content' :key="index" class="swipergo-ul-li">
	        	<span>
	        		<img v-lazy="item.img"/>
	        		<span>{{item.title}}</span>
	        		<span>
	        			<span>{{item.count}}</span>
	        			<span>{{item.desc}}</span>
	        		</span>
	        	</span>
			</li>
		</ul>

	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import view1 from '../assets/index/hanshansi.jpg';
	import view2 from '../assets/index/konglong.jpg';
	import view3 from '../assets/index/leifengta.jpg';
	import view4 from '../assets/index/qiandaohu.jpg';
	import view5 from '../assets/index/sanguocheng.jpg';
	import view6 from '../assets/index/songcheng.jpg';
	import view7 from '../assets/index/yuanlin.jpg';
	import view8 from '../assets/index/yuantou.jpg';
	import view9 from '../assets/index/zhongshanlin.jpg';
	import view10 from '../assets/index/xihu.jpg';
	export default{
		data(){
			return{
				box4Content:[]
			}
		},
		created(){
			this.$nextTick(() => {
		    this.swipergoScroll = new BScroll(this.$refs.swipergoWrapper, {
		        click: true,
		        scrollX: true
		      })
		    })
		},
		mounted(){
			this.init();
			this.$nextTick(() => {
				document.getElementsByClassName('swipergo-ul')[0].style.width = this.box4Content.length * document.getElementsByClassName('swipergo-ul-li')[0].offsetWidth + parseFloat(window.getComputedStyle(document.getElementsByClassName('swipergo-ul-li')[0]).marginLeft) * (this.box4Content.length + 2) + 'px';
			})
		},
		methods:{
			init(){
				this.box4Content = [
					{img:view1,title:"苏州寒山寺1天1夜自由参观 不限时随便玩随便吃",count:"￥671",desc:'起'},
					{img:view2,title:"常州恐龙园五一不涨价 只要998 多出游玩 多种恐龙",count:"￥998",desc:'起'},
					{img:view3,title:"杭州西湖雷峰塔 去看法海 去看白娘子 去看许仙 去看小青",count:"￥199",desc:'起'},
					{img:view4,title:"双人价！杭州千岛湖中心湖区+宿五星开元度假区游玩",count:"￥740",desc:'起'},
					{img:view5,title:"无锡三国城+水浒城+梅园+市区一日游+小吃街免费吃 ",count:"￥350",desc:'起'},
					{img:view6,title:"杭州当地3天2晚自由行游宋城观千古情 泛舟千岛湖",count:"￥790",desc:'起'},
					{img:view7,title:"苏州园林2日游 体验国家级大师作品 达到艺术巅峰",count:"￥299",desc:'起'},
					{img:view8,title:"无锡太湖鼋头渚 像风一样的少年 吹着太湖的狂风",count:"￥99",desc:'起'},
					{img:view9,title:"南京中山陵 去找孙中山 去找蒋介石 去找宋庆龄和宋美龄姐妹",count:"￥599",desc:'起'},
					{img:view10,title:"杭州西湖 上面有的这里都有 想干啥干啥 想去哪去哪",count:"￥1099",desc:'起'}
				];
			},
		}
	}
</script>

<style lang="scss" scoped="scoped">
@import '../style/mixin.scss';
	img[lazy=loading] {
	  width: 100%;
	  height: 100%;
	  margin: auto;
	  background: url(../assets/loading.gif) no-repeat center;
	}

.swipergo-wrapper {
		width: 100%;
	  height: 3.4rem;
	  padding:0.1rem 0.25rem 0.4rem 0;
	  background: #fff;
	  .swipergo-ul{

	  li {
		  width: 2.8rem;
		  height: 3.42rem;
		  margin-left: 0.25rem;
		  text-align: left;
		  @include borderRadius(5px);
		  box-shadow: 0px 1px 8px #999;
		  overflow:hidden;
		  float:left;
		  span{
		  	img{
		  		width: 100%;
		  		height: 1.8rem;
		  	}
		  	span:nth-child(2){
		  		padding: 0 0.2rem;
		 	 	font-size: 0.24rem;
		 	 	color: #333333;
		 	 	text-align: left;
		 	 	margin-top: 0.1rem;
		 	 	overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
		 	 }
		 	 span:nth-child(3){
		 	 	display: block;
		 	 	line-height: 0.7rem;
		 	 	text-align: center;
		 	 	padding: 0 0.2rem;
		 	 	overflow: hidden;
		 	 	span:nth-child(1){
		 	 		color: #FF8E3F;
		 	 		font-size: 0.3rem;
		 	 		float:left;
		 	 		font-weight: bold;
		 	 	}
		 	 	span:nth-child(2){
		 	 		color: #ACACAC;
		 	 		font-size: 0.26rem;
		 	 		float:left;
		 	 		margin-top: 0;
		 	 	}
		 	 }
		  }
		}
	}
	}
</style>