<template>
  <div>
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
<style scoped>
.sousuo {
  background-color: #fbcada;
  border-radius: 10px;
}
</style>

