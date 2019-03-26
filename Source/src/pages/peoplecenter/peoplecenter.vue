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
        <img  @click="sctx" :src="photo"
            class="icon-20  margin-right-10"
            style="border:1px solid white;border-radius:50%"
          >
    </div>

    <div class="flex-row flex-center padding-10 height-50" style="border-bottom:1px solid #EEEEEE">
        <div class="txt-bold flex-1 margin-left-10">昵称</div>
        <input placeholder="请填写昵称" v-model="name" class="text-right margin-right-10" @blur.prevent="tijiaoname()">
       
    </div>

    <div class="flex-row flex-center padding-10 height-50" style="border-bottom:1px solid #EEEEEE">
        <div class="txt-bold flex-1 margin-left-10">手机</div>
         <input placeholder="" disabled='false' v-model="shouji" class="text-right margin-right-10" @blur.prevent="tijiaoshouji()">
    </div>

    <div class="" style="height:5px;background:#EEEEEE"></div>

    <button class="text-center padding-15  txt-bold" v-if="isLogin()"  @click="logout()" style="border:1px solid #EEEEEE;width:100%">
        退出登录
    </button>

    
<mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
  
</template>

<script>
import { AppBase } from "../../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }
    setData(data) {
   data.name='';
   data.actions = [];
   data.shouji='';
   data.touxian='';
   data.photo='';
   data.sheetVisible = false;
    return data;
  }
  onMyShow(){
    this.name=(this.MemberInfo==null||this.MemberInfo.name==''?"":this.MemberInfo.name);
    this.shouji=(this.MemberInfo==null||this.MemberInfo.mobile==''?"":this.MemberInfo.mobile);
     this.photo=(this.MemberInfo==null||this.MemberInfo.photo==''?"": this.uploadpath + "member/" + this.MemberInfo.photo);
      this.actions = [
      {
        name: "拍照",
        method: () => {
          this.getCamera();
        }
      },
      {
        name: "从相册中选择",
        method: () => {
          this.getLibrary();
        }
      }
    ];
  }
   
  
  tijiaoname(){
    this.post("member", "updatemember", {  
        name: this.name,
      }).then(ret => {
        console.log(ret);
      });
  }
    tijiaoshouji(){
    this.post("member", "updatemember", {  
        shouji: this.shouji,
      }).then(ret => {
        console.log(ret);
      });
  }
    tijiaotouxian(){
   
  }
    sctx() {
    this.sheetVisible = true;
  }
  getCamera() {
    console.log(this);
    this.takePhoto(src => {
      this.photo = src;
      this.uploadFile(this.photo,"member",filename=>{
          
 this.post("member", "updatemember", {  
        touxian: filename,
      }).then(ret => {
        console.log(ret);
      });



      })
    });
  }
  getLibrary() {
    this.choosePhoto(src => {
      this.photo = src;
      this.uploadFile(this.photo,"member",filename=>{
          
 this.post("member", "updatemember", {  
        touxian: filename,
      }).then(ret => {
        console.log(ret);
      });



      })
    });
  }

}

 

var content = new Content();
var body = content.generateBodyJson();
body.methods.tijiaoname = content.tijiaoname;
body.methods.tijiaotouxian = content.tijiaotouxian;
body.methods.tijiaoshouji = content.tijiaoshouji;
body.methods.getCamera = content.getCamera;
body.methods.getLibrary = content.getLibrary;
body.methods.sctx = content.sctx;
export default body;
</script>
