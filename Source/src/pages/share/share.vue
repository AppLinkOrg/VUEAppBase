<style>
.btn{
    position: fixed;
    /* width: 100%; */
    bottom: 10%;
}

</style>
<template>
  <div>


     <div class="flex-row flex-column">
      <div class="margin-top-30 btn ">
          <mt-button  class="" style="width:290px;height:40px" type="primary">添加</mt-button>
      </div>
     </div>

        <div class="height-40">
      <mt-header title="分享" style="background-color:#FF4081" fixed>
        <router-link to="/childcarering" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    
    <div class="padding-5" style="border-bottom:2px solid #EDECEB">
      <img :src="uploadpath+'resource/'+res.Personalcenter" class="bg-gray" style="height:90px;width:110px;">
      <img :src="uploadpath+'resource/'+res.setting" class="bg-gray" style="height:90px;width:110px;">
    </div>
    <div class="txt-gray padding-10">在此记录下宝贝的心情、趣事、欢乐等等...</div>



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
