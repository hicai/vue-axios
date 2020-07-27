<template>
  <div>
     <h3>axios错误处理</h3> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  created(){
     // 例子：实际开发过程中，一般添加统一错误处理
     let instance = axios.create({}) //创建axios实例
    
    //请求拦截器 
     instance.interceptors.request.use(config=>{
       return config   
     },err=>{
       alert('请求错误') // 一般http状态码以4开头，常见：401超时，404 not found
       return Promise.reject(err) 
     }) 
     
     
     //响应拦截器
     instance.interceptors.response.use(res=>{
       return res
     },err=>{
        alert('响应错误') // 一般http状态码以5开头，常见：500系统错误，502系统重启
        return Promise.reject(err)
     })

     instance.get('/data/json').then(res=>{
       console.log(res) //请求成功和响应成功返回数据
     }).catch(err=>{
        console.log(err) //请求错误和响应错误最终返回到这里
     })
  }
}
</script>
<style lang="scss" scoped>
</style>