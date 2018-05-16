 <template>
	<div :class="{myheader: true,default: isDefault,active: isActive}" id="myheader">
			<div class="title" flex="dir:left main:center cross:center box:justify">
				<div class="place">
					<span>上海</span>
					<i class="iconfont">&#xe601;</i>
				</div>
				<div class="search">
					<input type="text" v-model="searchValue" @focus="iptfocus()" @blur="iptblur()"/>
					<div class="placeholders" v-show="isSearch">
						<i class="iconfont">&#xe661;</i>
						<span>城市/地名</span>
						<div class="clear"></div>
					</div>
				</div>
				<div class="sign">
					<i class="iconfont">&#xe606;</i>
					<span>签到</span>
				</div>
			</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		data(){
			return{
				searchValue:'',
				isSearch: true,
			}
		},
		mounted(){
			if(window.plus){
	            this.plusReady();
	        }else{
	            document.addEventListener('plusready',this.plusReady,false);
	        }
		},
		methods:{
			iptfocus(){
				this.isSearch = false;
			},
			iptblur(){
				if(this.searchValue == ''){
					this.isSearch = true;
				}else{
					this.isSearch = false;
				}
			},
			plusReady(){
				var apph = plus.navigator.getStatusbarHeight();
				this.$store.state.appHeight = apph;
//				document.getElementById('myheader').style.height = document.getElementById('myheader').offsetHeight + apph + 'px';
				document.getElementById('myheader').style.paddingTop = apph + 'px';
            }
		},
		computed:{
			...mapState({
				isActive: state => state.isActive,
				isDefault: state => state.isDefault,
				appHeight: state => state.appHeight
			})
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import '../../font/iconfont.css';
	@import '../../style/mixin.scss';
	.myheader{
		height: 3.42rem;
		width: 100%;
	}
	.active{
		background: url(../../assets/index/default-bg.png) no-repeat;
		background-size: cover;
		.title{
			width: 100%;
			background-color:rgba(255,255,255,1);
			transition: background-color 1.5s;
		}
		.place{
			span{
				color: #31CCCD;
			}
			i{
				color: #31CCCD;
			}
		}
		.sign{
			span{
				color: #31CCCD;
			}
		}
	}
	.default{
		background: url(../../assets/index/bg2.jpg) no-repeat;
		background-size: cover;
		.title{
			width: 100%;
			background-color:rgba(0,0,0,0);
			transition: background-color 1.5s;
		}
		.place{
			span{
				color: #fff;
			}
			i{
				color: #fff;
			}
		}
		.sign{
			span{
				color: #fff;
			}
		}
	}
	.title{
		height: 0.84rem;
		padding: 0.12rem 0;
		line-height: 0.6rem;
		background-color:rgba(0,0,0,0);
	}
	.place{
		width: 1.89rem;
		line-height: 0.6rem;
		text-align: right;
		span{
			font-size: 0.30rem;
			color: #fff;
			letter-spacing: 3px;
			margin-right: 0.1rem;
		}
		i{
			font-size: 0.24rem;
			color: #FFFFFF;
			margin-right: 0.16rem;
		}
	}
	.sign{
		width: 1.89rem;
		height: 0.6rem;
		line-height: 0.6rem;
		text-align: left;
		span{
			font-size: 0.26rem;
			color: #fff;
			letter-spacing: 1px;
			margin-left: 0.1rem;
			float:left;
		}
		i{
			font-size: 0.5rem;
			color: #FFC420;
			margin-left: 0.4rem;
			float:left;
		}
	}
	.search{
		height: 0.6rem;
		padding: 0 0.74rem;
		line-height: 0.6rem;
		background: #f5f5f5;
		position: relative;
		@include borderRadius(20px);
		input{
			background: #f5f5f5;
			width: 100%;
			height: 0.6rem;
			float:left;
		}
		.placeholders{
			position: absolute;
			left: 0.74rem;
			top: 0;
			height: 0.6rem;
			line-height: 0.6rem;
			i{
				float:left;
				font-size: 0.34rem;
				color: #CCCCCC;
			}
			span{
				float:left;
				font-size: 0.24rem;
				color: #CCCCCC;
			}
		}
	}
</style>