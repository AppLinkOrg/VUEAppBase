
<style>
.border_bottom{
    border-bottom: 1px solid #F2F2F2;
}
</style>
<template>
  <div class="bg-white">
      <div class="height-40">
      <mt-header style="background-color:#FF4081" title="我的设置" fixed>
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      </div>

    <div class="padding-15 flex-row flex-center border_bottom " @click="inputFun" style="">
        <div class="txt-bold">语言选择：</div>
        <div  class="flex-1 text-right margin-right-10 txt-bold">中文</div>
        <img :src="uploadpath+'resource/'+res.bottom_icon"  class="icon-7_5">
    </div>

    <div class="padding-15 flex-row flex-center border_bottom"  @click="inputFun2" style="">
        <div class="txt-bold">舒适度提醒：</div>
        <div class="flex-1 text-right margin-right-10 txt-bold">开</div>
        <img :src="uploadpath+'resource/'+res.bottom_icon" class="icon-7_5">
    </div>

    <div class="padding-15 flex-row flex-center border_bottom" @click="inputFun3" style="">
        <div class="txt-bold">舒适度调节：</div>
        <div class="flex-1 text-right margin-right-10 txt-bold">平衡</div>
        <img :src="uploadpath+'resource/'+res.bottom_icon" class="icon-7_5">
    </div>

    <div class="padding-15 flex-row flex-center border_bottom" @click="inputFun4" style="">
        <div class="txt-bold">安全监控提醒：</div>
        <div class="flex-1 text-right margin-right-10 txt-bold">打开</div>
        <img :src="uploadpath+'resource/'+res.bottom_icon" class="icon-7_5">
    </div>

    <div class="padding-15 flex-row flex-center border_bottom" @click="inputFun5" style="">
        <div class="txt-bold">翻身提醒：</div>
        <div class="flex-1 text-right margin-right-10 txt-bold">1小时</div>
        <img :src="uploadpath+'resource/'+res.bottom_icon" class="icon-7_5">
    </div>

    <div class="padding-15 flex-row flex-center border_bottom" style="">
        <div class="txt-bold flex-1">使用声明：</div>
        <!-- <div @click="inputFun" class="flex-1 text-right margin-right-10 txt-bold">中文</div> -->
        <img :src="uploadpath+'resource/'+res.you"  class="icon-7_5">
    </div>
     <div class="text-center margin-top-60" v-if="isLogin()">
        <mt-button size="large" @click="logout()" type="primary">退出登录</mt-button>
      </div>

           <mt-popup style="width:100vw" v-model="sexpopup" position="bottom">
            <mt-picker :slots="dateSlots" @change="Language" valueKey="label"></mt-picker>
            </mt-popup>

            <mt-popup style="width:100vw" v-model="sexpopup2" position="bottom">
            <mt-picker :slots="dateSlots2" @change="Comfortreminder" valueKey="label"></mt-picker>
            </mt-popup>

            <mt-popup style="width:100vw" v-model="sexpopup3" position="bottom">
            <mt-picker :slots="dateSlots3" @change="Comfortregulation" valueKey="label"></mt-picker>
            </mt-popup>

            <mt-popup style="width:100vw" v-model="sexpopup4" position="bottom">
            <mt-picker :slots="dateSlots4" @change="Monitoring" valueKey="label"></mt-picker>
            </mt-popup>

            <mt-popup style="width:100vw" v-model="sexpopup5" position="bottom">
            <mt-picker :slots="dateSlots5" @change="Turnover" valueKey="label"></mt-picker>
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
    data.dateSlots = [];
    data.dateSlots2 = [];
    data.dateSlots3 = [];
    data.dateSlots4 = [];
    data.dateSlots5 = [];

    data.sexpopup = false;
    data.sexpopup2 = false;
    data.sexpopup3 = false;
    data.sexpopup4 = false;
    data.sexpopup5 = false;
    return data;
  }
   inputFun() {
    this.sexpopup = true;
  }
     inputFun2() {
    this.sexpopup2 = true;
  }
     inputFun3() {
    this.sexpopup3 = true;
  }
     inputFun4() {
    this.sexpopup4 = true;
  }
     inputFun5() {
    this.sexpopup5 = true;
  }

   Language(picker, values) {
    this.dateSlots = [{ values: ["中文", "English"] }];
    //document.getElementsByClassName("input")[0].value = values[0];
  }
    Comfortreminder(picker, values) {
    this.dateSlots2 = [{ values: ["开", "关"] }];
    //document.getElementsByClassName("input")[0].value = values[0];
  }
    Comfortregulation(picker, values) {
    this.dateSlots3 = [{ values: ["最节约", "经济","平衡","舒适","最舒适"] }];
    //document.getElementsByClassName("input")[0].value = values[0];
  }

     Monitoring(picker, values) {
    this.dateSlots4 = [{ values: ["打开", "关闭"] }];
    //document.getElementsByClassName("input")[0].value = values[0];
  }

     Turnover(picker, values) {
    this.dateSlots5 = [{ values: ["1小时", "2小时", "3小时", "不提醒"] }];
    //document.getElementsByClassName("input")[0].value = values[0];
  }



}

var content = new Content();
var body = content.generateBodyJson();
body.methods.Language = content.Language;
body.methods.Comfortreminder = content.Comfortreminder;
body.methods.Comfortregulation = content.Comfortregulation;
body.methods.Monitoring = content.Monitoring;
body.methods.Turnover = content.Turnover;

body.methods.inputFun = content.inputFun;
body.methods.inputFun2 = content.inputFun2;
body.methods.inputFun3 = content.inputFun3;
body.methods.inputFun4 = content.inputFun4;
body.methods.inputFun5 = content.inputFun5;
export default body;
</script>


