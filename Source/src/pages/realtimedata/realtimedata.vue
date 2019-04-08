
<style>
.data_bg {
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
}
.rtd {
  position: fixed;
  z-index: 1;
  bottom: 15%;
  width: 100%;
}
.rtd1 {
  position: fixed;
  z-index: 2;
  bottom: 40%;
  width: 100%;
}
.url {
  position: fixed;
  bottom: 10%;
  width: 100%;
}
</style>
<template>
  <div>
    <div class="height-40">
      <mt-header title="实时数据" class="txt-black" style="background-color:white" fixed>
        <router-link to="/home" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <img v-show="aidevice.shushidu==0" :src="uploadpath+'resource/'+res.realtimedate" class="data_bg">
    <img  v-show="aidevice.shushidu>0&&aidevice.shushidu<25" :src="uploadpath+'resource/'+res.bg1" class="data_bg">
    <img v-show="aidevice.shushidu>=25&&aidevice.shushidu<50" :src="uploadpath+'resource/'+res.bg2" class="data_bg">
    <img  v-show="aidevice.shushidu>=50&&aidevice.shushidu<75" :src="uploadpath+'resource/'+res.bg3" class="data_bg">
    <img v-show="aidevice.shushidu>=75" :src="uploadpath+'resource/'+res.bg4" class="data_bg">


  <div class="flex-row column rtd1 text-center txt-white txt-bold h3">

{{aidevice.shushidu}}%

  </div>
    <div class="flex-row column rtd padding">
      <div class="flex-row flex-center flex-1 margin-left-40" style>
        <div class="flex-row flex-center flex-1">
          <img :src="uploadpath+'resource/'+res.star_gray" class="icon-10">
          <div class="txt-white txt-bold margin-left-5 h7-5">尿量：{{aidevice.wetml}}</div>
        </div>

        <div class="flex-row flex-center flex-1">
          <img :src="uploadpath+'resource/'+res.star_gray" class="icon-10">
          <div class="txt-white txt-bold margin-left-5 h7-5">睡姿：{{aidevice.post}}</div>
        </div>
      </div>

      <div class="flex-row flex-center flex-1 margin-left-40 margin-top-10" style>
        <div class="flex-row flex-center flex-1">
          <img :src="uploadpath+'resource/'+res.star_gray" class="icon-10">
          <div class="txt-white txt-bold margin-left-5 h7-5">码数：{{xinhao}}码 </div>
        </div>

        <div class="flex-row flex-center flex-1">
          <img :src="uploadpath+'resource/'+res.star_gray" class="icon-10">
          <div class="txt-white txt-bold margin-left-5 h7-5">温度：{{aidevice.temperature}}℃</div>
        </div>
      </div>
    </div>

    <div class="txt-white url flex-row flex-column" @click="push('/historydata')">
      <div>查看历史数据 >>
        <hr class style="margin-top:0">
      </div>
    </div>
  </div>
</template>


