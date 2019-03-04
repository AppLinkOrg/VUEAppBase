<template>
  <div class="white-block padding-20">
    <!-- <mt-header fixed title="忘记密码">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="back()"></mt-button>
      </router-link>
    </mt-header>-->
    <!-- <div class="height-40"></div> -->
    <div class="flex-row flex-center margin-top-20">
      <div class="flex-1">
        <img :src="uploadpath+'resource/'+res.mobile" class="icon-30">
      </div>

      <div class>新用户注册</div>
    </div>

    <div class="margin-top-40 margin-left-10">
      <div class="txt-bold h7">欢迎使用尿不湿</div>
    </div>

    <div class="padding margin-top-20">
      <div>
        
        <div>
          <div class="flex-row column">
            <div>手机号</div>
            <div>
              <mt-field placeholder="输入登录手机号" type="tel" v-model="mobile" :attr="{ maxlength: 11 }"></mt-field>
            </div>
          </div>
        </div>

        <div class="margin-top-20">
          <div class="flex-row column">
            <div>密码</div>
            <div class style="padding:0">
              <mt-field placeholder="输入登录密码" type="password" v-model="password"></mt-field>
            </div>
          </div>
        </div>

        <div class="hr"></div>
        
        <div class="margin-top-20">
          <mt-button size="large" type="primary" @click="trylogin()">登录</mt-button>
        </div>

        <div class="margin-top-20">
          <div class="flex-row flex-center">
            <div class="flex-1 h8 txt-gray">验证码登录</div>
            <div class="h8 txt-gray" @click="push('forgetpassword')">忘记密码</div>
          </div>
        </div>

        <div class="margin-top-20">
          <div class="flex-row flex-center">
            <div class="txt-gray">———————</div>
            <div class="h8 txt-gray flex-1 text-center" >第三方账号登录</div>
            <div class="txt-gray">————————</div>
          </div>

          <div class="margin-top-10">
            <mt-button type="primary" plain size="large" v-if="wechatInstalled==true" @click="checkWechatAuth()">微信登录</mt-button>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
import { AppBase } from "../../app/AppBase";
import { WechatMgr } from "../../plugins/WechatMgr";

class Content extends AppBase {
  constructor() {
    super();
  }
  setData(data) {
    data.mobile = "";
    data.password = "";
    data.wechatInstalled = false;

    return data;
  }
  onMyLoad() {
    var storemobile = this.store("lastloginmobile");
    //alert(storemobile);
    this.mobile = storemobile;


    WechatMgr.checkInstalled((isinstall)=>{
      this.wechatInstalled=isinstall;
    });
  }



  trylogin() {
    this.post("member", "login", {
      mobile: this.mobile,
      password: this.password
    }).then(ret => {
      if (ret.code == "0") {
        this.store("lastloginmobile", this.mobile);
        this.store("UserToken", ret.return);
        this.toast("登录成功");
        this.back(-2);
      } else {
        this.toast("手机号码或密码不正确");
      }
    });
  }
  checkWechatAuth(){
    WechatMgr.authUserInfo((res)=>{
      var code=res["code"];
      this.post("member","wechatauth",{"oauthcode":code}).then((ret)=>{
        if(ret.code==0){
          this.store("UserToken", ret.return);
          this.toast("登录成功");
          this.back(-2);
        }else{
          this.pushParam("wxauthlogin",ret.return);
        }
      });
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.methods.trylogin = content.trylogin;
body.methods.checkWechatAuth = content.checkWechatAuth;

export default body;
</script>
<style scoped>
</style>
