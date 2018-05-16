<template>
	<div class="selfdriving">
		<ul class="content-list">
			<li>
				<div class="samll-title">
					<span>798看展，故宫穿越，周末去北京遛个弯儿</span>
				</div>
				<div class="author">
					<img src="../../assets/index/air.png"/>
					<span>郭文文530</span>
				</div>
				<div class="swiperimg-wrapper" ref="swiperimgWrapper">
					<ul class="swiperimg-ul">
						<li v-for='(item,index) in imgList' :key="index" class="swiperimg-ul-li">
				        	<img v-lazy="item.img"/>
						</li>
					</ul>
				</div>
				<ul class="keyword">
					<li>
						<span>#人文</span>
					</li>
					<li>
						<span>#美食</span>
					</li>
					<li>
						<span>#家庭</span>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>


<script>
	import BScroll from 'better-scroll';
	import img1 from '../../assets/index/hanshansi.jpg';
	import img2 from '../../assets/index/chang.jpg';
	import img3 from '../../assets/index/hai.jpg';
	import img4 from '../../assets/index/teng.jpg';
	import img5 from '../../assets/index/zhong.jpg';
	export default{
		data(){
			return{
				imgList:[
					{img:img1},
					{img:img2},
					{img:img3},
					{img:img4},
					{img:img5}
				]
			}
		},
		created(){
			this.$nextTick(() => {
		    	this.swiperimgScroll = new BScroll(this.$refs.swiperimgWrapper, {
			        click: true,
			        scrollX: true
		      	})
		    })
		},
		mounted(){
			this.$nextTick(() => {
				document.getElementsByClassName('swiperimg-ul')[0].style.width = this.imgList.length * document.getElementsByClassName('swiperimg-ul-li')[0].offsetWidth + parseFloat(window.getComputedStyle(document.getElementsByClassName('swiperimg-ul-li')[0]).marginRight) * (this.imgList.length + 1) + 'px';
			})
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
.content-list{
	overflow:hidden;
	li{
		width: 100%;
		padding:0 0.3rem;
		float:left;
		.samll-title{
			height: 0.9rem;
			line-height: 0.9rem;
			font-size: 0.34rem;
			color: #333333;
		}
		.author{
			height: 0.6rem;
			img{
				width: 0.6rem;
				height: 0.6rem;
				float:left;
				margin-right: 0.15rem;
			}
			span{
				float:left;
				font-size: 0.24rem;
				color: #666;
				line-height: 0.6rem;
			}
		}
		.swiperimg-wrapper{
			width: 100%;
			height: 1.8rem;
			margin: 0.2rem 0;
			overflow: hidden;
			.swiperimg-ul{
				li{
					padding: 0;
					width: 2.8rem;
					height: 1.8rem;
					margin-right: 0.1rem;
					img{
						width: 100%;
						height: 100%;
						@include borderRadius(5px);
					}
				}
			}
		}
		.keyword{
			height: 0.9rem;
			line-height: 0.9rem;
			li{
				float:left;
				text-align: center;
				width: auto;
				padding-left: 0;
				span{
					color: #31CCCD;
					font-size: 0.3rem;
				}
			}
		}
	}
}

</style>