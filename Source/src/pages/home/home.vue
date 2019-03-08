<style>
body{
  background: white !important;
}
</style>

<template>
  <div>
    <mt-header  fixed title="首页" style="background-color:#FF4081"></mt-header>
    <div class="height-40"></div>
    <div class="padding">
      首页
    </div>
    <div class="padding">
      <mt-button @click="getPhoto()">获取相册</mt-button>
    </div>
    <div class="padding">
      <mt-button @click="takeP()">拍照{{photo}}</mt-button>
    </div>
    
    <div class="padding">
      <img :src="photo" style="width:50%" />
    </div>
    <div class="padding">
      <mt-button @click="upload()">上传</mt-button>
    </div>
    <div class="padding">
      <img :src="uploadpath+'member/'+afphoto" style="width:50%" />
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
  takeP(){
    console.log(this);
    this.takePhoto((src)=>{
      this.photo=src;
    });
  }
  getPhoto(){
    this.choosePhoto((src)=>{
      this.photo=src;
    });
  }

  setData(data) {
    data.photo = "";
    data.afphoto = "";
    return data;
  }
  upload(){
    this.uploadFile(this.photo,"member",(filename)=>{
      this.afphoto=filename;
    })
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.methods.getPhoto=content.getPhoto;
body.methods.takeP=content.takeP;
body.methods.upload=content.upload;

export default body;
</script>
