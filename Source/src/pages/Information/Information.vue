<template>
  <div>
    <mt-header  fixed title="资讯" style="background-color:#FF4081"></mt-header>
    <div class="height-40"></div>
    <div class="padding">
      资讯
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
