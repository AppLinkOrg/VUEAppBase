<style lang="scss" scoped>
.btn {
  position: fixed;
  /* width: 100%; */
  bottom: 10%;
}


</style>

<template>
  <div class="bg-gray" style="height:100%">
    <div class="height-40">
      <mt-header style="background-color:#FF4081" title="添加宝贝" fixed>
        <router-link to="/mybaby" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="flex-row flex-column">
      <div class="height-40"></div>
      <img
        :src="uploadpath+'resource/'+res.icon4"
        class="icon-30 bg-white"
        style="border:2px solid white;border-radius:50%"
        @click="sctx"
        v-show="photo==''"
      >
      
      <img
        :src="photo"
        class="icon-30 bg-white"
        style="border:2px solid white;border-radius:50%"
        @click="sctx"
        v-show="photo!=''"
      >

      <div v-show="photo==''" class="margin-top-10">添加头像</div>

      <div class="height-30"></div>

      <div class="flex-row flex-center padding-5 bg-white" style="border-radius:5px">
        <img :src="uploadpath+'resource/'+res.icon4" class="icon-10">
        <input
          class="margin-left-5 inputxm"
          style="width:260px;height:30px"
          placeholder="请输入宝贝名字"
          v-model="name"
        >
      </div>

      <div class="height-20"></div>

      <div class="flex-row flex-center padding-5 bg-white" style="border-radius:5px">
        <img :src="uploadpath+'resource/'+res.icon3" class="icon-10">
        <input
          class="margin-left-5 inputxb"
          v-model="sex"
          @click="inputFun"
          style="width:260px;height:30px"
          placeholder="请选择宝贝性别"
          readonly="readOnly"
        >
      </div>

      <div class="height-20"></div>

      <div class="flex-row flex-center padding-5 bg-white" style="border-radius:5px">
        <img :src="uploadpath+'resource/'+res.icon2" class="icon-10">
        <input
          class="margin-left-5 inputsr"
          v-model="birthday"
          style="width:260px;height:30px"
          placeholder="请选择宝贝生日"
        >
      </div>

      <div class="height-20"></div>

      <div class="flex-row flex-center padding-5 bg-white" style="border-radius:5px">
        <img :src="uploadpath+'resource/'+res.icon1" class="icon-10">
        <input
          class="margin-left-5 inputxb1"
          v-model="sex1"
          @click="inputFun1"
          style="width:260px;height:30px"
          placeholder="请填写与宝贝关系"
          readonly="readOnly"
        >
      </div>

      <div class="margin-top-80">
        <mt-button
          @click="tijiao"
          v-show="canshu1==undefined"
          class
          style="width:290px;height:40px"
          type="primary"
        >添加</mt-button>
        <mt-button
          @click="tijiao"
          v-show="canshu1!=undefined"
          class
          style="width:290px;height:40px"
          type="primary"
        >修改</mt-button>
      </div>
    </div>

    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>

    <mt-popup style="width:100vw" v-model="sexpopup" position="bottom">
      <mt-picker :slots="dateSlots" @change="onSexChange" valueKey="label"></mt-picker>
    </mt-popup>

    <mt-popup style="width:100vw" v-model="sexpopup1" position="bottom">
      <mt-picker :slots="yujiazhan" :showToolbar="true" @change="onSexChange1" valueKey="name">
        <slot name="toolbar">
        <!-- <span @click="sexpopup1=false">取消</span>
        <span >确定</span> -->
      </slot>
      </mt-picker>
    </mt-popup>
  </div>
