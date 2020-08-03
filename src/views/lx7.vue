<template>
  <div>
      <h3>axios取消请求</h3> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){
       // 用于取消正在进行的http请求（了解）
       let source = axios.CancelToken.source()  

       //发起请求
       axios.get('/data.json',
        {
        //   params:{
           //取消请求参数 在get里面是第二个参数
           // 这里声明的cancelToken其实相当于是一个标记，
           // 当我们要取消请求的时候，可以通过这个找到该请求
           cancelToken:source.token 

        // }
       }).then(res=>{
           console.log(res)
       }).catch(err=>{
           //如果调用了cancel方法，那么这里的err就是cancel传入的信息
           console.log(err) 

       })

       //如果是post请求
    //    axios.post('/data.json',{
    //      //data参数
    //       id:1 
    //    },{
    //        //post请求在第三个参数
    //        cancelToken:source.token
    //    }).then(res=>{
    //        console.log(res)
    //    })

       //取消请求(message可选)
        source.cancel('这里你可以输出一些信息，可以在catch中拿到') 
      }
}
</script>
<style lang="scss" scoped>
</style>