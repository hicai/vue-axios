<template>
  <div id="app">
    <div id="nav">
      <router-link to="/lx">axios基本用法</router-link> |
      <router-link to="/lx2">axios并发请求</router-link> |
      <router-link to="/lx3">axios多接口请求</router-link> |
      <router-link to="/lx4">axios相关配置</router-link> |
      <router-link to="/lx5">axios拦截器</router-link> |
      <router-link to="/lx6">axios错误处理</router-link> |
      <router-link to="/lx7">axios取消处理</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
