
<style>
.seek_bg{
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%
}
.seekshebei{
    position:fixed;
    z-index:1;
    top:10%;
    width: 100%
}
.seek{
    position:fixed;
    z-index:1;
    top:35%;
    width: 100%
}
.seek_btn{
     position:fixed;
    z-index:1;
    bottom:10%;
    width: 100%
}

</style>
<template>
  <div>
      
    <div class="height-40">
      <mt-header title="蓝牙连接" class="txt-black" style="background-color:white" fixed>
        <router-link to="/mybaby" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <img :src="uploadpath+'resource/'+res.seek_bg" class="seek_bg">
<div class="seek">
  <div  v-for="(item, index) in devicelist" :key='index' >
  <div class="h4 maring-top-20  text-center" style="width:100%" :id="item.id" @click="bangdin">设备名:{{item.id}}</div>
   

  </div>
  </div>
    <!-- <div class="flex-row flex-column seek" >
        <img :src="uploadpath+'resource/'+res.seekbluetooth" class="icon-75">
        <div class="margin-top-20 txt-bold h7-5">请点击扫描寻找智能感应设备</div>
    </div>  -->
    
    <!-- <div class="flex-row flex-column seek" >
        <img :src="uploadpath+'resource/'+res.seekbluetooth" class="icon-75">
        <div class="margin-top-20 txt-bold h7-5">正在寻找智能感应设备</div>
    </div> -->

    <!-- <div class="flex-row flex-column seek" >
        <img :src="uploadpath+'resource/'+res.zhaodao" class="icon-75 margin-right-40">
        <div class="margin-top-20 txt-bold h7-5">找到智能感应设备，请点击绑定</div>
    </div> -->

    <!-- <div class="flex-row flex-column seek" >
        <img :src="uploadpath+'resource/'+res.chaoshi" class="icon-75 margin-right-40">
        <div class="flex-row column">
        <div class="margin-top-20 txt-bold h7-5">扫描超时，请确保：</div>
        <div class=" txt-bold margin-top-5">1、感应器就在附近且有点</div>
        <div class=" txt-bold margin-top-5">2、感应器是否已连接其他设备</div>
        <div class=" txt-bold margin-top-5">如果无效请重启设备或蓝牙重新扫描</div>
        </div>
    </div> -->


<div class="flex-row  flex-column seek_btn padding">
 <mt-button  class='h8'  style="width:50%;height:40px" type="primary"  @click="saomiao">开始扫描</mt-button>
 <!-- <mt-button  class='h8'  style="width:50%;height:40px" type="primary">绑定设备</mt-button>
 <mt-button  class='h8'  style="width:50%;height:40px" type="primary">重新扫描</mt-button> -->
</div>





  </div>
</template>


<script>
import { MessageBox } from 'mint-ui';
import { AppBase } from "../../app/AppBase";
import { AIDevice } from "../../app/app.bli.js";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { BackgroundMode } from "@ionic-native/background-mode";
class Content extends AppBase {
  constructor() {
    super();
  }
setData(data) {
  data.id='';
   data.aidevice = new AIDevice();
  data.mybaby='';
  data.devicelist=[];
  data.xuanzhonbaby='';
return data;
}
onMyLoad(){
  this.id=this.$route.params.id;
  console.log(this.id);
}
onMyShow(){
}
bangdin(e)
{
//   this.confirm("是否绑定"+e.target.id,()=>{
//  console.log(绑定成功);
//   })
  this.confirm("是否绑定"+e.target.id,(action)=>{
 this.post("news","bangdinsb",{id:this.id,shebei:e.target.id}).then((ret)=>{

   this.back();
 })



  })
  
 
}

saomiao(){
   ble.isEnabled(() => {

    }, () => {
      ble.enable().then(() => {
        this.onMyShow();
      });
    });

    if (AppBase.IsMobileWeb) {

      this.myslider.stopAutoplay();
      this.devicelist.push({ name: "test", id: "test:test:test:test", advertising: {}, riis: 100, data: "~~~" });
      this.myslider.slideNext();

    } else {
      if (ble.isEnabled) {
        this.tryScan();
      } else {
        var that = this;
        ble.enable(() => {
          that.tryScan();
        })
      }
    }

    try {
      AppBase.Storage.get("selectdeviceid").then((id) => {
        this.selectdeviceid = id;
      });
    } catch (ex) {

    }
}
 tryScan() {
    ble.startScanWithOptions([], { reportDuplicates: false },(device) => {
      var isclick = false;
      if (device.name == undefined) {
        return;
      }
      if (device.advertising.kCBAdvDataManufacturerData != undefined) {
        var adv = [];
        var int32View = new Uint8Array(device.advertising.kCBAdvDataManufacturerData);
        for (var i = 0; i < int32View.length; i++) {
          adv.push(int32View[i].toString());
        }
        device.advertising = "2,1,6,17,-1," + adv.join(",") + ",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
        //alert(device.name);
        //alert(device.advertising);
      }
      if (device.advertising != undefined&&typeof(device.advertising) == 'string') {

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
        }
        else if (Version == 1) {
          mData = Array(7);
        }
        else if (Version == 2) {
          mData = Array(8);
        }
        //						mTimeOutHandler.removeCallbacks(mThreadTimeOut);
        //						runOnUiThread(capEnter);
        var mdataPosition = AIDevice.GetDataPosition(Version);
        for (var i = mdataPosition; i < (mData.length + mdataPosition); i++) {
          mData[i - mdataPosition] = scanRecord[i];
        }
        device.uuid=device.id;
        device.id = AIDevice.GetID(scanRecord);
        //alert(mdataPosition);
        if (mData[0] == 0x00 || mData[14] == 0x00) {
        } else {
          isclick = true;
        }
      }

      //alert("a"+device.name+"b"+isclick);
      device.TYPE = AIDevice.GetType(scanRecord);

      if (device.name != undefined && (device.TYPE == "LNT" || device.TYPE == "CHA")
        && isclick == true) {
        if (AppBase.research == false && device.id == this.selectdeviceid) {
          this.selectDevice(device);
        }
        device.data = JSON.stringify(device);
        var advertising = device.advertising;
        var scanRecord = device.advertising.split(",");
        device.clicked = scanRecord[14] != 0x00;
        var havedevice = false;
        for (var i = 0; i < this.devicelist.length; i++) {
          if (device.id == this.devicelist[i].id) {
            this.devicelist[i] = device;
            havedevice = true;
            break;
          }
        }
        if (havedevice == false) {
          this.devicelist.push(device);
          
        }
        this.devicelist.sort((a, b) => {
          return parseInt(a.rssi) < parseInt(b.rssi) ? 1 : -1;
        });
console.log( this.devicelist);
               // this.myslider.slideTo(1);
        //this.ble.stopScan();
        //this.close(device);
      }

    }, (error) => {
      //alert(error);
    }, () => {
    });
  }

}

var content = new Content();
var body = content.generateBodyJson();
body.methods.saomiao = content.saomiao;
body.methods.tryScan = content.tryScan;
body.methods.bangdin=content.bangdin;
export default body;
</script>


