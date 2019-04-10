<template >
  <div>
    
    <img :src="uploadpath+'resource/'+res.zixunbj" class style="width:100%;height:160px;">
    <div  class="margin-10 flex-row flex-center"  >
      <div class="flex-1 txt-black txt-bold h7">育儿推荐</div>
      <div>
        <!-- <img :src="uploadpath+'resource/'+res.you" class="icon-10 margin-left-10"> -->
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
    

    <div class="margin-10" @click="pushParam('infminfo')" >
      <div class="margin-top-20 buhuanhan">{{wenzi.name}}</div>
      <div class="flex-row flex-center" style="border-bottom:1px solid #DDDDDD;padding-bottom:10px">
        <img
          :src="uploadpath+'textnav/'+wenzi.img1"
          class="flex-1"
          style="width:20%;height:60px;margin:5px;"
        >
        <img
          :src="uploadpath+'textnav/'+wenzi.img2"
          class="flex-1"
          style="width:20%;height:60px;margin:5px;"
        >
        <img
          :src="uploadpath+'textnav/'+wenzi.img3"
          class="flex-1"
          style="width:20%;height:60px;margin:5px;"
        >
      </div>
    </div>

    <div class="margin-10 flex-row flex-center">
      <div class="flex-1 txt-black txt-bold h7">热门推荐</div>
      <div>
        <!-- <img :src="uploadpath+'resource/'+res.you" class="icon-10 margin-left-10"> -->
      </div>
    </div>
<div style="padding-bottom:50px">
    <div class="margin-10 flex-row flex-center padding-bottom-10"  @click="pushParam('infminfo',{id:item.id})" style="border-bottom:1px solid #DDDDDD ;" v-for="(item, qwe) in rementuijian" :key='qwe'   >
      <div class="flex-1">
        <img :src="uploadpath+'news/'+item.cover" class="tuijiantu" style="width:100%;height:68px;">
      </div>
      <div class="flex-2 margin-left-20">
        <div class="buhuanhan">{{item.title}}</div>
        <div class="flex-row flex-center margin-top-20">
          <div class="flex-1">{{item.ref}}</div>
          <div>{{item.viewcount}}阅读</div>
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
    data.wenzi="";
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
    this.post("news", "wenzi", {}).then(ret => {
      this.wenzi=ret;
      
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
</style>