<template>
  <div id="app">
    <!-- router-view是单页应用，路由切换时填充内容的容器，
      换句话说，就是每点击一个路由跳转，我们只是把router-view中的内容替换掉而已
     -->
    <router-view></router-view>
    <div class="tabbar">
      <router-link to="/home">外卖</router-link>
      <router-link to="/find">发现</router-link>
      <router-link to="/cart">订单</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app .tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1rem;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.18rem;
}


</style>
