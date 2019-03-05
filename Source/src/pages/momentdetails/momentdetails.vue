<style>
body {
  background: white !important;
}
.pinlun{
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding-bottom: 30px;
}
</style>

<template>
  <div>
    <div class="height-40">
      <mt-header title="详情" style="background-color:#FF4081" fixed>
        <router-link to="/childcarering" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class>
      <img :src="uploadpath+'resource/'+res.icon1" class="bg-gray" style="width:100%;height:400px">
    </div>

    <div class="padding-10 flex-row flex-center">
      <img :src="uploadpath+'resource/'+res.icon2" class="radius-50 icon-20 bg-gray" style>

      <div class="flex-row column flex-1">
        <div class="txt-bold">大白兔奶糖</div>
        <div class="txt-gray margin-top-5">2019年19月19日 19:19</div>
      </div>
      
      <img
        :src="uploadpath+'resource/'+res.icon2"
        class="radius-50 icon-15 bg-gray margin-right-10"
        style
      >
      <div class="margin-right-10">23</div>
    </div>

    <div class="padding-10 h8 txt-bold">按时大撒大撒大撒大撒大盛大的苏打大苏打按时大苏打啊实打实大苏打</div>

    <div class="padding-10 h8" style="border-bottom:1px solid #e5e5e5" ref="wrapper">
      
      <img :src="uploadpath+'resource/'+res.icon2" class="icon-30 bg-gray margin-right-5" style>
      <img :src="uploadpath+'resource/'+res.icon2" class="icon-30 bg-gray margin-right-5" style>
      <img :src="uploadpath+'resource/'+res.icon2" class="icon-30 bg-gray margin-right-5" style>
      
    </div>

    <div class="padding-10 txt-bold">评论(0):</div>

    <div class="flex-row padding-left-10 padding-right-10">
      <img :src="uploadpath+'resource/'+res.icon2" class="icon-20 bg-gray" style>

      <div class="flex-row column margin-left-10" style>
        <div class="flex-row column flex-1">
          <div class="txt-bold">大白兔奶糖</div>
          <div class="txt-gray margin-top-5">2019年19月19日 19:19</div>
        </div>

        <div class="margin-top-5">水水水水水水水水水水水水水水水水水水水萨达撒旦发射点发阿斯顿发射点发生</div>

      </div>
    </div>

    <textarea class="bg-green pinlun txt-white"  style="height:40px;max-height:100px;"  placeholder="说两句"></textarea>

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
