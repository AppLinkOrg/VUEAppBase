<template>
  <div>
    <mt-header type="primary" style="background-color:#FF4081"  fixed title="绑定手机">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="back()"></mt-button>
      </router-link>
    </mt-header>
    <div class="height-40"></div>
    <div class="padding white-block">
      <div>
        <div>
          <div class="flex-row flex-center">
            <div class="flex-1 padding">
              <img :src="uploadpath+'member/'+photo" class="icon-75 margin-right">
            </div>
          </div>
        </div>
        <div>
          <div class="flex-row flex-center">
            <div>
              <img :src="uploadpath+'resource/'+res.name" class="icon-20 margin-right">
            </div>
            <div class="flex-1">
              <mt-field
                :disabled="true"
                placeholder="请输入昵称"
                type="text"
                v-model="name"
                :attr="{ maxlength: 30 }"
              ></mt-field>
            </div>
          </div>
        </div>
        <div>
          <div class="flex-row flex-center">
            <div>
              <img :src="uploadpath+'resource/'+res.mobile" class="icon-20 margin-right">
            </div>
            <div class="flex-1">
              <mt-field
                :disabled="inverify==true"
                placeholder="+86 请输入手机号码"
                type="tel"
                v-model="mobile"
                :attr="{ maxlength: 11 }"
              ></mt-field>
            </div>
          </div>
        </div>
        <div class="hr"></div>
        <div class="margin-top-20" v-if="inverify==false">
          <mt-button
            size="large"
            type="primary"
            :disabled="mobile.length!=11"
            @click="setInVerify()"
          >下一步</mt-button>
        </div>
        <div class="margin-top-20" v-if="inverify==true">
          <div class="h8 txt-gray">
            我们已经发送验证短信到你手机：{{mobile}}
            <br>请将验证好填入以下输入框
          </div>
          <div class="margin-top-40">
            <div class="flex-row text-center">
              <div class="flex-1"></div>
              <div>
                <input
                  type="tel"
                  v-model="c1"
                  class="codeinput"
                  :class="{'fillc':c1!=''}"
                  maxlength="1"
                  ref="inputc1"
                  @keyup="setC2Focus()"
                >
              </div>
              <div class="flex-1"></div>
              <div>
                <input
                  type="tel"
                  v-model="c2"
                  class="codeinput"
                  :class="{'fillc':c2!=''}"
                  maxlength="1"
                  ref="inputc2"
                  @keyup="setC3Focus()"
                >
              </div>
              <div class="flex-1"></div>
              <div>
                <input
                  type="tel"
                  v-model="c3"
                  class="codeinput"
                  :class="{'fillc':c3!=''}"
                  maxlength="1"
                  ref="inputc3"
                  @keyup="setC4Focus()"
                >
              </div>
              <div class="flex-1"></div>
              <div>
                <input
                  type="tel"
                  v-model="c4"
                  class="codeinput"
                  :class="{'fillc':c4!=''}"
                  maxlength="1"
                  ref="inputc4"
                  @keyup="submitRegister()"
                >
              </div>
              <div class="flex-1"></div>
            </div>
          </div>
          <div class="flex-row text-center">
            <div class="flex-1"></div>
            <div class="margin-top-20 resend text-right">
              <div class="h8 txt-gray" v-if="reminder>0">{{reminder}}秒后重新发送</div>
              <div class="h8 txt-primary" v-if="reminder<=0" @click="sendVerifyCode()">重新发送</div>
            </div>
            <div class="flex-1"></div>
          </div>
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

  setData(data) {
    data.mobile = "";
    data.name = "";
    data.photo = "";
    data.openid = "";
    data.reminder = 0;
    data.inverify = false;
    data.c1 = "";
    data.c2 = "";
    data.c3 = "";
    data.c4 = "";
    data.infocus = "";

    return data;
  }
  onMyLoad(){

    this.name = this.$route.params.name;
    this.photo = this.$route.params.photo;
    this.openid = this.$route.params.openid;
  }
  setInVerify() {
    this.sendVerifyCode();
    this.timer = setInterval(() => {
      if (this.reminder > 0) {
        this.reminder--;
      }
    }, 1000);
  }
  setC2Focus() {
    this.c2 = "";
    this.$nextTick(() => {
      this.$refs.inputc2.focus();
    });
  }
  setC3Focus() {
    this.c3 = "";
    this.$nextTick(() => {
      this.$refs.inputc3.focus();
    });
  }
  setC4Focus() {
    this.c4 = "";
    this.$nextTick(() => {
      this.$refs.inputc4.focus();
    });
  }
  submitRegister() {
    var verifycode = this.c1 + this.c2 + this.c3 + this.c4;
    this.post("aliyun", "verifycode", {
      mobile: this.mobile,
      verifycode,
      type: "register"
    }).then(ret => {
      if (ret.code == 0) {
        this.post("member", "wxauthbind", {
          mobile: this.mobile,
          name: this.name,
          photo: this.photo,
          appopenid: this.openid
        }).then(ret => {
          if (ret.code == "0") {
            this.toast("绑定成功");
            this.store("UserToken", ret.return);
            this.back(-2);
          } else {
            this.toast(ret.result);
          }
        });
      } else {
        this.c1 = "";
        this.c2 = "";
        this.c3 = "";
        this.c4 = "";
        this.toast("验证码校验失败，请重新尝试");
      }
    });
  }

  sendVerifyCode() {
    this.post("member", "checkcanreg", { mobile: this.mobile,openid:this.openid }).then(ret => {
      if (ret.code == "0") {
        this.inverify = true;
        this.post("aliyun", "sendverifycode", {
          mobile: this.mobile,
          type: "register"
        }).then(ret => {
          if (ret.code == 0) {
            this.reminder = 60;

            this.c1 = "";
            this.c2 = "";
            this.c3 = "";
            this.c4 = "";
            //this.$refs["inputc1"].focus();
            this.$nextTick(() => {
              this.$refs.inputc1.focus();
            });

            this.toast("验证码已发送，请注意查收");
          } else {
            this.toast("验证码发送失败，请稍后重试");
          }
        });
      } else {
        this.toast("手机号码已经被绑定");
      }
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.methods.setInVerify = content.setInVerify;
body.methods.setC2Focus = content.setC2Focus;
body.methods.setC3Focus = content.setC3Focus;
body.methods.setC4Focus = content.setC4Focus;
body.methods.submitRegister = content.submitRegister;
body.methods.sendVerifyCode = content.sendVerifyCode;

export default body;
</script>
<style scoped>
.codeinput {
  font-size: 40px;
  text-align: center;
  width: 50px;
  border-bottom: gray 2px solid;
}
.fillc {
  border-bottom: #6badff 2px solid;
}
</style>
