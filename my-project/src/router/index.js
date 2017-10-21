import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import One from '@/components/one'
import Two from '@/components/two'
import Three from '@/components/three'
import Four from '@/components/four'
import Five from '@/components/five'
Vue.use(Router)
export default new Router({
	mode: 'history',
	linkActiveClass:"act",
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
    	path:"/one",
    	component:One,
    	children:[
    		{
    			path:"/one/1",
    			component:Two
    		},
    		{
    			path:"/one/2",
    			component:Three
    		},
    		{
    			path:"/one/3",
    			component:Four
    		},
    		{
    			path:"/one/4",
    			component:Five
    		}
    	]
    }
  ]
})
