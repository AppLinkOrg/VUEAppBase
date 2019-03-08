<style>
body {
  background: white !important;
}
.buhuanhan{
   overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;  
    -webkit-box-orient: vertical;
}
</style>
<template>
  <div>
    <div class="height-40">
      <mt-header :title="xianqin.summary" style="background-color:#FF4081" fixed>
        <router-link to="/Information" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="padding-10">
<div class="buhuanhan" style="font-size:18px !important">{{xianqin.title}}</div>
<div class="flex-row margin-top-10 "><div class="flex-1">{{xianqin.ref}}</div><div>{{xianqin.viewcount}}阅读</div></div>

<div class="margin-top-20" v-html="xianqin.content"></div>
 <div class="" style="border-bottom:1px solid #DDDDDD"></div>

 <div  class="margin-10 flex-row flex-center"  >
      <div class="flex-1 txt-black txt-bold h7">育儿推荐</div>
      <div>
        <img :src="uploadpath+'resource/'+res.you" class="icon-10 margin-left-10">
      </div>
    </div>
    <div
      class="margin-10 flex-row flex-center padding-bottom-10" @click="pushParam('infminfo',{id:item.id})" style="border-bottom:1px solid #DDDDDD"  v-for="(item, index) in yuertuijian" :key='index' >
      <div class="flex-2 margin-right-20">
        <div class="buhuanhan">{{item.title}}</div>
        <div class="flex-row flex-center margin-top-20">
          <div class="flex-1">{{item.ref}}</div>
          <div>{{item.viewcount}}阅读</div>
        </div>
      </div>
      <div class="flex-1">
        <img :src="uploadpath+'news/'+item.cover" class="tuijiantu" style="width:100%;height:68px;">
      </div>
    </div>

    </div>
  </div>
</template>
<script>
import { AppBase } from "../../app/AppBase";
import { AppUtil } from "../../app/apputil";
class Content extends AppBase {
  constructor() {
    super();
  }

  setData(data) {
    data.canshu = "";
     data.yuertuijian = "";
    data.xianqin="";
    return data;
  }
  onMyLoad() {
    this.canshu = this.$route.params.id;
    this.newinfo();
    this.newslist();
     
  }
  newinfo() {
    this.post("news", "info", { id: this.canshu }).then(ret => {
      ret.content=AppUtil.HtmlDecode(ret.content);
      this.xianqin = ret;
     console.log((this.xianqin.content));
    });
  }
  newslist(){
      this.post("news", "list", {rmd1:'Y'}).then(ret => {
      this.yuertuijian=ret;
    });
    }
    
//  HtmlDecode(str) {
//     var s = "";
//     if (str.length == 0) return "";
//     s = str.replace(/&amp;/g, "&");
//     s = s.replace(/&lt;/g, "<");
//     s = s.replace(/&gt;/g, ">");
//     s = s.replace(/&nbsp;/g, " ");
//     s = s.replace(/&#39;/g, "\'");
//     s = s.replace(/&quot;/g, "\""); 


//     s = s.replace(new RegExp("</p>", "gm"), "</p><br />");
//     s = s.replace(new RegExp("\"/alucard263096/cdiaper/upload/", "gm"), "\"" + "https://cmsdev.app-link.org/alucard263096/cdiaper/upload/");


//     return s;
//   }
}
var content = new Content();
var body = content.generateBodyJson();
body.methods.newinfo = content.newinfo;
body.methods.HtmlDecode = content.HtmlDecode;
body.methods.newslist = content.newslist;
export default body;
</script>