<template>
  <div id="app" v-cloak>
  	<transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
	  	<keep-alive>
	    	<router-view/>
	    </keep-alive>
    </transition>
    <myfooter/>
  </div>
</template>

<script>
	import myfooter from '@/components/myfooter.vue'
	import {mapState,mapActions} from 'vuex'
	export default {
	  name: 'App',
	  components:{
	  	myfooter
	  },
	  computed:{
	  	...mapState({
	  		direction: state => state.direction
	  	})
	  }
	}
</script>

<style>
@import 'style/common.scss';
[v-cloak]{
	display: none;
}
#app{
	font-size: 0.14rem;
	height: 100%;
}
.vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;/*提前通知浏览器元素将要做什么动画，让浏览器提前准备合适的优化设置IE13+、chrome49+、safari9.1+、IOS9.3+、Android52+*/
    transition: all 250ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;/*当元素不面向屏幕时是否可见*/
    perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

</style>
