<template>
  <div>
    <div class="padding-20 primary-block" @click="push('/memberinfo',true)">
      <div class="flex-row flex-center">
        <div class="flex-1"></div>
        <div ><img class="icon-40 border-raidus-50 border-gray" :src="uploadpath+'member/'+(MemberInfo==null?InstInfo.memberlogo:MemberInfo.photo)" /></div>
        <div class="flex-1"></div>
      </div>
      <div class="text-center margin-top-10">
        <div v-if="MemberInfo!=null">{{MemberInfo.name}}</div>
        <div v-if="MemberInfo==null">请点击登录</div>
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