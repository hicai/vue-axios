<template>
  <div>
      <h3>axios并发请求</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  created(){
      //axios.all参数是一个数组,对应请求。
      this.$axios.all([
          this.$axios.get('/data.json'),
          this.$axios.get('/city.json'),
      ]).then(
          //axios.spread 分割不同请求的返回值
          this.$axios.spread((dataRes,cityRes)=>{
              console.log(dataRes,cityRes)
          })
      )
  },

}
</script>
<style lang="scss" scoped>
</style>