<template>
  <div class="home">
    <van-contact-list
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  components:{
  
  },
  props:{},
  data(){
    return {
      instance:null, // axios 实例
       chosenContactId: null,
       list: []
    }
  },
  created(){
    this.$axios.get('/contactList1').then(res=>{
       this.list = res.data.data
     }).catch(err => {
         Toast("出错了")
     })
  },
  methods:{
    onAdd(){

    },
    onEdit(){

    },
    onSelect(){

    }
  },

}
</script>
<style  scoped>
 .van-contact-list__add{
    z-index: 0;
  }
  .van-popup{
    height: 100%;
  }
</style>