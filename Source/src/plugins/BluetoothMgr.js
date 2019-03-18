export class BluetoothMgr{
    // static tryScan(onSuccess, onFail) {
    //     navigator.camera.getPicture(onSuccess, onFail, {
    //       destinationType: Camera.DestinationType.FILE_URI,
    //       sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    //     });

    //   }

    static  tryScan() {
        this.ble.startScanWithOptions([], { reportDuplicates: false }).subscribe((device) => {
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
    
            this.myslider.slideTo(1);
            //this.ble.stopScan();
            //this.close(device);
          }
    
        }, (error) => {
          //alert(error);
        }, () => {
        });
      }


}