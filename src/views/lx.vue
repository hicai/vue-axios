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
//写法一  get方法 params提交参数
  //  this.$axios.get("/data.json",{
  //         params:{
  //           id:1
  //         }  
  //   }).then(res=>{
  //     console.log(res)
  //   })

//写法二
    //  this.$axios({
    //    method:'get',
    //    url:'/data.json' ,
    //    //传参
    //    params:{
    //       id:1
    //    }  
    //  }).then(res=>{
    //       console.log(res)
    //  })

    //post方法,  三个参数 url请求地址 data请求数据  config
    //post常用数据 
    //1.applicition/json请求
     let data = {
         id:1
    }
    //    this.$axios.post("/data.json",data
    //     }).then(res=>{
    //       console.log(res)
    //     })

     //或者还有一种写法
     //  this.$axios({
    //    method:'post',
    //    url:'/data.json' ,
    //    //传参
    //    data:data
    //  }).then(res=>{
    //       console.log(res)
    //  })

    //2.form-data表单提交（文件上传、图片上传）
    //转化数据
    let formData = new FormData();
    for(let i in data){
         formData.append(i,data[i])
      }  
    this.$axios.post("/data.json",formData
        ).then(res=>{
          console.log(res)
     })   

     //put请求
     //    this.$axios.put("/data.json",data
    //     }).then(res=>{
    //       console.log(res)
    //     })

    //patch请求
    //    this.$axios.patch("/data.json",data
    //     }).then(res=>{
    //       console.log(res)
    //     })

  }
}
</script>