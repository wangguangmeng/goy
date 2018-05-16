<template>
	<div class="swiperhouse-wrapper" ref="swiperhouseWrapper">
		<ul class="swiperhouse-ul">
			<li v-for='(item,index) in box2Content' :key="index" class="swiperhouse-ul-li">
	        	<span>
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
	import BScroll from 'better-scroll'
	export default{

		data(){
			return{
				box2Content:[]
			}
		},
		created(){
			this.$nextTick(() => {
		    this.swiperhouseScroll = new BScroll(this.$refs.swiperhouseWrapper, {
		        click: true,
		        scrollX: true
		      })
		    })
		},
		mounted(){
			this.init();
			this.$nextTick(() => {
				document.getElementsByClassName('swiperhouse-ul')[0].style.width = this.box2Content.length * document.getElementsByClassName('swiperhouse-ul-li')[0].offsetWidth + parseFloat(window.getComputedStyle(document.getElementsByClassName('swiperhouse-ul-li')[0]).marginLeft) * (this.box2Content.length + 2) + 'px';
			})
		},
		methods:{
			init(){
				this.box2Content = [
					{title:"浦东机场",count:"10%",desc:'游客选择'},
					{title:"南京步行街",count:"10%",desc:'游客选择'},
					{title:"迪士尼周边",count:"10%",desc:'游客选择'},
					{title:"欢乐谷",count:"10%",desc:'游客选择'},
					{title:"外滩",count:"10%",desc:'游客选择'},
					{title:"佘山",count:"10%",desc:'游客选择'},
					{title:"阳澄湖",count:"10%",desc:'游客选择'}
				]
			},
		}
	}
</script>

<style lang="scss" scoped="scoped">
@import '../style/mixin.scss';
.swiperhouse-wrapper {
		width: 100%;
	  height: 1.8rem;
	  padding:0.1rem 0.25rem 0.4rem 0;
	  background: #fff;
	  overflow: hidden;
	  .swiperhouse-ul{
	  	li {
		  width: 2.8rem;
		  height: 1.2rem;
		  margin-left: 0.25rem;
		  text-align: left;
		  @include borderRadius(5px);
		  box-shadow: 0px 1px 8px #999;
		  padding: 0.3rem 0.2rem;
		  float:left;
		  span{
		  	text-align: center;
		 	 span:nth-child(1){
		 	 	font-size: 0.32rem;
		 	 	color: #333333;
		 	 	display: block;
		 	 }
		 	 span:nth-child(2){
		 	 	display: block;
		 	 	line-height: 0.7rem;
		 	 	span:nth-child(1){
		 	 		color: #FF8E3F;
		 	 		font-size: 0.26rem;
		 	 		display: inline-block;
		 	 	}
		 	 	span:nth-child(2){
		 	 		color: #ACACAC;
		 	 		font-size: 0.26rem;
		 	 		display: inline-block;
		 	 	}
		 	 }
		  }
		}
	}
	}

</style>