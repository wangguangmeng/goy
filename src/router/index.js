import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
	  {
			path:'/',
			component: resolve => require(['@/page/index/home'], resolve),
			redirect:'/home'
		},
		{
			path:'/home',
			name:'home',
			component: resolve => require(['@/page/index/home'], resolve),
			meta:{keepAlive:true}
		},
		{
			path:'/view',
			name:'view',
			component: resolve => require(['@/page/index/view'], resolve),
			meta:{keepAlive:true}
		},
		{
			path:'/discover',
//			name:'discover', //有默认子路由时父元素不能设置name
			component: resolve => require(['@/page/discover/discover'], resolve),
			meta:{keepAlive:true},
			redirect: '/discover/dischildren1',
			children:[
				{
					path:'dischildren1',
					name:'dischildren1',
					component: resolve => require(['@/page/discover/dischildren1'], resolve)
				},
				{
					path:'dischildren2',
					name:'dischildren2',
					component: resolve => require(['@/page/discover/dischildren2'], resolve)
				},
				{
					path:'dischildren3',
					name:'dischildren3',
					component: resolve => require(['@/page/discover/dischildren3'], resolve)
				},
				{
					path:'dischildren4',
					name:'dischildren4',
					component: resolve => require(['@/page/discover/dischildren4'], resolve)
				},
				{
					path:'dischildren5',
					name:'dischildren5',
					component: resolve => require(['@/page/discover/dischildren5'], resolve)
				}
			]
		},
		{
			path:'/ticket',
			name: 'ticket',
			component: resolve => require(['@/page/ticket/ticket'], resolve),
			meta:{keepAlive:true}
		},
		{
			path:'/my',
			name: 'my',
			component: resolve => require(['@/page/my/my'], resolve),
			meta:{keepAlive:true}
		},
		{
			path:'/add',
			name: 'add',
			component: resolve => require(['@/page/add/add'], resolve),
			meta:{keepAlive:true}
		},
		{
			path:'/login',
			name:'login',
			component: resolve => require(['@/page/my/login'], resolve)
		},
		{
			path:'/register',
			name:'register',
			component: resolve => require(['@/page/my/register'], resolve)
		}
  ]
})
