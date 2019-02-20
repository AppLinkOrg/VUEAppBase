<template>
  <div class="padding">
    <div class="height-100"></div>
    <div class="text-center">
      <img class="icon-75" :src="uploadpath+'inst/'+InstInfo.logo">
    </div>
    <div class="padding">
      <div class="margin-top-30">
        <mt-button type="primary" plain size="large" @click="push('/mobilelogin')">手机登录</mt-button>
      </div>
      <div class="margin-top-10">
        <mt-button type="primary" plain size="large">注册</mt-button>
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