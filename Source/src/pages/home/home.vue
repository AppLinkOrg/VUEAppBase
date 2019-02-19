<template>
  <div>
    <div class="padding" @click="rpt()">{{sheetVisible}}</div>
    <button class="mint-button mint-button--default mint-button--large" @click="actionSheet()">
      <label class="mint-button-text">点击上拉 action sheet</label>
    </button>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
<script>
import { AppBase } from "../../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }
  onMyLoad() {
    var actions = [
      {
        name: "拍照",
        method: () => {} // 调用methods中的函数
      },
      {
        name: "从相册中选择",
        method: () => {} // 调用methods中的函数
      }
    ];
    this.actions = actions;
    this.sheetVisible = false;
  }
  actionSheet() {
    this.sheetVisible = true;
  }
  rpt() {
    alert(1);
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.methods.rpt = content.rpt;

export default body;
</script>
