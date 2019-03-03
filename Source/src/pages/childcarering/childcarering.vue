<style>
.share{
    position: absolute;
    bottom: 80%;
    right: 10%;
}
</style>

<template>
  <div>
    <mt-header  fixed title="育儿圈" style="background-color:#FF4081"></mt-header>
    <div class="height-40"></div>
    <div class="padding">
      育儿圈
    </div>
    <div class="height-50"></div>


<div class="share" @click="push('/share')">
      <img
        :src="uploadpath+'resource/'+res.icon1"
        class="icon-20 bg-gray "
        style="border-radius:50%"
      >
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
