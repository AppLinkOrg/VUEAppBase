<template>
  <div>
    <mt-header fixed title="忘记密码">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="back()"></mt-button>
      </router-link>
    </mt-header>
    <div class="height-40"></div>
    <div class="padding white-block">
      <div>
        <div>
          <div class="flex-row flex-center">
            <div>
              <img :src="uploadpath+'resource/'+res.mobile" class="icon-20 margin-right">
            </div>
            <div class="flex-1">
              <mt-field placeholder="输入登录手机号" type="tel" v-model="mobile" :attr="{ maxlength: 11 }"></mt-field>
            </div>
          </div>
        </div>
        <div>
          <div class="flex-row flex-center">
            <div>
              <img :src="uploadpath+'resource/'+res.shuo" class="icon-20 margin-right">
            </div>
            <div class="flex-1">
              <mt-field placeholder="输入登录密码" type="password" v-model="password"></mt-field>
            </div>
          </div>
        </div>
        <div class="margin-top-10">
          <div class="flex-row flex-center">
            <div class="flex-1"></div>
            <div class="h8 txt-gray" @click="push('forgetpassword')">忘记密码</div>
          </div>
        </div>
        <div class="hr"></div>
        <div class="margin-top-20">
          <mt-button size="large" type="primary" @click="trylogin()">登录</mt-button>
        </div>
        <div class="height-40"></div>
      </div>
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
  setData(data){
      
    data.mobile = "";
    data.password = "";

    return data;
  }
  onMyLoad(){
      var storemobile=this.store("lastloginmobile");
      //alert(storemobile);
      this.mobile=storemobile;
  }
  trylogin(){
      this.post("member","login",{mobile:this.mobile,password:this.password}).then((ret)=>{
      if(ret.code=="0"){
        this.store("lastloginmobile",this.mobile);
        this.store("UserToken",ret.return);
        this.toast("登录成功");
        this.back(-2);
      }else{
        this.toast("手机号码或密码不正确");
      }
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.methods.trylogin=content.trylogin;

export default body;
</script>
<style scoped>
</style>
