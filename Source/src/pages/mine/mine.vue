
<style>
.bg {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 0;
}
</style>

<template>
  <div style="background-color:#cfcecf">
    <div class="bg">
      <img :src="uploadpath+'resource/'+res.mine_bg" class style="width:100%;height:300px;">
      <div class="bg-gray" style="width:100%;"></div>
    </div>
    <div style="z-index:1;position:fixed;width:100%"  >
      <div class="padding">
        <div class="flex-row flex-column ">
          <div class="height-30" ></div>
          <img    @click="qwe"
            :src="uploadpath+'member/'+(MemberInfo==null||MemberInfo.photo==''?InstInfo.memberlogo:MemberInfo.photo)"
            class="icon-30 bg-white"
            style="border:2px solid white;border-radius:50%"
          >
          <div class="margin-top-20 txt-bold h7" >{{(MemberInfo==null||MemberInfo.name==''?"请登录":MemberInfo.name)}}</div>
          <div class="height-40"></div>
        </div>

        <!-- <div class="height-30"></div> -->
      </div>

      <div class="bg-white">
        <!-- <div class="flex-row flex-center padding-10">
          <img
            :src="uploadpath+'resource/'+res.Personalcenter"
            class="icon-15 margin-left-10"
            style="border:1px solid white;border-radius:50%"
          >
          
          <div class="margin-left-10 txt-bold">个人中心</div>
        </div>
          
        <div class="bg-gray margin-left-20 margin-right-20" style="height:1px;width:90%;"></div> -->

        <div class="flex-row flex-center padding-10"  @click="push('/setting')">
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
          <div class="margin-left-10 txt-bold" @click="push('/mylike')">我的点赞</div>
        </div>

        <div class="bg-gray margin-left-20 margin-right-20" style="height:1px;width:90%;"></div>

        <div class="flex-row flex-center padding-10" @click="push('/mybaby',true)">
          <img
            :src="uploadpath+'resource/'+res.heat_icon"
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


qwe(){
if(this.MemberInfo==null){
  this.push('/mobilelogin')
  }
}
}

var content = new Content();
var body = content.generateBodyJson();
body.methods.qwe = content.qwe;
export default body;
</script>


