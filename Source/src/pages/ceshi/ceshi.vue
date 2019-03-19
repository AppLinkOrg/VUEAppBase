<style>
/* body{
  background: white !important;
} */
.pic{
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
}
.top{
  position: fixed;
  z-index: 1;
  top: 0px;
  width: 100%;
}
</style>

<template>
  <div style="background-color:#eeeeee;">
  <button  class="margin-top" @click="ceshi">测试了</button>

  </div>
</template>

<script>
import { AppBase } from "../../app/AppBase";
import { AIDevice } from '../../app/app.bli.js';
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
 

  onMyLoad(){

  }
  onMyShow(){
 var mockdevice
  }
  ceshi(){
      var aidevice=new AIDevice();
 
    ble.scan([], 5, function(device) {   
        
      if(device.name!=undefined)
      {
         aidevice.reloaddata(device.id,device.advertising,0);
    console.log(JSON.stringify(device));
}

}, function(failure) {    
    console.log(JSON.stringify(failure));
});
  
  }
}

var content = new Content();
var body = content.generateBodyJson();
 body.methods.ceshi=content.ceshi;
// body.methods.takeP=content.takeP;
// body.methods.upload=content.upload;

export default body;
</script>
