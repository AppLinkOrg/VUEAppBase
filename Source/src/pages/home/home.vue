<template>
  <div>
    <mt-header  fixed title="首页"></mt-header>
    <div class="height-40"></div>
    <div class="padding">
      hello
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
