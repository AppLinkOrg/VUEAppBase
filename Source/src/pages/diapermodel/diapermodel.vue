<style>
</style>

<template>
  <div class style="white">
    <mt-header fixed title="育儿圈" style="background-color:#FF4081">
  <router-link to="/mybaby" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>

    </mt-header>
   
    <div class="" style="height:40px"></div>
    
    <div v-for="(item, index) in diapermodellist" :key="index" @click="xuanze" :id="item.id"  class="flex-row  flex-center  radius-10 margin-10 padding-10" style="box-shadow: 1px 0px 10px #888888;">
    <img :src="uploadpath+'diapermodel/'+item.nb_img" class="" style="height:80px;width:80px;" >
    <div class="flex-row column margin-left-10 flex-1">
    <div class="flex-1 txt-bold">{{item.name}}</div>

    <div class="flex-1 margin-top-10 margin-bottom-10">型号：{{item.model}} </div>
    <div class="flex-1">尺寸：{{item.size}}</div>
    </div>
      <img :src="uploadpath+'resource/'+res.xuanzhon" class="icon-15" style=""  v-show="niaobu==item.id" > 
    <img :src="uploadpath+'resource/'+res.weixuanzhon" class="icon-15 margin-10" v-show="niaobu!=item.id"  style="" >
    </div>
   

      <div class="margin-top-80 flex-row flex-column" >
     
        <mt-button
          @click="baocun"
         
          class
          style="width:290px;height:40px"
          type="primary"
        >保存</mt-button>
      </div>
    <div class="height-50"></div>

  </div>
</template>

<script>
import { AppBase } from "../../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }
  setData(data) {
    data.momentlist = "";
    data.diapermodellist = "";
    data.canshu1="";
    data.niaobu="";
    return data;
  }

  onMyLoad() {
    this.Modellist();
  }
  onMyShow(){
     this.canshu1 = this.$route.params.id;
   
      this.post("inst", "babyinfo", { id: this.canshu1 }).then(ret => {
        this.niaobu = ret.diapermodel_id;
     
      });
  
  }
  Modellist() {
    this.post("news", "diapermodellist", {}).then(ret => {
      this.diapermodellist = ret;
    });
  }
  xuanze(e){
   
   this.niaobu=e.currentTarget.id;

  }
  baocun()
  {
  if(this.niaobu!='')
  {
 this.post("news","babydiaper",{id:this.canshu1,niaobu:this.niaobu}).then(ret =>{
   console.log(ret);
       this.back();
 })

  }
  else{
    this.info("请至少选择一个尿布型号");
  }
  
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.methods.Modellist = content.Modellist;
body.methods.xuanze=content.xuanze;
body.methods.baocun=content.baocun;
export default body;
</script>
