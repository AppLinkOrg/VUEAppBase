<style>
</style>

<template>
  <div class style="white">
    <mt-header fixed title="育儿圈" style="background-color:#FF4081"></mt-header>
    <div class="" style="height:40px"></div>
    
    <div v-for="(item, index) in diapermodellist" :key="index" class="flex-row  flex-center  radius-10 margin-10 padding-10" style="box-shadow: 1px 0px 10px #888888;">
    <img :src="uploadpath+'diapermodel/'+item.nb_img" class="" style="height:80px;width:80px;" >
    <div class="flex-row column margin-left-10 flex-1">
    <div class="flex-1 txt-bold">{{item.name}}</div>
    <div class="flex-1 margin-top-10 margin-bottom-10">型号：{{item.model}}</div>
    <div class="flex-1">尺寸：{{item.size}}</div>
    </div>
    <!-- <img :src="uploadpath+'resource/'+res.xuanzhon" class="icon-15" style="" >  已选中图片-->
    <img :src="uploadpath+'resource/'+res.weixuanzhon" class="icon-15 margin-10" style="" >
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
    return data;
  }

  onMyLoad() {
    this.Modellist();
  }

  Modellist() {
    this.post("news", "diapermodellist", {}).then(ret => {
      this.diapermodellist = ret;
    });
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.methods.Modellist = content.Modellist;

export default body;
</script>
