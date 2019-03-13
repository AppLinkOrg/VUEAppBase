<style>
body {
  background: white !important;
}
.pinlun{
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>

<template>
  <div>

    <div class="height-40">
      <mt-header title="详情" style="background-color:#FF4081" fixed>
        <router-link to="/childcarering" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class>
      <img :src="uploadpath+'baby/'+momentsinfo.imgs" class="" style="width:100%;height:400px">
    </div>

    <div class="padding-10 flex-row flex-center">
      <img :src="uploadpath+'member/'+momentsinfo.member_photo" class="radius-50 icon-20 " style>

      <div class="flex-row column flex-1 margin-left-5">
        <div class="txt-bold h7-5">{{momentsinfo.member_name}}</div>
        <div class="txt-gray margin-top-5">{{momentsinfo.rsl_date_formatting}}</div>
      </div>
      
      <img
        :src="uploadpath+'resource/'+res.dianzan"
        class="radius-50 icon-15  margin-right-5"
        style
        @click="dianzan"
      >

      <div class="margin-right-10 margin-top-10 h7-5 ">{{momentsinfo.count}}</div>
    </div>

    <div class="padding-10 h7 txt-bold ">{{momentsinfo.summary}}</div>

    <div class="padding-10 h8" style="border-bottom:1px solid #e5e5e5" ref="wrapper">
      
      <img :src="uploadpath+'baby/'+momentsinfo.imgs" class="icon-30 bg-gray margin-right-5" style>
      
    </div>

    <div class="padding-10 txt-bold h7-5" >评论(0):</div>

    <div class="flex-row padding-left-10 padding-right-10 margin-top-20" v-for="(item, index) in talklist" :key="index">

      <img :src="uploadpath+'member/'+item.touxian" class="icon-20  " style>

      <div class="flex-row column margin-left-10 flex-1" style>
        
        <div class="flex-row column flex-1">
          <div class="txt-bold h7-5">{{item.member_name}}</div>
          <div class="txt-gray margin-top-5">{{item.msg_date_formatting}}</div>
        </div>

        <div class="margin-top-5 flex-row flex-wrap h7-5 txt-bold"  style="word-break: break-all; 
    word-wrap: break-word;width:100%">{{item.msg}}</div>

      </div>
    </div>

    <div class="pinlun flex-row flex-center"  style="border-top:1px solid gray;">
    <input   class="h7 txt-bold padding-10 " name="talk"  style="height:50px;width:100%;"  placeholder="说两句">
    <mt-button class=" bg-gray h7-5" type="primary"  size="small"  style="width:70px;height:50px" @click="submit" >评论</mt-button>
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
    data.momentsinfo = "";
    data.aid = "";
    data.talklist = "";
    data.likelist = "";
    data.talk = "";
    return data;
  }
  
  onMyLoad() {
    this.aid=this.$route.params.id;
    this.tklist();
    this.lklist();
    this.info();
    this.submit();
    this.dianzan();
  }

  info() {
    this.post("moments", "momentsinfo", {id:this.aid}).then(ret => {
      this.momentsinfo = ret;
    });
  }



  tklist() {
    this.post("moments", "talklist", {babycle_id:this.aid}).then(ret => {
      this.talklist = ret;
    });
  }

  lklist() {
    this.post("moments", "likelist", {babycle_id:this.aid}).then(ret => {
      this.likelist = ret;
    });
  }




  submit(){
  var talks=document.getElementsByName("talk");
  // console.log(talks[0].value);
  // console.log("0534445454445645");\
  this.post("moments", "addtalk", {babycle_id:this.aid,msg:talks[0].value}).then(ret => {
      this.addtalk = ret;
      this.tklist();
  });

  }

  dianzan(){
      this.post("moments", "addlike", {babycle_id:this.aid,status:"A"}).then(ret => {
      this.addlike = ret;
      this.info();
      });
  }

}

var content = new Content();
var body = content.generateBodyJson();
body.methods.info = content.info;
body.methods.tklist = content.tklist;
body.methods.lklist = content.lklist;
body.methods.submit = content.submit;
body.methods.dianzan = content.dianzan;
export default body;
</script>
