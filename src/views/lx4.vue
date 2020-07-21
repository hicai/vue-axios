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

    //1.axios实例配置
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
   //修改配置项
   instance.defaults.timeout = 2000 

   //2.axios请求配置 
  instance.get('/data.json',{
        timeout:5000
    })

    //3.axios全局配置
    // axios.defaults.baseURL = 'http://localhost:8080'
    // axios.defaults.timeout =1000

   //配置优先级：请求配置 > 实例配置 > 全局配置


  },

}
</script>
<style lang="scss" scoped>
</style>