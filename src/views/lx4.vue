<template>
  <div>
        <h3>axios相关配置</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  created(){
    // axios配置参数都有哪些 
   let instance  = this.$axios.create({
        baseURL:'http://localhost:8080',  //请求域名
        timeout:1000, //请求超时时长
        url:'/data.json', //请求路径
        method:'get',  //请求方法 post put pacth delete
        headers:{  //请求头
            token:''
        },
        params:{},  //请求参数拼接到url
        data:{}  //请求参数放在请求体
    })
   instance.get('/data.json').then(res=>{
       console.log(res)
   })

   //1.axios实例配置
   //修改配置项
  //  let instance = axios.create()
  //  instance.defaults.timeout = 2000 

   //2.axios请求配置 
  // instance.get('/data.json',{
  //       timeout:5000
  //   })

    //3.axios全局配置
    // axios.defaults.baseURL = 'http://localhost:8080'
    // axios.defaults.timeout =1000

   //配置优先级：请求配置 > 实例配置 > 全局配置


    //实际开发
    // 有两种请求接口：
    // http:localhost:9090
    // http:localhost:9091
    let instanceOne = this.$axios.create({
      baseURL : 'http:localhost:9090',
      timeout:1000
    })

    let instanceTwo = this.$axios.create({
      baseURL : 'http:localhost:9091',
      timeout:1000
    })

    //配置项有：baseURL timeout url method params
    instanceOne.get('/data.json',{
      params:{}
    }).then(res=>{
      console.log(res)
    })

    //配置项有：baseURL timeout:2000 url method 
   instanceTwo.get('/data.json',{
      timeout:2000 //重新定义请求超时时长。
    }).then(res=>{
      console.log(res)
    })
    
    

  },

}
</script>
<style lang="scss" scoped>
</style>