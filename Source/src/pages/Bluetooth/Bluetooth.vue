
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
        <router-link to="/home" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <img :src="uploadpath+'resource/'+res.seek_bg" class="seek_bg">
    
    <div class="flex-row flex-column seek" >
        <img :src="uploadpath+'resource/'+res.seekbluetooth" class="icon-50">
        <div class="margin-top-20 txt-bold h7-5">正在寻找智能感应设备</div>
    </div>


<div class="flex-row  flex-column seek_btn padding">
 <mt-button  class='h8'  style="width:50%;height:40px" type="primary">开始扫描</mt-button>
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


