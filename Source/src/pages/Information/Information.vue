<template >
  <div>
    
    <img :src="uploadpath+'resource/'+res.mine_bg" class style="width:100%;height:160px;">
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
    

    <div class="margin-10">
    <div class="flex-row">
      <div class="padding-left-10">
        <img
          :src="uploadpath+'resource/'+res.Personalcenter"
          class="icon-15 margin-left-10"
          style="border:1px solid white;border-radius:50%"
        >
        <div>我的宝贝</div>
      </div>
      <div class="flex-1 flex-row flex-center margin-10 sousuo">
        <img :src="uploadpath+'resource/'+res.sousuo" class="icon-15 margin-left-10">
        <div>搜索文章</div>
      </div>
    </div>
    <img :src="uploadpath+'resource/'+res.mine_bg" class style="width:100%;height:100px;">
    <div class="margin-10 flex-row flex-center">
      <div class="flex-1 txt-black txt-bold h7">育儿推荐</div>
      <div>
        <img :src="uploadpath+'resource/'+res.sousuo" class="icon-10 margin-left-10">
      </div>
    </div>
    <div
      class="margin-10 flex-row flex-center padding-bottom-10"
      style="border-bottom:1px solid #DDDDDD"
    >
      <div class="flex-2 margin-right-20">
        <div>文章标题，最多不超过2行？最多不超过2行...........</div>
        <div class="flex-row flex-center margin-top-20">
          <div class="flex-1">文章出处</div>
          <div>18000阅读</div>
        </div>
      </div>
      <div class="flex-1">
        <img :src="uploadpath+'resource/'+res.mine_bg" class style="width:100%;height:78px;">
      </div>
    </div>
    <div
      class="margin-10 flex-row flex-center padding-bottom-10"
      style="border-bottom:1px solid #DDDDDD"
    >
      <div class="flex-2 margin-right-20">
        <div>文章标题，最多不超过2行？最多不超过2行...........</div>
        <div class="flex-row flex-center margin-top-20">
          <div class="flex-1">文章出处</div>
          <div>18000阅读</div>
        </div>
      </div>
      <div class="flex-1">
        <img :src="uploadpath+'resource/'+res.mine_bg" class style="width:100%;height:78px;">
      </div>
    </div>

    <div class="margin-10  " >
      <div class="margin-top-20">文字导读，最长不超过2行。。。。。文字导读，最长不超过2行。。。。。。。。。。。。</div>
      <div class="flex-row flex-center" style="border-bottom:1px solid #DDDDDD;padding-bottom:10px">
        <img
          :src="uploadpath+'resource/'+res.mine_bg"
          class="flex-1"
          style="width:20%;height:60px;margin:5px;"
        >
        <img
          :src="uploadpath+'resource/'+res.mine_bg"
          class="flex-1"
          style="width:20%;height:60px;margin:5px;"
        >
        <img
          :src="uploadpath+'resource/'+res.mine_bg"
          class="flex-1"
          style="width:20%;height:60px;margin:5px;"
        >
      </div>
    </div>

    <div class="margin-10 flex-row flex-center">
      <div class="flex-1 txt-black txt-bold h7">热门推荐</div>
      <div>
        <img :src="uploadpath+'resource/'+res.you" class="icon-10 margin-left-10">
      </div>
    </div>
<div style="padding-bottom:50px">
    <div class="margin-10 flex-row flex-center padding-bottom-10"  @click="pushParam('infminfo',{id:item.id})" style="border-bottom:1px solid #DDDDDD ;" v-for="(item, qwe) in rementuijian" :key='qwe'   >
      <div class="flex-1">
        <img :src="uploadpath+'news/'+item.cover" class="tuijiantu" style="width:100%;height:68px;">
      </div>
      <div class="flex-2 margin-left-20">
        <div>{{item.title}}</div>
        <div class="flex-row flex-center margin-top-20">
          <div class="flex-1">{{item.ref}}</div>
          <div>{{item.viewcount}}阅读</div>
        </div>
      </div>
    </div>
    
    </div>
  
<div class="margin-10 flex-row flex-center">
      <div class="flex-1 txt-black txt-bold h7">热门推荐</div>
      <div>
        <img :src="uploadpath+'resource/'+res.sousuo" class="icon-10 margin-left-10">
      </div>
    </div>

 <div
      class="margin-10 flex-row flex-center padding-bottom-10"
      style="border-bottom:1px solid #DDDDDD ;padding-bottom:100px"
    >
     <div class="flex-1">
        <img :src="uploadpath+'resource/'+res.mine_bg" class style="width:100%;height:78px;">
      </div>
      <div class="flex-2 margin-left-20">
        <div>文章标题，最多不超过2行？最多不超过2行...........</div>
        <div class="flex-row flex-center margin-top-20">
          <div class="flex-1">文章出处</div>
          <div>18000阅读</div>
        </div>
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

 setData(data) {
    data.yuertuijian = "";
    data.rementuijian = "";
    return data;
  }
  onMyLoad(){

     this.newslist();
   } 
  newslist() {
    this.post("news", "list", {rmd1:'Y'}).then(ret => {
      this.yuertuijian=ret;
      
    });
    this.post("news", "list", {rmd2:'Y'}).then(ret => {
      this.rementuijian=ret;
      
    });
  }
   
}

var content = new Content();
var body = content.generateBodyJson();
body.methods.newslist = content.newslist;
export default body;
</script>


<style scoped>
.sousuo {
  background-color: #fbcada;
  border-radius: 5px;

}
.buhuanhan{
   overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;  
    -webkit-box-orient: vertical;
}
.tuijiantu{
border-radius: 5px;

}

body{
  background: white !important;
}

.sousuo {
  background-color: #fbcada;
  border-radius: 10px;
}
</style>

