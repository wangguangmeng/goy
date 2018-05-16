<template>
	<div class="swiperplace-wrapper" ref="swiperplaceWrapper">
		<ul class="swiperplace-ul">
			<li v-for='(item,index) in box3Content' :key="index" class="swiperplace-ul-li">
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

	import img1 from '../assets/index/bei.jpg';
	import img2 from '../assets/index/ha.jpg';
	import img3 from '../assets/index/la.jpg';
	import img4 from '../assets/index/teng.jpg';
	import img5 from '../assets/index/xuan.jpg';
	import img6 from '../assets/index/zhong.jpg';
	import img7 from '../assets/index/chang.jpg';
	import img8 from '../assets/index/hai.jpg';
	import img9 from '../assets/index/yin.jpg';
	import img10 from '../assets/index/ao.jpg';
	export default{
		data(){
			return{
				box3Content:[]
			}
		},
		created(){
			this.$nextTick(() => {
		    this.swiperplaceScroll = new BScroll(this.$refs.swiperplaceWrapper, {
		        click: true,
		        scrollX: true
		      })
		    })
		},
		mounted(){
			this.init();
			this.$nextTick(() => {
				document.getElementsByClassName('swiperplace-ul')[0].style.width = this.box3Content.length * document.getElementsByClassName('swiperplace-ul-li')[0].offsetWidth + parseFloat(window.getComputedStyle(document.getElementsByClassName('swiperplace-ul-li')[0]).marginLeft) * (this.box3Content.length + 2) + 'px';
			})
		},
		methods:{
			init(){
				this.box3Content = [
					{img:img1,title:"北京",count:"10%",desc:'游客选择'},
					{img:img2,title:"哈尔滨",count:"20%",desc:'游客选择'},
					{img:img3,title:"拉萨",count:"15%",desc:'游客选择'},
					{img:img4,title:"南昌",count:"30%",desc:'游客选择'},
					{img:img5,title:"南京",count:"12%",desc:'游客选择'},
					{img:img6,title:"兰州",count:"18%",desc:'游客选择'},
					{img:img7,title:"长沙",count:"20%",desc:'游客选择'},
					{img:img8,title:"海口",count:"50%",desc:'游客选择'},
					{img:img9,title:"银川",count:"30%",desc:'游客选择'},
					{img:img10,title:"澳门",count:"25%",desc:'游客选择'}
				]
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

	.swiperplace-wrapper {
		width: 100%;
	  height: 3.4rem;
	  padding:0.1rem 0.25rem 0.4rem 0;
	  background: #fff;
	  .swiperplace-ul{
	  li {
		  width: 2.8rem;
		  height: 3.4rem;
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
		 	 	font-size: 0.32rem;
		 	 	color: #333333;
		 	 	display: block;
		 	 	text-align: center;
		 	 	margin-top: 0.3rem;
		 	 }
		 	 span:nth-child(3){
		 	 	display: block;
		 	 	line-height: 0.5rem;
		 	 	text-align: center;
		 	 	span:nth-child(1){
		 	 		color: #FF8E3F;
		 	 		font-size: 0.26rem;
		 	 		display: inline-block;
		 	 	}
		 	 	span:nth-child(2){
		 	 		color: #ACACAC;
		 	 		font-size: 0.26rem;
		 	 		display: inline-block;
		 	 		margin-top: 0;
		 	 	}
		 	 }
		  }
		}
		}
	}

</style>