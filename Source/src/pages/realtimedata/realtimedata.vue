
<style>
.data_bg{
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%
}
.rtd{
    position:fixed;
    z-index:1;
    bottom:20%;
    width: 100%
}
</style>
<template>
  <div>
    
    <div class="height-40">
      <mt-header title="实时数据" class="txt-black" style="background-color:white" fixed>
        <router-link to="/home" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <img :src="uploadpath+'resource/'+res.realtimedate" class="data_bg">
    
<div class="flex-row column rtd padding">

    <div class="flex-row flex-center flex-1 margin-left-40" style="">

     
     <div class="flex-row flex-center flex-1">
     <img :src="uploadpath+'resource/'+res.star_gray" class="icon-10 ">
     <div class="txt-white txt-bold margin-left-5 ">尿量：0ml</div>
     </div>


     <div class="flex-row flex-center flex-1">
     <img :src="uploadpath+'resource/'+res.star_gray" class="icon-10">
     <div class="txt-white txt-bold margin-left-5">睡姿：卧睡</div>
     </div>

    </div>

    <div class="flex-row flex-center flex-1 margin-left-40 margin-top-10" style="">

     <div class="flex-row flex-center flex-1">
     <img :src="uploadpath+'resource/'+res.star_gray" class="icon-10">
     <div class="txt-white txt-bold margin-left-5 ">湿度：0%</div>
     </div>

     <div class="flex-row flex-center flex-1">
     <img :src="uploadpath+'resource/'+res.star_gray" class="icon-10">
     <div class="txt-white txt-bold margin-left-5">温度：0℃</div>
     </div>

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


