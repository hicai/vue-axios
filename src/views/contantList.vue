<template>
  <div class="home">
    <!-- 列表 -->
    <van-contact-list
      :list="list"
       v-model="chosenContactId"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />

    <!-- 联系人编辑  -->
    <van-popup v-model="showEdit" position="bottom">
       <van-contact-edit
         :contact-info = "editingContact" 
         :is-edit = "isEdit"
         @save = "onSave"
         @delete= "onDelete"
       >
             
       </van-contact-edit>   
    </van-popup>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  components:{
    //   [ContactList.name]:ContactList,
    //  [ContactEdit.name]:ContactEdit,
  },
  props:{},
  data(){
    return {
       chosenContactId:null,
       instance:null, // axios 实例
       showEdit:false, //编辑弹窗显隐
       isEdit:false, //是否编辑
       list: [],  //列表内容
       editingContact:{}  //列表编辑回显的数据
    }
  },
  created(){
     this.getList()
  },
  methods:{
    //获取列表
    getList(){
      this.$axios.get('/contactList').then(res=>{
            this.list = res.data.data
          }).catch(err => {
              console.log(err)
              Toast("请求失败，请稍后再试")
       })
    },

    // 新建联系人
    onAdd(){
       this.showEdit = true
       this.isEdit = false
       this.editingContact = {  };
    },

    //编辑联系人
    onEdit(info){ 
     // info是ContactEdit组件内部在定义事件(如edit,save，delete)时，所声明的回调函数(onEdit,onSave,onDelete)中的参数，而这个参数代表的就是当前表单的内容。info实际上就是定义的回调函数的形参。
        this.showEdit = true
        this.isEdit = true
        this.editingContact = info
    },

    //选中联系人
    onSelect(){
           this.showList = false; 
           console.log(this.chosenContactId)
    },

    //保存联系人
    onSave(info){
       let self = this;
       if(this.isEdit){ //判断是否是编辑保存
          self.$axios.put('/contact/edit',info).then(res=>{
           if(res.data.code === 200){
             Toast('保存成功')
             self.showEdit = false
             self.getList()
           }
          }).catch(()=>{
             Toast('请求失败，请稍后再试')
          })
       }else{
            self.$axios.post('/contact/new/json',info,{
              headers:{"content-type":"application/json"} //设置header信息
            }).then(res=>{
              if(res.data.code === 200){
               Toast('新建成功')
               self.showEdit = false
               self.getList()
              }       
          }).catch(()=>{
             Toast('请求失败，请稍后再试')
          })
       } 
    },

    //删除联系人
    onDelete(info){
       let self = this;
        this.$axios.delete('/contact',{
          params:{
            id:info.id
          }
        }).then(res=>{
          Toast('删除成功')
           self.showEdit = false
           self.getList()
        })
    }
  },

}
</script>
<style  scoped>
 .van-contact-list__add{
    z-index: 0;
  }
  .van-popup{
    height: 60%;
  }
</style>