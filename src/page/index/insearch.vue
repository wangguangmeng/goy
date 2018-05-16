<template>
	<div class="search">
		<div class="ipt-search" flex="dir:left box:justify">
			<i class="iconfont i-back" @click="back()">&#xe624;</i>
			<div class="div-ipt" flex="dir:left box:first">
				<div class="ipt-place">
					<i class="iconfont">&#xe601;</i>
					<span>上海</span>
				</div>
				<div class="ipt-text">
					<input type="text" />
					<div class="placeholder">
						<i class="iconfont">&#xe661;</i>
						<span>搜索景点名/地名</span>
					</div>
				</div>
			</div>
			<i class="iconfont i-location">&#xe675;</i>
		</div>
		<ul class="filter" flex="dir:left cross:center main:center box:mean">
			<li>
				<span>全部类型</span>
				<i class="iconfont">&#xe601;</i>
			</li>
			<li>
				<span>全部区域</span>
				<i class="iconfont">&#xe601;</i>
			</li>
			<li>
				<span>10千米</span>
				<i class="iconfont">&#xe601;</i>
			</li>
			<li>
				<span>推荐排序</span>
				<i class="iconfont">&#xe601;</i>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
@import '../../font/iconfont.css';
@import '../../style/mixin';
.ipt-search{
	height: 0.64rem;
	line-height: 0.64rem;
	padding: 0.2rem 0;
	width:100%;
	.i-back{
		font-size: 0.4rem;
		color: #333333;
		font-weight:bold;
		width:0.9rem;
		text-align: center;
	}
	.i-location{
		font-size: 0.4rem;
		color: #37CCCC;
		width:0.9rem;
		text-align: center;
	}
	.div-ipt{
		height: 0.64rem;
		.ipt-place{
			width: 1.4rem;
			background: #F5F5F5;
			@include borderRadius(30px 0 0 30px);
			margin-right: 0.05rem;
			span{
				font-size: 0.26rem;
				color: #333333;
				float:right;
				margin-right: 0.1rem;
			}
			i{
				font-size: 0.24rem;
				color: #D9D9D9;
				float:right;
				margin-right: 0.1rem;
				margin-top: 0.04rem;
			}
		}
		.ipt-text{
			background: #F5F5F5;
			@include borderRadius(0 30px 30px 0);
			position: relative;
			input{
				width: 80%;
				height: 100%;
				float:left;
				background: #F5F5F5;
				padding-left: 0.25rem;
				outline: 0;
			}
			.placeholder{
				position: absolute;
				margin-left: 0.25rem;
				i{
					color: #D2D3D3;
					font-size: 0.3rem;
					margin-right: 0.3rem;
				}
				span{
					color: #D2D3D3;
					font-size: 0.26rem;
				}
			}
		}
	}
}
.filter{
	height: 0.8rem;
	margin-top: 0.1rem;
	border-bottom: 0.02rem solid #E7E7E5;
	li{
		line-height: 0.4rem;
		border-right: 0.03rem solid #E7E7E5;
		text-align: center;
		span{
			font-size: 0.24rem;
			color: #333333;
			margin-right: 0.1rem;
		}
		i{
			font-size: 0.22rem;
			color: #CCCCCC;
		}

	}
	li:last-child{
		border-right: 0;
	}
}

</style>