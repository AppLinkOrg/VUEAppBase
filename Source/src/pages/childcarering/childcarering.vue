<style>
.share {
  position: fixed;
  bottom: 10%;
  right: 10%;
}
.img {
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  width: 100%;
  height: 200px;
}
.zhutu {
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  height: 150px;
  width: 100%;
}
.under {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.one{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>

<template>
  <div class="" style="background:white">
    <mt-header fixed title="育儿圈" style="background-color:#FF4081"></mt-header>
    <div class="height-40"></div>

    <div class="padding-10 h7">2019年03月15日</div>

    <div class="padding-5 flex-row" style>
      <div class="flex-row column flex-1">
        <div
          class="padding-5 "
          style="width:100%;"
          v-for="(item, index) in momentlist"
          v-show="item.id%2!=0"
          :key="index"
          @click="pushParam('momentdetails',{id:item.id})"
        >
          <div class="radius-5">
           <img :src="uploadpath+'baby/'+item.imgs" v-if="index>0"  class="img" style>
           <img :src="uploadpath+'baby/'+item.imgs" v-if="index==0" class="zhutu" style>
          <!-- <div>{{index}}</div>  -->
            <div class="bg-gray padding-10 under">
              <div class="txt-bold text " v-if="index>0" style=" ">{{item.summary}}</div>
              <div class="txt-bold one " v-if="index==0" style=" ">{{item.summary}}</div>
              <div class="flex-row flex-center under margin-top-5">
                <img
                  :src="uploadpath+'member/'+item.member_photo"
                  class="bg-gray icon-20 radius-50"
                  style
                >

                <div class="txt-bold flex-1 margin-left-5">{{item.member_name}}</div>

                <img :src="uploadpath+'resource/'+res.mylike" class="icon-10 margin-top-5" style>

                <div class="margin-left-5 margin-top-10 txt-bold">{{item.count}}</div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-row flex-column flex-1 ">
        <!-- <div
          class="flex-row flex-column padding-5 margin-top-10"
          style="width:100%;min-height:100px;"
        >
        
        </div> -->

        <div  v-for="(item, index) in momentlist"
          :key="index"
           v-show="item.id%2==0"
          @click="pushParam('momentdetails',{id:item.id})"  class="flex-row flex-column padding-5" >

          <div class="radius-5" style>
           <img :src="uploadpath+'baby/'+item.imgs"  class="img " style>
           <!-- <div>{{index}}</div> -->
            <div class="bg-gray padding-10 under">
              <div class="txt-bold text" >{{item.summary}}</div>
              <div class="flex-row flex-center under margin-top-5">
               <img
                  :src="uploadpath+'member/'+item.member_photo"
                  class="bg-gray icon-20 radius-50"
                  style
                >

               <div class="txt-bold flex-1 margin-left-5">{{item.member_name}}</div>

                <img :src="uploadpath+'resource/'+res.mylike" class="icon-10 margin-top-5" style>

                <div class="margin-top-10 margin-left-5 txt-bold">{{item.count}}</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div class="share" @click="push('/share',true)">
      <img :src="uploadpath+'resource/'+res.fabu" class="icon-20 bg-gray" style="border-radius:50%">
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
  setData(data) {
    data.momentlist = "";
    return data;
  }
  onMyLoad() {
    this.mntlist();
  }

  mntlist() {
    this.post("moments", "momentlist", {}).then(ret => {
      this.momentlist = ret;
    });
  }



}

var content = new Content();
var body = content.generateBodyJson();
body.methods.mntlist = content.mntlist;

export default body;
</script>
