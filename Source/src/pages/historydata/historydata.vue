
<style>
.seek_bg {
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
}
.seek {
  position: fixed;
  z-index: 1;
  top: 35%;
  width: 100%;
}
.seek_btn {
  position: fixed;
  z-index: 1;
  bottom: 10%;
  width: 100%;
}
.xuanxiang {
  border: 1px solid gray;
  border-radius: 40px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 5px;
  padding-right: 5px;
}
.bg {
  background-color: #ff4081;
}

/* .padding-T{
    padding-left: 5px;
    padding-top: 5px;
    padding-right: 5px;
} */
</style>
<template>
  <div>
    <div class="height-40">
      <mt-header title="历史数据" class="txt-white" style="background-color:#FF4081" fixed>
        <router-link to="/realtimedata" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="flex-row flex-center padding-top-5" style="border-bottom:1px solid gray">
      <div class="txt-bold flex-1 flex-row flex-column" @click="Urinedampness">
        <div>尿湿记录</div>
        <div style="width:100%;height:2px;" :class="{'bg':show==1}" class="margin-top-5"></div>
      </div>

      <div class="txt-bold flex-1 flex-row flex-column" @click="Drop">
        <div>跌落记录</div>
        <div style="width:100%;height:2px;" :class="{'bg':show==2}" class="margin-top-5"></div>
      </div>

      <div class="txt-bold flex-1 flex-row flex-column" @click="Usesheet">
        <div>用片统计</div>
        <div style="width:100%;height:2px;" :class="{'bg':show==3}" class="margin-top-5"></div>
      </div>

      <div class="txt-bold flex-1 flex-row flex-column" @click="Urinevolume">
        <div>尿量统计</div>
        <div style="width:100%;height:2px;" :class="{'bg':show==4}" class="margin-top-5"></div>
      </div>
    </div>

    <div class v-if="show==1">
      <div class="flex-row flex-center">
        <div class="txt-bold txt-gray margin-left-10">尿湿记录</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>当日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近7日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近14日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近30日</div>
      </div>

      <div class="height-100 margin-10 txt-bold">此处为图表......</div>

      <div class="txt-bold padding-10 h7-5">数据详情</div>

      <div class style>
        <div class="txt-bold h7-5 padding-10">2019-3-18</div>

        <div
          class="txt-bold txt-gray margin-left-10 margin-right-10"
          style="border-bottom:1px solid gray;padding-bottom:5px"
        >暂无记录</div>
      </div>

    </div>

    <div class v-if="show==2">

      <div class="flex-row flex-center">
        <div class="txt-bold txt-gray margin-left-10">尿湿记录</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>当日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近7日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近14日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近30日</div>
      </div>

      <div class="height-100 margin-10 txt-bold">此处为图表......</div>

      <div class="txt-bold padding-10 h7-5">数据详情</div>

      <div class="flex-row flex-center padding-left-20 padding-right-20 padding-top-20">
        <div class="flex-1 text-center txt-gray txt-bold">发生跌落日期</div>
        <div class="flex-1 text-center txt-gray txt-bold">发生跌落次数</div>
      </div>

      <div class="flex-row flex-center padding-left-20 padding-right-20 margin-top-10" style>
        <div class="flex-1 text-center txt-gray txt-bold">2015-02-02</div>
        <div class="flex-1 text-center txt-bold">0</div>
      </div>

      <div class="flex-row flex-center padding-left-20 padding-right-20 margin-top-10" style>
        <div class="flex-1 text-center txt-gray txt-bold">2015-02-02</div>
        <div class="flex-1 text-center txt-bold">1</div>
      </div>

    </div>

    <div class v-if="show==3">
      <div class="flex-row flex-center">
        <div class="txt-bold txt-gray margin-left-10">尿湿记录</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>当日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近7日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近14日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近30日</div>
      </div>

            <div class="height-100 margin-10 txt-bold">此处为图表......</div>

      <div class="txt-bold padding-10 h7-5">数据详情</div>

      <div class="flex-row flex-center padding-left-20 padding-right-20 padding-top-20">
        <div class="flex-1 text-center txt-gray txt-bold">发生跌落日期</div>
        <div class="flex-1 text-center txt-gray txt-bold">发生跌落次数</div>
      </div>

      <div class="flex-row flex-center padding-left-20 padding-right-20 margin-top-10" style>
        <div class="flex-1 text-center txt-gray txt-bold">2017-02-02</div>
        <div class="flex-1 text-center txt-bold">5</div>
      </div>

      <div class="flex-row flex-center padding-left-20 padding-right-20 margin-top-10" style>
        <div class="flex-1 text-center txt-gray txt-bold">2014-12-02</div>
        <div class="flex-1 text-center txt-bold">0</div>
      </div>

    </div>

    <div class v-if="show==4">
      <div class="flex-row flex-center">
        <div class="txt-bold txt-gray margin-left-10">尿湿记录</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>当日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近7日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近14日</div>
        <div class="txt-bold txt-gray margin-10 xuanxiang" style>近30日</div>
      </div>

            <div class="height-100 margin-10 txt-bold">此处为图表......</div>

      <div class="txt-bold padding-10 h7-5">数据详情</div>

      <div class="flex-row flex-center padding-left-20 padding-right-20 padding-top-20">
        <div class="flex-1 text-center txt-gray txt-bold">发生跌落日期</div>
        <div class="flex-1 text-center txt-gray txt-bold">发生跌落次数</div>
      </div>

      <div class="flex-row flex-center padding-left-20 padding-right-20 margin-top-10" style>
        <div class="flex-1 text-center txt-gray txt-bold">2004-02-02</div>
        <div class="flex-1 text-center txt-bold">2</div>
      </div>

      <div class="flex-row flex-center padding-left-20 padding-right-20 margin-top-10" style>
        <div class="flex-1 text-center txt-gray txt-bold">2019-02-02</div>
        <div class="flex-1 text-center txt-bold">1</div>
      </div>
    </div>
  </div>
</template>


<script>
import { AppBase } from "../../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }
  setData(data) {
    data.show = "1";
    return data;
  }

  Urinedampness() {
    this.show = 1;
  }

  Drop() {
    this.show = 2;
  }
  Usesheet() {
    this.show = 3;
  }
  Urinevolume() {
    this.show = 4;
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.methods.Urinedampness = content.Urinedampness;
body.methods.Drop = content.Drop;
body.methods.Usesheet = content.Usesheet;
body.methods.Urinevolume = content.Urinevolume;

export default body;
</script>