<script>
import { AppBase } from "../../app/AppBase";
import { AIDevice } from "../../app/app.bli.js";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { BackgroundMode } from "@ionic-native/background-mode";
class Content extends AppBase {
  constructor() {
    super();
  }
   setData(data) {
    data.aidevice = new AIDevice();
    data.count = 0;
    data.uuid = [];
    data.xinhao="";
    data.selectdeviceid = "";
    //  data.localNotifications=localNotifications;
    return data;
  }
   onMyShow() {
   this.xinhao=this.$route.params.xh;
    this.selectdeviceid=this.$route.params.id;
  
    
    var that = this;
    this.aidevice.startTime();
    this.aidevice.setNotification(this.localNotifications);
    this.aidevice.setNativeAudio(this.nativeAudio);
    if (this.selectdeviceid == "" &&  AppBase.IsAndroid) {
      //
      this.modal("ScanPage", {}, selectdevice => {
       this.selectdeviceid = selectdevice.id;
        
        this.tryScan();
      });
    } else {
      this.tryScan();
    }

    try {
    
    } catch (ex) {}

   
  }
   tryScan() {
    //alert(this.device.advertising);
    if (AppBase.IsMobileWeb) {
      this.aidevice.reloaddata(
        this.mockdevice.id,
        this.mockdevice.advertising,
        0
      );
      //alert(this.aidevice.Version);
    } else {
      try {
        ble.stopScan();
      } catch (e) {}
      var uuid = this.uuid;

      ble.startScanWithOptions(
        [],
        { reportDuplicates: true },
        device => {

          
          //alert(JSON.stringify(device));
          //if(this.selectdeviceid!=)
          if (device.name == undefined) {
              console.log(1);
            return;
          }
          console.log(device);
         
          device.uuid = [];
          if (device.advertising.kCBAdvDataManufacturerData != undefined) {
            var adv = [];
            device.uuid = device.advertising.kCBAdvDataServiceUUIDs;
            var int32View = new Uint8Array(
              device.advertising.kCBAdvDataManufacturerData
            );
            for (var i = 0; i < int32View.length; i++) {
              adv.push(int32View[i].toString());
            }
            device.advertising =
              "2,1,6,17,-1," +
              adv.join(",") +
              ",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
            //alert(device.name);
            //alert(device.advertising);
          }
          //alert(JSON.stringify(device));
          if (
            device.advertising == undefined &&
            typeof device.advertising != "string"
          ) {
              console.log(2);
            return;
          }
          //alert(JSON.stringify(device));

          var scanRecord = device.advertising.split(",");
          var Version = AIDevice.GetVersion(scanRecord);
          var mlength = AIDevice.GetwholeDatelength(Version);
          //alert(scanRecord.length+"<"+mlength);
          if (scanRecord.length < mlength) {
            return;
          }
          var mData = [];
          if (Version == 0) {
            mData = Array(7);
          } else if (Version == 1) {
            mData = Array(7);
          } else if (Version == 2) {
            mData = Array(8);
          }
          //						mTimeOutHandler.removeCallbacks(mThreadTimeOut);
          //						runOnUiThread(capEnter);
          var mdataPosition = AIDevice.GetDataPosition(Version);
          for (var i = mdataPosition; i < mData.length + mdataPosition; i++) {
            mData[i - mdataPosition] = scanRecord[i];
          }
          device.id = AIDevice.GetID(scanRecord);
          device.TYPE = AIDevice.GetType(scanRecord);

          if (
            device.name != undefined &&
            (device.TYPE == "LNT" || device.TYPE == "CHA") &&( this.selectdeviceid == device.id) 
          ) {
            //device.data = JSON.stringify(device);
            //this.ble.stopScan();
            //this.close(device);

            //window.localStorage.setItem("luuid", device.uuid);
            //alert(JSON.stringify(device.data));
            //this.tryConnect();

            this.uuid = device.uuid;

            if (device.advertising != undefined) {
              //alert(this.device.advertising);
              this.count++;
              this.aidevice.reloaddata(
                device.id,
                device.advertising,
                parseInt(device.rssi)
              );
              //alert(this.aidevice.Version);
            }
            //2.73.0
          }
        },
        error => {
          alert(error);
        }
      ); //.subscribe(
    }
  }
  handelFall() {
    //salert(1);
    const confirm = this.alertCtrl.create({
      title: "摔倒处理",
      message: "已经处理完毕？",
      buttons: [
        {
          text: "否",
          handler: () => {}
        },
        {
          text: "是",
          handler: () => {
            this.aidevice.fall = "N";
          }
        }
      ]
    });
    confirm.present();
  }

  stringToBytes(string) {
    var array = new Uint8Array(string.length);
    for (var i = 0, l = string.length; i < l; i++) {
      array[i] = string.charCodeAt(i);
    }
    return array.buffer;
  }
  bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }
  ceshi() {
    ble.scan(
      [],
      5,
      device => {
        if (device.name != undefined) {
          this.aidevice.reloaddata(device.id, device.advertising, 0);
          console.log(this.aidevice);
          console.log(JSON.stringify(device));
        }
      },
      function(failure) {
        console.log(JSON.stringify(failure));
      }
    );
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.methods.ceshi = content.ceshi;
body.methods.bytesToString = content.bytesToString;
body.methods.stringToBytes = content.stringToBytes;
body.methods.handelFall = content.handelFall;
body.methods.tryScan = content.tryScan;
export default body;
</script>


