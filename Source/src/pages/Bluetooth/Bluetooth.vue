
<style>
.seek_bg{
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%
}
.seek{
    position:fixed;
    z-index:1;
    top:35%;
    width: 100%
}
.seek_btn{
     position:fixed;
    z-index:1;
    bottom:10%;
    width: 100%
}

</style>
<template>
  <div>
    
    <div class="height-40">
      <mt-header title="蓝牙连接" class="txt-black" style="background-color:white" fixed>
        <router-link to="/mybaby" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <img :src="uploadpath+'resource/'+res.seek_bg" class="seek_bg">

    <div class="flex-row flex-column seek" >
        <img :src="uploadpath+'resource/'+res.seekbluetooth" class="icon-75">
        <div class="margin-top-20 txt-bold h7-5">请点击扫描寻找智能感应设备</div>
    </div> 
    
    <!-- <div class="flex-row flex-column seek" >
        <img :src="uploadpath+'resource/'+res.seekbluetooth" class="icon-75">
        <div class="margin-top-20 txt-bold h7-5">正在寻找智能感应设备</div>
    </div> -->

    <!-- <div class="flex-row flex-column seek" >
        <img :src="uploadpath+'resource/'+res.zhaodao" class="icon-75 margin-right-40">
        <div class="margin-top-20 txt-bold h7-5">找到智能感应设备，请点击绑定</div>
    </div> -->

    <!-- <div class="flex-row flex-column seek" >
        <img :src="uploadpath+'resource/'+res.chaoshi" class="icon-75 margin-right-40">
        <div class="flex-row column">
        <div class="margin-top-20 txt-bold h7-5">扫描超时，请确保：</div>
        <div class=" txt-bold margin-top-5">1、感应器就在附近且有点</div>
        <div class=" txt-bold margin-top-5">2、感应器是否已连接其他设备</div>
        <div class=" txt-bold margin-top-5">如果无效请重启设备或蓝牙重新扫描</div>
        </div>
    </div> -->


<div class="flex-row  flex-column seek_btn padding">
 <mt-button  class='h8'  style="width:50%;height:40px" type="primary">开始扫描</mt-button>
 <!-- <mt-button  class='h8'  style="width:50%;height:40px" type="primary">绑定设备</mt-button>
 <mt-button  class='h8'  style="width:50%;height:40px" type="primary">重新扫描</mt-button> -->
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

var content = new Content();
var body = content.generateBodyJson();

export default body;
</script>


