<style>
.btn{
    position: absolute;
    /* width: 100%; */
    bottom: 10%;
}
</style>

<template>
  <div class="bg-gray" style="height:100%">
    <div class="height-40">
      <mt-header style="background-color:#FF4081" title="添加宝贝" fixed>
        <router-link to="/mybaby"  slot="left">
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
        <input class="margin-left-5" style="width:260px;height:30px" placeholder="请选择宝贝性别">
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


      <div class="margin-top-30 btn">
          <mt-button  class="" style="width:290px;height:40px" type="primary">添加</mt-button>
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

export default body;
</script>
