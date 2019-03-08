<style>
.btn {
  position: fixed;

  bottom: 10%;
}
</style>

<template>
  <div>

    <div class="flex-row flex-column">
    <mt-button class="btn" style="width:290px;height:40px" type="primary">添加</mt-button>
    </div>
    <div class="height-40">
      <mt-header title="分享" style="background-color:#FF4081" fixed>
        <router-link to="/childcarering" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="padding-5" style="border-bottom:2px solid #EDECEB">

      <img
        :src="photo" 
        class=""
        style="height:90px;width:110px;"
      >
      
      <img
        :src="uploadpath+'resource/'+res.add_img"
        class=""
        style="height:90px;width:110px;"
        @click="getPhoto()"
      >

          <!-- <div class="padding">
      <mt-button @click="upload()">上传</mt-button>
    </div> -->

    </div>
    <textarea class=" padding-10 h7 txt-bold" style="width:100%;min-height:400px;" placeholder="在此记录下宝贝的心情、趣事、欢乐等等..."></textarea>
  </div>
</template>

<script>
import { AppBase } from "../../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }

   upload(){
    this.uploadFile(this.photo,"member",(filename)=>{
      this.afphoto=filename;
    })
  }

    getPhoto(){
    this.choosePhoto((src)=>{
      this.photo=src;
    });
  }
}

 

var content = new Content();
var body = content.generateBodyJson();
body.methods.getPhoto=content.getPhoto;
body.methods.takeP=content.takeP;
body.methods.upload=content.upload;

export default body;
</script>
