<template>
	<div class="view" id="view">
		<insearch></insearch>
			<div class="page-loadmore-wrapper wrapper" ref="wrapper">
				<div class="content">	
				<!--:auto-fill="false"解决页面首次加载内容是异步加载，导致pull-up自动执行的问题-->
				<mt-loadmore :auto-fill="false" :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
				<ul class="page-infinite-list">
					<li v-for="(item,index) in list" :key="index">
						<div class="detail" flex="dir:left box:justify cross:center">
							<img v-lazy="item.img"/>
							<div class="details">
								<p class="title">
									<span>{{item.title}}</span>
								</p>
								<p class="stars">
									<i class="iconfont">&#xe61b;</i>
									<i class="iconfont">&#xe61b;</i>
									<i class="iconfont">&#xe61b;</i>
									<i class="iconfont">&#xe61b;</i>
									<i class="iconfont">&#xe61b;</i>
									<span>{{item.count}}</span>
									<span>条评论</span>
									<div class="clear"></div>
								</p>
								<p class="keywords">
									<span v-for="(value,index) in item.keys" :key="index">{{value}}</span>
								</p>
								<p class="distance">
									<span>{{item.distance}}</span>
								</p>
							</div>
							<div class="price">
								<span>{{item.price}}</span>
								<span>起</span>
							</div>
						</div>
						<div class="new-comment">
							<span>{{item.comment}}</span>
						</div>
					</li>
				</ul>
				<div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
				<div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
				</mt-loadmore>
			</div>
		</div>
</div>
</template>

<script>
	import insearch from '@/page/index/insearch'
	import { mapState } from 'vuex'
	import BScroll from 'better-scroll'
	import { getData } from '../../api/api'
	
	export default{
		data(){
			return{
				list:[],
				allLoaded: false,//全部加载完
				wrapperHeight:0,
				topStatus:'',
				bottomStatus:''
			}
		},
		created(){
			this.$nextTick( () => {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							probeType: 3
						})
				})
				getData().then(res=>{
					this.list = res;
				})
		
		},
		mounted(){
				document.getElementById('view').style.paddingTop = this.$store.state.appHeight + 'px';
				this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
		},
		components:{
				insearch
		},
		computed:{
				...mapState({
					appHeight: state => state.appHeight
				})
		},
		methods:{
			handleTopChange(status) {
        this.topStatus = status;
      },
			loadTop() {
				setTimeout(() => {
          getData().then(res=>{
						this.list = res;
					})
          this.$refs.loadmore.onTopLoaded();
        }, 1500);

			},
			handleBottomChange(status) {
        this.bottomStatus = status;
      },
			loadBottom() {
					setTimeout(() => {
						getData().then(res=>{
							let temp = res;
							this.list = this.list.concat(temp);
						})
						// this.allLoaded = true;
						this.$refs.loadmore.onBottomLoaded();
					}, 1500);
				
      }
		}

	}
</script>

<style scoped="scoped" lang="scss">
@import '../../font/iconfont.css';
@import '../../style/mixin';
	img[lazy=loading] {
	  width: 100%;
	  height: 100%;
	  margin: auto;
	  background: url(../../assets/loading.gif) no-repeat center;
	}
	.view{
		width: 100%;
	}
	.page-loadmore-wrapper{
		width:100%;
		position: absolute;
		top: 1.96rem;
		bottom: 1.01rem;
		overflow-y:scroll;
		ul{
			li{
				padding: 0.2rem;
				.detail{
					width:100%;
					height: 1.6rem;
					img{
						width: 2.2rem;
						height: 100%;
						float:left;
						@include borderRadius(5px);
						margin-right: 0.2rem;
					}
					.details{
						.title{
							span{
								font-size:0.32rem;
								color:#333333;
							}
							margin-bottom:0.15rem;
						}
						.stars{
							line-height:0.3rem;
							i{
								color: #31CCCD;
								font-size:0.26rem;
								float:left;
							}
							span{
								font-size:0.24rem;
								color:#333333;
								float:left;
								line-height:0.3rem;
								margin-left:0.1rem;
							}
							span:last-child{
								margin-left:0;
							}
						}
						.keywords{
							margin-top:0.05rem;
							span{
								font-size:0.24rem;
								color:#FF953F;
								line-height:0.4rem;
							}
						}
						.distance{
							font-size:0.24rem;
							color:#888888;
						}
					}
					.price{
						width:1.5rem;
						text-align:right;
						span:nth-child(1){
							font-size:0.32rem;
							color:#FF6D4A;
						}
					}
				}
				.new-comment{
					background:#FAFAFA;
					margin-top:0.2rem;
					padding:0.1rem;
					span{
						font-size:0.24rem;
						color:#8C8C8C;
					}
				}
			}
		}
	}
</style>
<style>
	.mint-spinner-snake {
		display: inline-block;
		vertical-align: middle;
	}
</style>