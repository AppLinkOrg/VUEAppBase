<template>
  <div>
    <mt-header fixed title="手机登录">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="back()"></mt-button>
      </router-link>
    </mt-header>
    <div class="height-40"></div>
    <div class="padding">
      <div class="padding-20">
        <div class="padding">
          <div class="flex-row flex-center">
            <div>
              <img :src="uploadpath+'resource/'+res.mobile" class="icon-20 margin-right">
            </div>
            <div class="flex-1">
              aa
            </div>
          </div>
        </div>
        <div class="hr"></div>
        <div class="padding">
          <div class="flex-row flex-center">
            <div>
              <img :src="uploadpath+'resource/'+res.shuo" class="icon-20 margin-right">
            </div>
            <div class="flex-1">
              bb
            </div>
            <div>
              <mt-button size='small'>忘记密码</mt-button>
            </div>
          </div>
        </div>
        <div class="hr"></div>
        <div class="margin-top-20">
          <button ion-button round block >登录</button>
        </div>
      </div>
    </div>
    <div class="height-50"></div>
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