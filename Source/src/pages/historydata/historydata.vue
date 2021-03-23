
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
#chart1 {
  width: 300px;
  height: 300px;
  border: 1px solid black;
}
.xuanzhong {
  background: #ff4081;
  color: white;
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

      <div class="txt-bold flex-1 flex-row flex-column" @click="Drop();">
        <div>尿量统计</div>
        <div style="width:100%;height:2px;" :class="{'bg':show==2}" class="margin-top-5"></div>
      </div>

      <div class="txt-bold flex-1 flex-row flex-column" @click="Usesheet">
        <div>用片统计</div>
        <div style="width:100%;height:2px;" :class="{'bg':show==3}" class="margin-top-5"></div>
      </div>

      <!-- <div class="txt-bold flex-1 flex-row flex-column" @click="Urinevolume">
        <div>尿量统计</div>
        <div style="width:100%;height:2px;" :class="{'bg':show==4}" class="margin-top-5"></div>
      </div>-->
    </div>

    <div class v-show="show==1">
      <div class="flex-row flex-center">
        <div class="txt-bold txt-gray margin-left-10">尿湿记录</div>
        <div class="txt-bold  margin-10 xuanxiang" @click="nstoday();showChart()" :class="{'xuanzhong':xuanze==1}" >当日</div>
        <div class="txt-bold  margin-10 xuanxiang" @click="nsseven();showChart()" :class="{'xuanzhong':xuanze==2}">近7日</div>
        <div class="txt-bold  margin-10 xuanxiang" @click="nsfrth();showChart()" :class="{'xuanzhong':xuanze==3}">近14日</div>
        <div class="txt-bold  margin-10 xuanxiang" @click="nstreth();showChart()" :class="{'xuanzhong':xuanze==4}">近30日</div>
      </div>

      <div class="margin-10 txt-bold">
        <div id="main" style="width:auto;height:250px;"></div>
      </div>

      <div class="txt-bold padding-10 h7-5">数据详情</div>

      <div v-for="(item, index) in diaperdatalist" :key="index">

        <div class="flex-row flex-center padding-left-20 padding-right-20 padding-top-20">
          <div class="flex-1 text-center txt-gray txt-bold">日期</div>
          <div class="flex-1 text-center txt-gray txt-bold">尿湿次数</div>
        </div>

        <div class="flex-row flex-center padding-left-20 padding-right-20 margin-top-10" style>
          <div class="flex-1 text-center txt-gray txt-bold">{{item.opentime}}</div>
          <div class="flex-1 text-center txt-bold">{{item.urinecount}}次</div>
        </div>

      </div>
    </div>

    <div class v-show="show==2">
      <div class="flex-row flex-center">
        <div class="txt-bold txt-gray margin-left-10">日期范围</div>
        <div class="txt-bold  margin-10 xuanxiang" @click="nltoday();NLchart()" :class="{'xuanzhong':nlxuanze==1}">当日</div>
        <div class="txt-bold  margin-10 xuanxiang" @click="nlseven();NLchart()" :class="{'xuanzhong':nlxuanze==2}" >近7日</div>
        <div class="txt-bold margin-10 xuanxiang" @click="nlfrth();NLchart()" :class="{'xuanzhong':nlxuanze==3}">近14日</div>
        <div class="txt-bold  margin-10 xuanxiang" @click="nltreth();NLchart()" :class="{'xuanzhong':nlxuanze==4}">近30日</div>
      </div>

      <div class="margin-10 txt-bold">
        <div id="niaoliang" style="width:auto;height:250px;"></div>
      </div>

      <div class="txt-bold padding-10 h7-5">数据详情</div>

      <div v-for="(item, index) in diaperdatalist" :key="index">
        <div class="flex-row flex-center padding-left-20 padding-right-20 padding-top-20">
          <div class="flex-1 text-center txt-gray txt-bold">日期</div>
          <div class="flex-1 text-center txt-gray txt-bold">尿量</div>
        </div>

        <div class="flex-row flex-center padding-left-20 padding-right-20 margin-top-10" style>
          <div class="flex-1 text-center txt-gray txt-bold">{{item.opentime}}</div>
          <div class="flex-1 text-center txt-bold">{{item.urinevolume}}ml</div>
        </div>

      </div>
    </div>

    <div class v-show="show==3">
      <div class="flex-row flex-center">
        <div class="txt-bold txt-gray margin-left-10">用片记录</div>
        <div class="txt-bold  margin-10 xuanxiang" @click="yptoday();Ypchart()" :class="{'xuanzhong':ypxuanze==1}">当日</div>
        <div class="txt-bold  margin-10 xuanxiang" @click="ypseven();Ypchart()" :class="{'xuanzhong':ypxuanze==2}" >近7日</div>
        <div class="txt-bold margin-10 xuanxiang" @click="ypfrth();Ypchart()" :class="{'xuanzhong':ypxuanze==3}">近14日</div>
        <div class="txt-bold  margin-10 xuanxiang" @click="yptreth();Ypchart()" :class="{'xuanzhong':ypxuanze==4}">近30日</div>
      </div>

      <div class="margin-10 txt-bold">
        <div id="yonpian" style="width:auto;height:250px;"></div>
      </div>

      <div class="txt-bold padding-10 h7-5">数据详情</div>

      <div v-for="(item, index) in diaperdatalist" :key="index">
        <div class="flex-row flex-center padding-left-20 padding-right-20 padding-top-20">
          <div class="flex-1 text-center txt-gray txt-bold">日期</div>
          <div class="flex-1 text-center txt-gray txt-bold">用片数</div>
        </div>

        <div class="flex-row flex-center padding-left-20 padding-right-20 margin-top-10" style>
          <div class="flex-1 text-center txt-gray txt-bold">{{item.opentime}}</div>
          <div class="flex-1 text-center txt-bold">{{item.usingcount}}片</div>
        </div>
      </div>
    </div>

    <!-- <div class v-show="show==4">
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
    </div>-->
  </div>
</template>


<script>
import { AppBase } from "../../app/AppBase";
// 引入基本模板
// let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
// require('echarts/lib/chart/bar')
// 引入提示框和title组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')

class Content extends AppBase {
  constructor() {
    super();
  }
  setData(data) {
    data.diaperdatalist = "";
    data.xuanze = 1;
    data.nlxuanze = 1;
    data.ypxuanze = 1;
    data.show = "1";
    return data;
  }

 nstoday(){
  this.xuanze=1
 }

  nsseven(){
  this.xuanze=2
 }

  nsfrth(){
  this.xuanze=3
 }

  nstreth(){
  this.xuanze=4
 }



  nltoday(){
  this.nlxuanze=1
 }

  nlseven(){
  this.nlxuanze=2
 }

  nlfrth(){
  this.nlxuanze=3
 }

  nltreth(){
  this.nlxuanze=4
 }

   yptoday(){
  this.ypxuanze=1
 }

  ypseven(){
  this.ypxuanze=2
 }

  ypfrth(){
  this.ypxuanze=3
 }

  yptreth(){
  this.ypxuanze=4
 }


 

  init(ns) {
    var myChart = this.$echarts.init(document.getElementById("main"));

    myChart.setOption({
     

      legend: {
        data: ["尿湿记录"]
      },
      xAxis: {
        type: "time",
        // boundaryGap: false,
        // data: ["0:00", "6:00", "12:00", "18:00"]
      },
      yAxis: {
         
      },
      series: [
        {
          name: "尿湿记录",
          data: ns,
          type: "line",
          areaStyle: {}
        }
      ]
    });
  }

  Niaoliang(bb) {
    var myCharts = this.$echarts.init(document.getElementById("niaoliang"));
    myCharts.setOption({
      xAxis: {
        type: "time",
      },
      legend: {
        data: ["尿量统计"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "尿量统计",
          data: bb,
          type: "line",
          areaStyle: {}
        }
      ]
    });
  }

  Yonpian(cc) {
    var myCharts = this.$echarts.init(document.getElementById("yonpian"));
    myCharts.setOption({
      legend: {
        data: ["用片统计"]
      },
      xAxis: {
        type: "time",
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "用片统计",
          data: cc,
          type: "line",
          areaStyle: {}
        }
      ]
    });
  }

  onMyLoad() {
    console.log(1111111);
  }

  onMyShow() {
    console.log(2222222);
    
    this.diaperlist();
    this.init();
    this.showChart();
    
  }

  

  Urinedampness() {
    this.show = 1;
  }

  Drop() {
    this.show = 2;
    this.$nextTick(() => {
      this.Niaoliang();
      this.NLchart();
    });
  }

  Usesheet() {
    this.show = 3;
    this.$nextTick(() => {
      this.Yonpian();
      this.Ypchart();
    });
  }
  
  Urinevolume() {
    this.show = 4;
  }

  diaperlist() {
    this.post("news", "diaperdatalist", {}).then(ret => {
      this.diaperdatalist = ret;
    });
  }

  showChart(){
      var Series = [];
      var json = this.diaperdatalist.data;

      for (var i = 0; i < this.diaperdatalist.length; i++) {
         console.log("AA"+this.diaperdatalist[i].opentime+"AA");
         console.log("BB"+this.diaperdatalist[i].usingcount+"BB");
         var date=this.diaperdatalist[i].opentime;
         var count=this.diaperdatalist[i].usingcount;
        //  console.log(date+"sss");
        //  console.log(count+"aaaa");

        if(this.show==1){
          if(this.xuanze==1){
              
              var ns= [];
              var mydate=new Date();
              var year=mydate.getFullYear();
              var month=mydate.getMonth();
              var day=mydate.getDate();
              var count=this.diaperdatalist[i].usingcount;
              for(var i=0;i<=24;i++){
                  var d=new Date(year,month,day,i,0,0);
                  ns.push([d,count]);
              }

              this.init(ns);
          }

           if(this.xuanze==2){
               var ns=[["2012-4-5 00:00",2],["2012-4-6 03:52",3],["2012-4-7 24:00",1]];
               this.init(ns);
          }

           if(this.xuanze==3){
               var ns=[["2012-4-7 00:00",3],["2012-4-14 03:52",6],["2012-4-26 24:00",4]];
               this.init(ns);
           }

           if(this.xuanze==4){
              var ns=[["2012-4-1 00:00",12],["2012-4-12 03:52",15],["2012-5-12 24:00",16]];
              this.init(ns);
           }
           

      }

     }

         console.log("111")
         console.log(date+"暗示");
         console.log(count+"圣巅峰");


      //return;
      
  }

  NLchart(){
      if(this.show==2){
          if(this.nlxuanze==1){
              var bb=[["2012-4-4 00:00",100],["2012-4-4 03:52",200],["2012-4-4 24:00",150]];
              this.Niaoliang(bb);
          }
           if(this.nlxuanze==2){
               var bb=[["2012-4-5 00:00",300],["2012-4-6 03:52",320],["2012-4-7 24:00",220]];
               this.Niaoliang(bb);
          }
           if(this.nlxuanze==3){
               var bb=[["2012-4-7 00:00",142],["2012-4-14 03:52",165],["2012-4-26 24:00",320]];
               this.Niaoliang(bb);
           }
           if(this.nlxuanze==4){
              var bb=[["2012-4-1 00:00",500],["2012-4-12 03:52",451],["2012-5-12 24:00",396]];
              this.Niaoliang(bb);
          }
      }
  }

  Ypchart(cc){
      if(this.show==3){
          if(this.ypxuanze==1){
              var cc=[["2012-4-4 00:00",2],["2012-4-4 03:52",2],["2012-4-4 24:00",5]];
              this.Yonpian(cc);
          }
           if(this.ypxuanze==2){
               var cc=[["2012-4-5 00:00",4],["2012-4-7 03:52",5],["2012-4-9 23:00",1]];
               this.Yonpian(cc);
          }
           if(this.ypxuanze==3){
               var cc=[["2012-4-5 00:00",2],["2012-4-12 03:52",3],["2012-4-25 24:00",4]];
               this.Yonpian(cc);
           }
           if(this.ypxuanze==4){
              var cc=[["2012-4-5 00:00",1],["2012-4-18 03:52",2],["2012-5-10 24:00",3]];
              this.Yonpian(cc);
          }
      }
  }

  



}

var content = new Content();
var body = content.generateBodyJson();
body.methods.Urinedampness = content.Urinedampness;
body.methods.Drop = content.Drop;
body.methods.Usesheet = content.Usesheet;
body.methods.Urinevolume = content.Urinevolume;
// body.methods.creatE = content.creatE;

body.methods.init = content.init;
body.methods.Niaoliang = content.Niaoliang;
body.methods.Yonpian = content.Yonpian;
body.methods.diaperlist = content.diaperlist;
body.methods.showChart = content.showChart;
body.methods.NLchart = content.NLchart;
body.methods.Ypchart = content.Ypchart;

body.methods.nstoday = content.nstoday;
body.methods.nsseven = content.nsseven;
body.methods.nsfrth = content.nsfrth;
body.methods.nstreth = content.nstreth;

body.methods.nltoday = content.nltoday;
body.methods.nlseven = content.nlseven;
body.methods.nlfrth = content.nlfrth;
body.methods.nltreth = content.nltreth;

body.methods.yptoday = content.yptoday;
body.methods.ypseven = content.ypseven;
body.methods.ypfrth = content.ypfrth;
body.methods.yptreth = content.yptreth;

export default body;
</script>


