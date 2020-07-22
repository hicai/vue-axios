<template>
  <div>
      <h3>拦截器</h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
         
    }
  },
  created(){
    //请求拦截器 
    axios.interceptors.request.use(config=>{
        // 在发送请求前做些什么
        return config
    },err=>{//请求失败错误时做什么
        return Promise.reject(err)
    })
    //响应拦截器
    axios.interceptors.response.use(res=>{
        return res
    })

    //取消拦截器
  },
}
</script>
<style lang="scss" scoped>

</style>