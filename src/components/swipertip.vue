<template>
	<div class="swipertip-wrapper" ref="swipertipWrapper">
		<ul class="content-ul">
			<li v-for='(item,index) in box1Content' :key="index" class="content-ul-li">
				<span>{{item}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default{
		data(){
			return{
				box1Content:[]
			}
		},
		created(){
			this.$nextTick(() => {
		    this.swipertipScroll = new BScroll(this.$refs.swipertipWrapper, {
		        click: true,
		        scrollX: true
		      })
		    })
		},
		mounted(){
			this.init();
			this.$nextTick(() => {
				document.getElementsByClassName('content-ul')[0].style.width = this.box1Content.length * document.getElementsByClassName('content-ul-li')[0].offsetWidth + parseFloat(window.getComputedStyle(document.getElementsByClassName('content-ul-li')[0]).marginLeft) * (this.box1Content.length + 2) + 'px';
			})
		},
		methods:{
			init(){
				this.box1Content = ['中国铁路哈尔滨局集团有限公司关于调整部分列车运行时刻及停站等事项的公告',
					'中国铁路广州局集团有限公司关于2018年4月14日至4月22日间部分旅客列车临时停运的公告',
					'关于调整互联网、电话订票起售时间的公告',
					'关于微信方式发送购票通知服务的使用说明',
					'关于12306网站新增微信支付服务功能的公告',
					'接续换乘和选座功能使用说明']

			},
		}
	}
</script>

<style lang="scss" scoped="scoped">
@import '../style/mixin.scss';
.swipertip-wrapper {
	  width: 100%;
	  height: 1.8rem;
	  padding:0.1rem 0.25rem 0.4rem 0;
	  background: #fff;
	  overflow: hidden;
	  .content-ul{
	  	li {
		  width: 5.88rem;
		  height: 1rem;
		  margin-left: 0.25rem;
		  text-align: left;
		  @include borderRadius(5px);
		  box-shadow: 0px 1px 8px #999;
		  padding: 0.4rem 0.2rem;
		  float:left;
		  span{
		  	font-size: 0.24rem;
		 	color: #333333;
		 	overflow : hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		  }
		}
	  }

	}

</style>