<style>
/* body{
  background: white !important;
} */
.pic {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
}
.top {
  position: fixed;
  z-index: 1;
  top: 0px;
  width: 100%;
}
</style>

<template>
  <div style="background-color:#eeeeee;">
    <button class="margin-top" @click="ceshi">测试了{{aidevice.v0}}哈</button>
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

  // takeP(){
  //   this.takePhoto((src)=>{
  //     this.photo=src;
  //   });
  // }

  // getPhoto(){
  //   this.choosePhoto((src)=>{
  //     this.photo=src;
  //   });
  // }
  setData(data) {
    data.aidevice = new AIDevice();
    data.count = 0;
    data.uuid = [];
    data.selectdeviceid = "LNT05124";
    //  data.localNotifications=localNotifications;
    return data;
  }

  onMyLoad() {}
  onMyShow() {
    

    var that = this;
    this.aidevice.startTime();
    this.aidevice.setNotification(this.localNotifications);
    this.aidevice.setNativeAudio(this.nativeAudio);
    if ( AppBase.IsAndroid) {
      //
      this.modal("ScanPage", {}, selectdevice => {
      
        
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
            (device.TYPE == "LNT" || device.TYPE == "CHA" && this.selectdeviceid == device.id) 
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
// body.methods.takeP=content.takeP;
// body.methods.upload=content.upload;

export default body;
</script>
