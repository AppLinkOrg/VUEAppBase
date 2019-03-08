<style>
.share {
  position: fixed;
  bottom: 80%;
  right: 10%;
}
.img {
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  width: 100%;
  min-height: 200px;
  max-height: 60%;
}
.zhutu{
border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  height:160px;
  width:100%
}
.under {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

</style>

<template>
  <div>
    <mt-header fixed title="育儿圈" style="background-color:#FF4081"></mt-header>
    <div class="height-40"></div>

    <div class="padding-10 h7">2019年03月07日</div>

    <div class="padding-5 flex-row " style="">


<div class="flex-row column flex-1">
      <div class=" padding-5 margin-top-10" style="width:100%;">

        <div class=" radius-5 " >
          <img :src="uploadpath+'resource/'+res.mine_bg " class="zhutu" style=''>
          <div class="bg-gray padding-10 under ">
            <div class="txt-bold">宝宝心情不佳</div>
            <div class="flex-row flex-center under margin-top-5">
              <img :src="uploadpath+'resource/'+res.icon2" class="bg-gray icon-20 radius-50" style>
              <div class="txt-bold flex-1">sss</div>

              <img :src="uploadpath+'resource/'+res.dianzan" class=" icon-10 margin-top-5" style>

              <div class="margin-left-5 margin-top-10">20</div>
            </div>
          </div>
        </div>
        
      </div>

      <div class=" padding-5" style="width:100%;">

        <div class=" radius-5 "  >
          <img :src="uploadpath+'resource/'+res.membertopbg " class="img " style>
          <div class="bg-gray padding-10 under ">
            <div class="txt-bold">宝宝心情不佳</div>
            <div class="flex-row flex-center under margin-top-5">
              <img :src="uploadpath+'resource/'+res.icon2" class="bg-gray icon-20 radius-50" style>
              <div class="txt-bold flex-1">sss</div>

              <img :src="uploadpath+'resource/'+res.dianzan" class=" icon-10 margin-top-5" style>

              <div class="margin-left-5 margin-top-10">20</div>
            </div>
          </div>
        </div>

      </div>

      <div class=" padding-5" style="width:100%;">

        <div class=" radius-5 "  style="">
          <img :src="uploadpath+'resource/'+res.icon4 " class="img " style>
          <div class="bg-gray padding-10 under ">
            <div class="txt-bold">宝宝心情不佳</div>
            <div class="flex-row flex-center under margin-top-5">
              <img :src="uploadpath+'resource/'+res.icon2" class="bg-gray icon-20 radius-50" style>
              <div class="txt-bold flex-1">sss</div>

              <img :src="uploadpath+'resource/'+res.dianzan" class=" icon-10 margin-top-5" style>

              <div class="margin-left-5 margin-top-10">20</div>
            </div>
          </div>
        </div>


        
        
      </div>

</div>


<div class="flex-row flex-column flex-1">
      <div class="flex-row flex-column padding-5 margin-top-10" style="width:100%;min-height:100px;">

        <div class=" radius-5 "  style="">  
          <img :src="uploadpath+'resource/'+res.icon2 " class="img " style>
          <div class="bg-gray padding-10 under ">
            <div class="txt-bold">宝宝心情不佳的说法大事发生发撒啊撒打发</div>
            <div class="flex-row flex-center under margin-top-5">
              <img :src="uploadpath+'resource/'+res.icon2" class="bg-gray icon-20 radius-50" style>
 
              <div class="txt-bold flex-1">sss</div>
              
              <img :src="uploadpath+'resource/'+res.dianzan" class=" icon-10 margin-top-5" style>

              <div class="margin-top-10 margin-left-5">20</div>
            </div>
          </div>
        </div>
        
      </div>


      <div class="flex-row flex-column padding-5" style="width:100%;min-height:100px;">

        <div class=" radius-5 " style="" >  
          <img :src="uploadpath+'resource/'+res.icon2 " class="img " style>
          <div class="bg-gray padding-10 under ">
            <div class="txt-bold">宝宝心情不佳的说法大事发生发撒啊撒打发</div>
            <div class="flex-row flex-center under margin-top-5">
              <img :src="uploadpath+'resource/'+res.icon2" class="bg-gray icon-20 radius-50" style>
 
              <div class="txt-bold flex-1">sss</div>
              
              <img :src="uploadpath+'resource/'+res.dianzan" class=" icon-10 margin-top-5" style>

              <div class="margin-top-10 margin-left-5">20</div>
            </div>
          </div>
        </div>
        
      </div>



</div>





    </div>

    <div class="share" @click="push('/share')">
      <img
        :src="uploadpath+'resource/'+res.fabu"
        class="icon-20 bg-gray"
        style="border-radius:50%"
      >
    </div>

  </div>
</template>

<script>
import { AppBase } from "../../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }

  list() {
    this.post("moments	", "momentlist", {
      
    }).then(ret => {
      
    });
  }
  
}

var content = new Content();
var body = content.generateBodyJson();
body.methods.list = content.list;

export default body;
</script>
