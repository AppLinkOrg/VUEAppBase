require("babel-polyfill")
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import './config/flexable'
import FastClick from 'fastclick'
import Calendar from 'vue-mobile-calendar'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import './assets/css/my-mint.scss'
import $ from 'jquery'


// // 导入vue-echarts插件
// import ECharts from 'vue-echarts/components/ECharts'
// // 导入echarts的图形类型
// import 'echarts/lib/chart/radar'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/chart/bar'
// // 导入工具部分
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/legendScroll';
// import 'echarts/lib/component/dataZoom';
// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markArea';
// import 'echarts/lib/component/dataZoom';
// Vue.component('chart', ECharts)






import 'mint-ui/lib/style.css'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import scroll from './components/common/scroll'
Vue.component('scroll', scroll)

//按需
import {
  Actionsheet,
  DatetimePicker,
  Picker,
  Button,
  Navbar,
  Swipe,
  SwipeItem,
  IndexList, IndexSection,
  Progress,
  Popup,
  Indicator,
  Toast,
  Lazyload,
  PaletteButton,
  Header,
  Tabbar, TabItem,
  Cell,CellSwipe,
  TabContainer, TabContainerItem,
  Search,
  Switch,Checklist,Radio,Field,Badge
} from 'mint-ui'

Vue.component(Actionsheet.name, Actionsheet)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Picker.name, Picker)
Vue.component(Button.name, Button)
Vue.component(Navbar.name, Navbar)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Popup.name, Popup)
Vue.component(Progress.name, Progress)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(PaletteButton.name, PaletteButton)
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar),
Vue.component(TabItem.name, TabItem)
Vue.component(Cell.name, Cell)
Vue.component(CellSwipe.name, CellSwipe)
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Search.name, Search);
Vue.component(Switch.name, Switch);
Vue.component(Checklist.name, Checklist);
Vue.component(Radio.name, Radio);
Vue.component(Field.name, Field);
Vue.component(Badge.name, Badge);


Vue.use(VueVideoPlayer)
Vue.use(Calendar)
Vue.use(Lazyload);
// Vue.use(InfiniteScroll)
// Vue.config.productionTip = false
Vue.prototype.Indicator = Indicator
Vue.prototype.Toast = Toast

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})


// Wechat.isInstalled(function(installed) {
//   alert("Wechat installed: " + (installed ? "Yes" : "No"));
// }, function(reason) {
//   alert("Failed: " + reason);
// });

var backfirst=0;
document.addEventListener('deviceready', function() {
  //   window.open = cordova.InAppBrowser.open
  window.Wechat=Wechat;
  new Vue({
    router
  }).$mount('#app');
  document.addEventListener("backbutton", ()=>{
    console.log(navigator.app);
    var url=window.location.href;
    url=url.split("/");
    var pagename=url[url.length-1];
    if(pagename=="home"
    ||pagename=="mine"){
      backfirst++;
      if(backfirst==2){
        navigator.app.exitApp();
      }else{
        console.log("再次点击返回退出应用");
        setTimeout(()=>{
          backfirst=0;
        },1000);
        Toast({message:"再次点击返回退出应用",
        position: 'bottom',
        duration: 1000});
      }
    }else{
      window.history.go(-1);
    }
  }, false);
  //  navigator.splashscreen.hide()
}, false)

// window.Wechat=undefined;

//   new Vue({
//     router
//   })

document.addEventListener('deviceready', function() {
  //   window.open = cordova.InAppBrowser.open
  window.Wechat=Wechat;
  window.ble=ble;
  new Vue({
    router
  }).$mount('#app')
  //  navigator.splashscreen.hide()
}, false);

// window.Wechat=undefined;
// window.ble=undefined;
// new Vue({
//   router
// }).$mount('#app');

