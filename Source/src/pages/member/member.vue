<template>
  <div>
    <div class="padding" >
      <div>
        <img :src="MemberInfo.photo" />
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