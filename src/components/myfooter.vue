<template>
	<div class="myfooter">
		<ul flex="dir:left main:center cross:center box:mean">
			<router-link tag="li" to="/home" active-class = "active">
				<i class="iconfont">&#xe62e;</i>
				<span>首页</span>
			</router-link>
			<router-link tag="li" to="/discover" active-class = "active">
				<i class="iconfont">&#xe60c;</i>
				<span>发现</span>
			</router-link>
			<router-link tag="li" to="/add" class="home-add">
				<i class="iconfont">&#xe600;</i>
			</router-link>
			<router-link tag="li" to="/ticket" active-class = "active">
				<i class="iconfont">&#xe602;</i>
				<span>旅行家</span>
			</router-link>
			<router-link tag="li" to="/my" active-class = "active">
				<i class="iconfont">&#xe635;</i>
				<span>我的</span>
			</router-link>
		</ul>
	</div>
</template>

<script>

</script>

<style lang="scss" scoped="scoped">
@import '../font/iconfont.css';

.myfooter{
		width: 100%;
		height: 1rem;
		border-top: 0.01rem solid #D6D6D6;
		background: #F8F8F8;
		position: fixed;
		left: 0;
		bottom: 0;
		color: #666666;
		ul{
			width: 100%;
			height: 100%;
			padding-top: 0.14rem;
			li{
				height: 100%;
				i{
					font-size:0.46rem;
					line-height: 0.5rem;
					display: block;
					text-align: center;
				}
				span{
					display: block;
					text-align: center;
					font-size: 0.16rem;
				}
			}
			.home-add i{
				font-size: 0.8rem;
				line-height: 0.6rem;
				color: #31CCCD;
			}
		}

	}
	.active{
		i{
			color:#31CCCD;
		}
		span{
			color:#31CCCD;
		}
	}
</style>