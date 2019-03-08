<style>
body {
  background: white !important;
}
</style>

<template>
  <div  style="height:100%">
   
    <div class="height-40">
      <mt-header title="我的宝贝" style="background-color:#FF4081" fixed>
        <router-link to="/mine" slot="left">
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
        <div class></div>
        <div class="flex-1 txt-bold txt-gray">当前宝贝</div>
        <div class="txt-pink txt-bold" @click="pushParam('addbaby',{id:item.id})">修改</div>
        <div class="margin-left-20 txt-pink txt-bold" @click="deletebaby" :id="item.id" >删除</div>
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

return data;
}
onMyLoad(){
  
  

}
onMyShow(){
  
this.post("news", "selectbaby", { member_id:this.MemberInfo.id }).then(ret => {
    this.mybaby=ret;
    
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
export default body;
</script>
