import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home'
import Find from '../components/Find'
import Cart from '../components/Cart'
import Mine from '../components/Mine'

// 创建路由实例，并且配置路由规则
export default new VueRouter({
  // 这里写路由规则
  routes: [
    // 这个path就是router-link里的to跳转的地址
    // component就是根据路由地址，找到对应的组件，显示到router-view中
    { path: '', component: Home },
    { path: '/home', component: Home },
    { path: '/find', component: Find },
    { path: '/cart', component: Cart },
    { path: '/mine', component: Mine }
  ]
})