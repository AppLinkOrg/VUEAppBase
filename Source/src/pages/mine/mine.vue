
<style>
body {
  background: #eeeeee;
}
.bg {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 0;
}
</style>
<template>
  <div>
    <div class="bg">
      <img :src="uploadpath+'resource/'+res.mine_bg" class style="width:100%;height:30%;">
      <div class="bg-gray" style="width:100%;height:700px;"></div>
    </div>
    <div style="z-index:1;position:fixed;width:100%">
      <div class="padding">
        <div class="flex-row flex-column ">
          <div class="height-30"></div>
          <img
            :src="uploadpath+'resource/'+res.icon4"
            class="icon-30 bg-white"
            style="border:2px solid white;border-radius:50%"
          >
          <div class="margin-top-20 txt-bold">那年他穿8号</div>
          <div class="height-40"></div>
        </div>

        <!-- <div class="height-30"></div> -->
      </div>

      <div class="bg-white">
        <div class="flex-row flex-center padding-10">
          <img
            :src="uploadpath+'resource/'+res.Personalcenter"
            class="icon-15 margin-left-10"
            style="border:1px solid white;border-radius:50%"
          >
          
          <div class="margin-left-10 txt-bold">个人中心</div>
        </div>
          
        <div class="bg-gray margin-left-20 margin-right-20" style="height:1px;width:90%;"></div>

        <div class="flex-row flex-center padding-10">
          <img
            :src="uploadpath+'resource/'+res.setting"
            class="icon-15 margin-left-10"
            style="border:1px solid white;border-radius:50%"
          >
          <div class="margin-left-10 txt-bold">我的设置</div>
        </div>

        <div class="bg-gray margin-left-20 margin-right-20" style="height:1px;width:90%;"></div>

        <div class="flex-row flex-center padding-10" >
          <img
            :src="uploadpath+'resource/'+res.mylike"
            class="icon-15 margin-left-10"
            style="border:1px solid white;border-radius:50%"
          >
          <div class="margin-left-10 txt-bold">我的点赞</div>
        </div>

        <div class="bg-gray margin-left-20 margin-right-20" style="height:1px;width:90%;"></div>

        <div class="flex-row flex-center padding-10" @click="push('/mybaby')">
          <img
            :src="uploadpath+'resource/'+res.mybaby"
            class="icon-15 margin-left-10"
            style="border:1px solid white;border-radius:50%"
          >

          <div class="margin-left-10 txt-bold">我的宝贝</div>
        </div>
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

var content = new Content();
var body = content.generateBodyJson();
export default body;
</script>