</template>

 
<script>
import { AppBase } from "../../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }
  setData(data) {
    data.actions = [];
    data.dateSlots = [];
    data.dateSlots1 = [];
    data.sexpopup = false;
    data.sexpopup1 = false;
    data.yujiazhan = [];
    data.sex = "";
    data.sex1 = "";
    data.photo = "";
    data.sex2 = "";
    data.name = "";
    data.between_id_name = "";
    data.birthday = "";
    data.afphoto = "";
    data.canshu1 = "";
    data.sheetVisible = false;
    data.docmHeight = document.documentElement.clientHeight;
    data.showHeight = document.documentElement.clientHeight;
    return data;
  }
  onMyLoad() {}
  onMyShow() {
    this.canshu1 = this.$route.params.id;

    if (this.canshu1 != undefined) {
      this.post("inst", "babyinfo", { id: this.$route.params.id }).then(ret => {
        this.sex1 = ret.between_id_name;
        this.name = ret.name;
        this.sex = ret.sex;
        this.birthday = ret.birthday;
        this.sex2 = ret.between_id;
        this.photo = this.uploadpath + "baby/" + ret.img;
      });
    }

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

  sctx() {
    this.sheetVisible = true;
  }

  getCamera() {
    console.log(this);
    this.takePhoto(src => {
      this.photo = src;
    });
  }
  getLibrary() {
    this.choosePhoto(src => {
      this.photo = src;
    });
  }
  onSexChange(picker, values) {
    this.dateSlots = [{ values: ["男", "女"] }];
    this.sex = values[0];

    console.log(this.sex);
  }
  onSexChange1(picker, values) {
    this.post("inst", "yujiazhan", {}).then(ret => {
      this.yujiazhan = [{ values: ret }];
      console.log(this.yujiazhan);
      console.log(123);
      this.sex1 = values[0].name;

      this.sex2 = values[0].id;
    });
  }

  inputFun() {
    this.sexpopup = true;
  }
  inputFun1() {
    this.sexpopup1 = true;
  }
  iputname(e) {
    this.name = e.target.value;
  }
  tijiao() {
    var name = document.getElementsByClassName("inputxm")[0].value;
    var sex = document.getElementsByClassName("inputxb")[0].value;
    var sex1 = document.getElementsByClassName("inputxb1")[0].value;
    var birthday = document.getElementsByClassName("inputsr")[0].value;

    if (this.photo == "") {
      alert("请上传头像");
      return;
    }
    if (this.name == "") {
      alert("请填写宝贝姓名");
      return;
    }
    if (sex == "") {
      alert("请填写宝贝性别");
      return;
    }
    if (birthday == "") {
      alert("请填写宝贝生日");
      return;
    }
    if (sex1 == "") {
      alert("请填写与宝贝关系");
      return;
    }

    this.uploadFile(this.photo, "baby", filename => {
      if(this.canshu1==undefined)
      {
      this.post("news", "addbaby", {
        name: name,
        sex: sex,
        birthday: birthday,
        between_id: this.sex2,
        img: filename,
        status: "A"
      }).then(ret => {
        if (ret.code == "0") {
          window.history.go(-1);
        }
      });

      }
      else{
this.post("news", "addbaby", {
 primary_id:this.canshu1,
        name: name,
        sex: sex,
        birthday: birthday,
        between_id: this.sex2,
        img: filename,
        status: "A"
      }).then(ret => {
        if (ret.code == "0") {
          window.history.go(-1);
        }
      });


      }

    });
  }
}
// $("#btn_exit").bind("click",function(){
//               //window.location.reload();    //刷新
//              // window.history.go(1);         //前进
//              // window.history.go(-1);        //返回+刷新
//              // window.history.forward();  //前进
//               window.history.back();       //返回
//   });

var content = new Content();
var body = content.generateBodyJson();
body.methods.sctx = content.sctx;
body.methods.getCamera = content.getCamera;
body.methods.getLibrary = content.getLibrary;
body.methods.onSexChange = content.onSexChange;
body.methods.onSexChange1 = content.onSexChange1;
body.methods.inputFun = content.inputFun;
body.methods.inputFun1 = content.inputFun1;
body.methods.iputname = content.iputname;
body.methods.tijiao = content.tijiao;
export default body;
</script>
