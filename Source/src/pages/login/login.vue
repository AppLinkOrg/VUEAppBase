<template>
  <div class="padding">

    <div class="height-100">
      <mt-header title="登录" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="text-center">
      <img class="icon-75" :src="uploadpath+'inst/'+InstInfo.logo">
    </div>

    <div class="padding">

      <div class="margin-top-30">
        <mt-button type="primary" plain size="large" @click="push('/mobilelogin')">手机登录</mt-button>
      </div>

      <div class="margin-top-10">
        <mt-button type="primary" plain size="large" @click="push('/register')">注册</mt-button>
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