
<style>
.border_bottom {
  border-bottom: 1px solid #f2f2f2;
}
.block{
  background: #FF4081;
  color: white;
}
</style>
<template>
  <div class="" >
    <div class="height-40">
      <mt-header style="background-color:#FF4081" title="我的设置" fixed>
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

  <!--<div>
       <div class="padding-15 flex-row flex-center border_bottom" @click="inputFun" style>
      <div class="txt-bold">语言选择：</div>
      <div class="flex-1 text-right margin-right-10 txt-bold">中文</div>
      <img :src="uploadpath+'resource/'+res.bottom_icon" class="icon-7_5">
    </div>
    <div class="padding-15 flex-row flex-center border_bottom" @click="inputFun2" style>
      <div class="txt-bold">舒适度提醒：</div>
      <div class="flex-1 text-right margin-right-10 txt-bold">开</div>
      <img :src="uploadpath+'resource/'+res.bottom_icon" class="icon-7_5">
    </div>
    <div class="padding-15 flex-row flex-center border_bottom" @click="inputFun3" style>
      <div class="txt-bold">舒适度调节：</div>
      <div class="flex-1 text-right margin-right-10 txt-bold">平衡</div>
      <img :src="uploadpath+'resource/'+res.bottom_icon" class="icon-7_5">
    </div>
    <div class="padding-15 flex-row flex-center border_bottom" @click="inputFun4" style>
      <div class="txt-bold">安全监控提醒：</div>
      <div class="flex-1 text-right margin-right-10 txt-bold">打开</div>
      <img :src="uploadpath+'resource/'+res.bottom_icon" class="icon-7_5">
    </div>
    <div class="padding-15 flex-row flex-center border_bottom" @click="inputFun5" style>
      <div class="txt-bold">翻身提醒：</div>
      <div class="flex-1 text-right margin-right-10 txt-bold">1小时</div>
      <img :src="uploadpath+'resource/'+res.bottom_icon" class="icon-7_5">
    </div>
    <div class="padding-15 flex-row flex-center border_bottom" style>
      <div class="txt-bold flex-1">使用声明：</div>
     
      <img :src="uploadpath+'resource/'+res.you" class="icon-7_5">
    </div>-->
    <!-- <mt-popup style="width:100vw" v-model="sexpopup" position="bottom">
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
    
  </div>-->

    <div class="flex-row flex-center padding-15 bg-white">
      <div class="flex-1 txt-bold">尿湿提醒</div>
      <div><mt-switch  @change="check" >关</mt-switch></div>
    </div>

    <div class="bg-gray" style="height:1px;width:100%;"></div>

    <div class="flex-row flex-center padding-5 bg-gray">
      
      <div :class="{'block':block==1}" class=" margin-10 flex-1 padding-5 bg-white text-center radius-10 txt-bold" @click="ganshuang">
       干爽
      </div>

      <div :class="{'block':block==2}" class=" margin-10 flex-1 padding-5 bg-white text-center radius-10 txt-bold" @click="shizhong">
       适中
      </div>

      <div :class="{'block':block==3}" class=" margin-10 flex-1 padding-5 bg-white text-center radius-10 txt-bold" @click="weichao">
       微潮
      </div>

      <div :class="{'block':block==4}" class=" margin-10 flex-1 padding-5 bg-white text-center radius-10 txt-bold" @click="chaoshi">
       潮湿
      </div>

    </div>

    <div class="bg-gray" style="height:1px;width:100%;"></div>

    <div class="flex-row flex-center padding-15 bg-white">
      <div class="flex-1 txt-bold">断开连接提醒</div>
      <div><mt-switch  @change="check" >关</mt-switch></div>
    </div>
    <div class="bg-gray" style="height:1px;width:100%;"></div>
  </div>
</template>


<script>
import { AppBase } from "../../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }
  setData(data){
    data.block=1;
    return data;
  }

  check(){
    console.log("ssss");
    
  }
  ganshuang(){
    this.block=1
  }

  shizhong(){
    this.block=2
  }

  weichao(){
    this.block=3
  }

  chaoshi(){
    this.block=4
  }

}

var content = new Content();
var body = content.generateBodyJson();
body.methods.check = content.check;
body.methods.ganshuang = content.ganshuang;
body.methods.shizhong = content.shizhong;
body.methods.weichao = content.weichao;
body.methods.chaoshi = content.chaoshi;

export default body;
</script>


