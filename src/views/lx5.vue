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
    },err=>{//请求失败错误时做什么  请求拦截器错误：发送请求，没有到达后端，比如报404。
        return Promise.reject(err)
    })
    //响应拦截器
    axios.interceptors.response.use(res=>{
        return res //请求成功对响应数据做处理
    },err=>{
         return Promise.reject(err) //响应失败做处理
    })
    axios.get().then(res=>{  //axios.interceptors.response 请求的res数据到then()里面
      console.log(res)  
    }).catch(err=>{ //响应失败err数据到catch()这里  响应拦截器错误：发送请求后，后端查找不到数据。比如报500
         console.log(err) 
    })


    //构造拦截器
    let interceptors = axios.interceptors.request.use(config=>{
        config.headers={
            auth:true
        }
         return config
    })
    //取消拦截器
    axios.interceptors.request.eject(interceptors)

    //需要登录状态（token:''）登录的接口
    let instance = axios.create({})
    instance.interceptors.request.use(config=>{
         config.headers.token = ''
         return config
    })

   //不需要登录状态的接口
    let newInstance = axios.create({})
    newInstance.get('/data.json',{
      params:{}
    }).then(res=>{
      console.log(res)
    })
    
    // 移动端开发
    let instance_phone = axios.create({})
    instance_phone.interceptors.request.use(config=>{
        alert("请求中")
        return config
    })
    instance_phone.interceptors.response.use(res=>{
        alert("响应完成")
        return res
    })

  },
}
</script>
<style lang="scss" scoped>

</style>