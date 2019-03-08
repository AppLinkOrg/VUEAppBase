<style>
.btn {
  position: fixed;
  /* width: 100%; */
  bottom: 10%;
}
</style>

<template>
  <div class="bg-gray" style="height:100%">
    <div class="height-40">
      <mt-header style="background-color:#FF4081" title="添加宝贝" fixed>
        <router-link to="/mybaby" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="flex-row flex-column">
      <div class="height-40"></div>
      <img
        :src="uploadpath+'resource/'+res.icon4"
        class="icon-30 bg-white"
        style="border:2px solid white;border-radius:50%"
        @click="sctx"
      >
      <div class="margin-top-10">添加头像</div>

      <div class="height-30"></div>

      <div class="flex-row flex-center padding-5 bg-white" style="border-radius:5px">
        <img :src="uploadpath+'resource/'+res.icon4" class="icon-10">
        <input class="margin-left-5" style="width:260px;height:30px" placeholder="请输入宝贝名字">
      </div>

      <div class="height-20"></div>

      <div class="flex-row flex-center padding-5 bg-white" style="border-radius:5px">
        <img :src="uploadpath+'resource/'+res.icon3" class="icon-10">
        <input class="margin-left-5"   v-model="sex" @click="inputFun" style="width:260px;height:30px" placeholder="请选择宝贝性别">
      </div>

      <div class="height-20"></div>

      <div class="flex-row flex-center padding-5 bg-white" style="border-radius:5px">
        <img :src="uploadpath+'resource/'+res.icon2" class="icon-10">
        <input class="margin-left-5" style="width:260px;height:30px" placeholder="请选择宝贝生日">
      </div>

      <div class="height-20"></div>

      <div class="flex-row flex-center padding-5 bg-white" style="border-radius:5px">
        <img :src="uploadpath+'resource/'+res.icon1" class="icon-10">
        <input class="margin-left-5" style="width:260px;height:30px" placeholder="请填写与宝贝关系">
      </div>

      <div class="margin-top-80">
        <mt-button class style="width:290px;height:40px" type="primary">添加</mt-button>
      </div>
    </div>

    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <mt-popup style="width:100vw" v-model="sexpopup" position="bottom">
      <mt-picker
        :slots="dateSlots"
        @change="onSexChange"
        valueKey="label"
        >
        
        </mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import { AppBase } from "../../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }
  setData(data) {
    data.actions = [
      {
        name: "拍照",
        method: this.getCamera
      },
      {
        name: "从相册中选择",
        method: this.getLibrary
      }
    ];
    data.dateSlots =[{values: ['', '']}];
  

data.sexpopup=false;
data.sex='';
    data.photo = "";
    data.afphoto = "";
    data.sheetVisible = false;
    data.docmHeight = document.documentElement.clientHeight;
    data.showHeight = document.documentElement.clientHeight;
    return data;
  }
  onMyLoad() {}
  sctx() {
    this.sheetVisible = true;
  }
  getCamera() {
    content.takePhoto(src => {
      this.photo = src;
    });
  }
  getLibrary() {
    content.choosePhoto(src => {
      this.photo = src;
    });
  }
  onSexChange(picker, values){
    this.dateSlots=[{values: ['男', '女']}];
   this.sex=values[0];
   
  }
  inputFun(){
    this.sexpopup=true;
  }
}
// $("#btn_exit").bind("click",function(){
//               //window.location.reload();    //刷新
//              // window.history.go(1);         //前进
//              // window.history.go(-1);        //返回+刷新
//              // window.history.forward();  //前进
//               window.history.back();       //返回
//   });

var content = new Content();
var body = content.generateBodyJson();
body.methods.sctx = content.sctx;
body.methods.getCamera = content.getCamera;
body.methods.getLibrary = content.getLibrary;
body.methods.onSexChange=content.onSexChange;
body.methods.inputFun=content.inputFun;
export default body;
</script>
