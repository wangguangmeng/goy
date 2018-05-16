<template>
	<div class="ticket-wrapper" ref="ticketWrapper">
		<div class="content">
			<div class="title">
				<ul class="lists">
					<li v-for="(item,index) in placeLists" :key="index" @click="changeBg(index,$event)">
						<span>{{item}}</span>
					</li>
				</ul>
			</div>
			<ul class="name-lists">
				<li flex="dir:left box:first" v-for="(item,index) in listContent" :key="index">
					<img v-lazy="item.img"/>
					<div class="right">
						<div class="right-title">
							<span>{{item.name}}</span>
						</div>
						<div class="right-content">
							<span>{{item.desc}}</span>
						</div>
						<div class="right-btns">
							<span>{{item.price}}</span>
							<span>马上抢</span>
							<span>￥ <span>{{item.activity}}</span>起</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import publicFunction from '../../js/public.js'
	import img1 from '../../assets/index/bg2.jpg'
	import img2 from '../../assets/index/ao.jpg'
	import img3 from '../../assets/index/bei.jpg'
	import img4 from '../../assets/index/chang.jpg'
	import img5 from '../../assets/index/ha.jpg'
	import img6 from '../../assets/index/hai.jpg'
	import img7 from '../../assets/index/qiandaohu.jpg'
	import img8 from '../../assets/index/xihu.jpg'
	import img9 from '../../assets/index/teng.jpg'
	import img10 from '../../assets/index/la.jpg'

	export default{
		data(){
			return {
				placeLists:['上海','江苏','广西','海南','北京','福建','浙江','查看更多'],
				listContent:[
					{img:img1,name:'东方明珠广播电视塔',desc:'东方明珠广播电视塔，亚洲第一，世界第三高塔，是上海的地标之一。',price:'票面价 ￥160',activity:'120'},
					{img:img2,name:'辰山植物园',desc:'由上海市政府与中国科学院以及国家林业局、中国林业科学研究院合作共建，是一座集科研、科普、人文、自然、好看',price:'票面价 ￥60',activity:'58'},
					{img:img3,name:'天安门',desc:'东方明珠广播电视塔，亚洲第一，世界第三高塔，是上海的地标之一。',price:'票面价 ￥160',activity:'120'},
					{img:img4,name:'大观园',desc:'东方明珠广播电视塔，亚洲第一，世界第三高塔，是上海的地标之一。',price:'票面价 ￥160',activity:'120'},
					{img:img5,name:'白塔寺',desc:'东方明珠广播电视塔，亚洲第一，世界第三高塔，是上海的地标之一。',price:'票面价 ￥2160',activity:'1210'},
					{img:img6,name:'南京长江大桥',desc:'东方明珠广播电视塔，亚洲第一，世界第三高塔，是上海的地标之一。',price:'票面价 ￥260',activity:'140'},
					{img:img7,name:'千岛湖',desc:'东方明珠广播电视塔，亚洲第一，世界第三高塔，是上海的地标之一。',price:'票面价 ￥180',activity:'100'},
					{img:img8,name:'雷峰塔',desc:'东方明珠广播电视塔，亚洲第一，世界第三高塔，是上海的地标之一。',price:'票面价 ￥199',activity:'90'},
					{img:img9,name:'滕王阁',desc:'东方明珠广播电视塔，亚洲第一，世界第三高塔，是上海的地标之一。',price:'票面价 ￥1120',activity:'220'},
					{img:img10,name:'布达拉宫',desc:'东方明珠广播电视塔，亚洲第一，世界第三高塔，是上海的地标之一。',price:'票面价 ￥990',activity:'270'}
				]
			}
		},
		created(){
			this.$nextTick( () => {
		        this._initScroll()
		    })
		},
		mounted(){
			document.getElementsByClassName('lists')[0].firstElementChild.classList.add('active');
		},
		methods:{
			_initScroll () {
		      this.ticketscroll = new BScroll(this.$refs.ticketWrapper, {
		        click: true,
		        scrollY: true,
		        probeType: 3
		      })
		  },
		  changeBg(index,$event){
		  	$event.currentTarget.classList.add('active');
			publicFunction.siblings($event.currentTarget).forEach(function(item){
				item.classList.remove('active');
			})
		  }
		}
	}
</script>

<style lang="scss" scoped="scoped">
@import '../../style/mixin.scss';
img[lazy=loading] {
  width: 100%;
  height: 100%;
  margin: auto;
  background: url(../../assets/loading.gif) no-repeat center;
}
.ticket-wrapper{
	background: #1BFFD7;
	overflow: hidden;
	top: 0;
	bottom: 1.01rem;
	position: absolute;
	width: 100%;
}
.title{
	background: url(../../assets/ticket/ticket.png) no-repeat center;
	background-size: 100% 100%;
	width: 100%;
	height: 4.8rem;
	padding: 0 0.16rem;
	position: relative;
	.lists{
		position:absolute;
		bottom:0.13rem;
		overflow:hidden;
		li{
			width: 1.66rem;
			height: 0.56rem;
			margin-bottom: 0.12rem;
			background: url(../../assets/ticket/tbg.png) no-repeat center;
			background-size: 100% 100%;
			text-align: center;
			line-height: 0.56rem;
			float:left;
			margin-right: 0.18rem;
			span{
				color: #FFFFFF;
				font-size: 0.28rem;
				letter-spacing: 1px;
			}
		}
		li:nth-child(4n){
			margin-right:0;
		}
		.active{
			background: url(../../assets/ticket/tbgclick.png) no-repeat center;
			background-size: 100% 100%;
		}
	}
}
.name-lists{
	padding: 0 0.16rem;
	li{
		height: 1.88rem;
		margin-bottom: 0.12rem;
		img{
			width: 2.32rem;
			height: 100%;
		}
		.right{
			padding-left: 0.2rem;
			height: 100%;
			background: #FFFFFF;
			.right-title{
				height:0.6rem;
				line-height: 0.6rem;
				span{
					font-size: 0.28rem;
					color: #333333;
					font-weight: bold;
				}
			}
			.right-content{
				height: 0.6rem;
				padding-right: 0.42rem;
				span{
					color: #666;
					font-size:0.24rem;
					line-height: 0.3rem;
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
			.right-btns{
				height: 0.68rem;
				line-height: 0.68rem;
				span:nth-child(1){
					color: #666;
					font-size:0.24rem;
				}
				span:nth-child(3){
					color: #FA1648;
					font-size:0.24rem;
					float:right;
					span{
						color: #FA1648;
						font-size:0.34rem;
						font-weight: bold;
					}
				}
				span:nth-child(2){
					color: #fff;
					font-size:0.24rem;
					float:right;
					width: 1.2rem;
					height: 0.5rem;
					line-height: 0.5rem;
					text-align: center;
					@include borderRadius(5px);
					background: #FA1648;
					margin: 0 0.2rem;
					margin-top: 0.05rem;
				}
			}
		}
	}
}
</style>