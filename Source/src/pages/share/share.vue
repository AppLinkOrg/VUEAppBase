<style>
.btn {
  position: fixed;

  bottom: 10%;
}
</style>

<template>
  <div>

    
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
        v-show="photo!=''"
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
    <textarea class=" padding-10 h7 txt-bold" @input="text" style="width:100%;min-height:400px;" placeholder="在此记录下宝贝的心情、趣事、欢乐等等..."></textarea>
    <div class="flex-row flex-column">
    <mt-button class="btn" style="width:290px;height:40px" type="primary" @click="submit">添加</mt-button>
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
    data.inputValue = "";
    data.photo="";
    data.afphoto="";
    return data;
  }
  
  onMyLoad() {

   

  }
  onMyShow(){
 
    
    
  }

  upload(){
   
  }

  text(e){
    this.inputValue = e.target.value;
    console.log(this.inputValue);
  }

  getPhoto(){
    this.choosePhoto((src)=>{
      this.photo=src;
    });
  }
  
  submit(){
 this.uploadFile(this.photo,"baby",(filename)=>{
  
    this.post("moments", "addbabycle", {summary:this.inputValue,status:"A",imgs:filename}).then(ret => {
      this.back(-1);
      this.talklist = ret;
    });

     
      
    })

   
  }

}

 

var content = new Content();
var body = content.generateBodyJson();
body.methods.getPhoto=content.getPhoto;
body.methods.upload=content.upload;
body.methods.text=content.text;
body.methods.submit=content.submit;
export default body;
</script>
