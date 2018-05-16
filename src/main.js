// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import 'flex.css'
import store from './store'

import VueTouch from 'vue-touch'
FastClick.attach(document.body)

import { Swipe, SwipeItem,Lazyload,InfiniteScroll,Spinner,Loadmore  } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);
Vue.use(Lazyload)
Vue.use(InfiniteScroll);
Vue.component('mt-spinner', Spinner);
Vue.component('mt-loadmore', Loadmore);

Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})

//给路由增加一个索引存到sessionStorage里面，已点击过的路由的索引值不变，新增加的路由的索引增加1，同时count+1，这样在页面切换时通过比较索引值的大小，大的向右小的向左，做到左右有规律的过渡
const history = window.sessionStorage;
let historyCount = history.getItem('count') * 1;
router.beforeEach(function (to, from, next) {

  const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount;
    history.setItem('count', historyCount);
    to.path !== '/' && history.setItem(to.path, historyCount);
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1];
    window.location.href = `http${url}`
  } else {
    next()
  }
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
