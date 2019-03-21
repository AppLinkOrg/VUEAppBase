<style>

</style>

<template>
  <div class="background:#EEEEEE">

    <div class="height-40">
      <mt-header title="个人中心" style="background-color:#FF4081" fixed>
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="flex-row flex-center padding-10 " style="border-bottom:1px solid #EEEEEE">
        <div class="txt-bold flex-1 margin-left-10">头像</div>
        <img :src="uploadpath+'resource/'+res.check"
            class="icon-20  margin-right-10"
            style="border:1px solid white;border-radius:50%"
          >
    </div>

    <div class="flex-row flex-center padding-10 height-50" style="border-bottom:1px solid #EEEEEE">
        <div class="txt-bold flex-1 margin-left-10">昵称</div>
        <input placeholder="请填写昵称" value="aaaa" class="text-right margin-right-10">
    </div>

    <div class="flex-row flex-center padding-10 height-50" style="border-bottom:1px solid #EEEEEE">
        <div class="txt-bold flex-1 margin-left-10">手机</div>
         <input placeholder="" disabled='false' value="1111" class="text-right margin-right-10">
    </div>

    <div class="" style="height:5px;background:#EEEEEE"></div>

    <button class="text-center padding-15  txt-bold" style="border:1px solid #EEEEEE;width:100%">
        退出登录
    </button>

    

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
