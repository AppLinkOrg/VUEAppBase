<style>
body {
  background: white !important;
}
</style>

<template>
  <div  style="height:100%">
   
    <div class="height-40">
      <mt-header title="我的宝贝" style="background-color:#FF4081" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>


    <div  v-for="(item, index) in mybaby" :key='index' class="padding-20" style="border-bottom:2px solid #EEEEEE">
      <div class="flex-row flex-center padding-bottom-10" style="border-bottom:1px solid #BBBBBB">
        <img :src="uploadpath+'baby/'+item.img" class="icon-25 radius-50">
        <div class="flex-row column margin-left-10">
          <div class="txt-bold">{{item.name}}</div>
          <div class='txt-gray'>宝宝生日：{{item.birthday}}</div>
        </div>
      </div>

      <div class="flex-row flex-center margin-top-10">
        <div  v-show="xuanzhonbaby==item.id"> <img :src="uploadpath+'resource/'+res.xuanzhon" class="icon-15 radius-50"></div>
        <div > <img @click="qiehuan" :id="item.id" v-show="xuanzhonbaby!=item.id" :src="uploadpath+'resource/'+res.weixuanzhon" class="icon-15 radius-50"></div>
         <div class="flex-1 txt-bold margin-left-10 txt-gray">当前宝贝</div>
        <div class="txt-pink txt-bold" @click="pushParam('addbaby',{id:item.id})">修改</div>
        <div class="margin-left-20 txt-pink txt-bold" @click="deletebaby" :id="item.id" >删除</div>
      </div>

      <div class="flex-row flex-center margin-top-10"  >
        <div class="flex-row flex-center"> 
          <img :src="uploadpath+'resource/'+res.bandin" class="icon-15 radius-50">
         <div class="flex-1 txt-bold margin-left-10 txt-gray" @click="pushParam('Bluetooth',{id:item.id})">{{item.equipment!=''?item.equipment:'绑定设备'}}</div>
         </div>

         <div class="flex-1 txt-bold text-center margin-left-10 txt-gray" @click="pushParam('diapermodel',{id:item.id})">{{item.diapermodel_name!=''?item.diapermodel_name:'选择纸尿裤'}}</div>
         
         <div class="flex-1 txt-bold text-center margin-left-10 txt-gray" @click="pushParam('setting')">设置</div>

      </div>



    </div>
     <div  class="flex-column flex-row" >
    <div class="margin-top-80">
        <mt-button  class style="width:290px;height:40px" @click="push('/addbaby')"  type="primary">添加</mt-button>
      </div>
      </div>
  </div>
</template>

<script>
import { AppBase } from "../../app/AppBase";

class Content extends AppBase {
  constructor() {
    super();
  }
setData(data) {
  data.mybaby='';
  data.xuanzhonbaby='';
return data;
}
onMyLoad(){
  
  

}
onMyShow(){
  
this.post("news", "selectbaby", { member_id:this.MemberInfo.id }).then(ret => {
  console.log(11111);
  console.log(ret);
    this.mybaby=ret;
    
    });
    this.post("news", "thisbaby", { id:this.MemberInfo.id }).then(ret => {
      
    this.xuanzhonbaby=ret[0].baby_id;
    
    });
        


   
    
}
qiehuan(e){
  
this.post("news", "thisbaby", { member_id:this.MemberInfo.id }).then(ret => {
    
    if(ret=='')
    {
      this.post("news", "addthisbaby", { member_id:this.MemberInfo.id,baby_id:e.target.id,status:'A' }).then(ret => {

    this.onMyShow();
    
    });
    }
    else{
     
 this.post("news", "addthisbaby", {primary_id:ret[0].id, member_id:this.MemberInfo.id,baby_id:e.target.id,status:'A' }).then(ret => {

    this.onMyShow();
    
    });


    }
    
    
    });
}
deletebaby(e){
 
this.post("news", "deletebaby", { id:e.target.id }).then(ret => {
    this.onMyShow();
    
    });

}

}

var content = new Content();
var body = content.generateBodyJson();
body.methods.deletebaby = content.deletebaby;
body.methods.qiehuan = content.qiehuan;
export default body;
</script>
