<template>
  <div lass="home">
      <h1>get方法</h1>
  </div>
</template>

<script>



export default {
  name: 'axios2-1',
  components: {

  },
 created() {
//写法一 
//    this.$axios.get("/data.json").then(res=>{
//       console.log(res)
//     })

//写法二
     this.$axios({
       method:'get',
       url:'/data.json'   
     }).then(res=>{
          console.log(res)
     })
  }
}
</script>