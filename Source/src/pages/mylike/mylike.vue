<style>
.aaa {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<template>
  <div>
    <div class="height-40">
      <mt-header title="我的点赞" style="background-color:#FF4081" fixed>
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="flex-row margin-10 padding-10" style="border-radius:10px;background:#f8f8f8">
      <img
        :src="uploadpath+'resource/'+res.seekbluetooth"
        class="icon-20"
        style="border:1px solid white;border-radius:50%"
      >
      <div class="flex-row column margin-left-10">
        <div class="flex-row flex-center">
          <div class="flex-row column flex-2">
            <div class="txt-bold aaa">小了白了兔</div>
            <div class="margin-top-5 txt-bold txt-gray">2018-01-12</div>
          </div>

          <div class="flex-row flex-center flex-1 text-right">
            <img
              :src="uploadpath+'resource/'+res.mylike"
              class="icon-10"
              style="border:1px solid white;border-radius:50%"
            >
            <div class="margin-left-5">34</div>
          </div>
        </div>

        <div
          class="margin-top-5 txt-bold"
          style="width:80%;overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
}"
        >我家宝贝也太能尿了吧，一天要换7到8次尿布手动阀</div>
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

  setData(data) {
    return data;
  }

  onMyLoad() {}
  onMyShow() {}
}

var content = new Content();
var body = content.generateBodyJson();
body.methods.getPhoto = content.getPhoto;
body.methods.upload = content.upload;
body.methods.text = content.text;
body.methods.submit = content.submit;
export default body;
</script>
