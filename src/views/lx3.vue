<template>
  <div>
      <h3>axios多接口请求</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  created(){
      //当后端接口地址不同，并超时时长不同时。
      let instance = this.$axios.create({
          baseURL:'http://localhost:8080', //请求域名 端口号
          timeout: 1000 //请求超时时长（单位ms）
      })

    //   let axios2 = axios.create({
    //         baseURL:'http://localhost:9090',
    //         timeout: 5000
    //   })
    
      instance.get('/data.json').then(res=>{
          console.log(res)
      })

      
  },
}
</script>
<style lang="scss" scoped>
</style>