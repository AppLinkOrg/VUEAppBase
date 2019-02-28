<style>
body {
  background: white !important;
}
</style>

<template>
  <div>
    <div class="height-40">
      <mt-header title="我的宝贝" style="background-color:#FF4081" fixed>
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="padding-20" style="border-bottom:2px solid #EEEEEE">
      <div class="flex-row flex-center padding-bottom-10" style="border-bottom:1px solid #BBBBBB">
        <img :src="uploadpath+'resource/'+res.Personalcenter" class="icon-25 radius-50">
        <div class="flex-row column margin-left-10">
          <div class="txt-bold">宝宝名字</div>
          <div class='txt-gray'>宝宝生日：2018年02月05日</div>
        </div>
      </div>

      <div class="flex-row flex-center margin-top-10">
        <div class></div>
        <div class="flex-1 txt-bold txt-gray">当前宝贝</div>
        <div class="txt-pink txt-bold" @click="push('/addbaby')">修改</div>
        <div class="margin-left-20 txt-pink txt-bold" >删除</div>
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
