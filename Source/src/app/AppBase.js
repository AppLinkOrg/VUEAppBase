import {
  basename
} from "path";
import {
  baseUrl,
  imgBaseUrl,
  fileUploadAPI
} from '../config/env'
import http from '@/config/http'
import {
  Actionsheet,
  DatetimePicker,
  Picker,
  Button,
  Navbar,
  Tabbar,
  TabItem,
  Swipe,
  SwipeItem,
  Popup,
  Indicator,
  IndexList,
  IndexSection,
  Progress,
  MessageBox,
  PaletteButton,
  Toast,
  Header,
  Cell,
  CellSwipe,
  TabContainer,
  TabContainerItem,
  Search,
  Switch,
  Checklist,
  Radio,
  Field,
  Badge
} from 'mint-ui';

export class AppBase {

  data = {
    PageTitle: "",
    InstInfo: {},
    res: [],
    MemberInfo: { },
    uploadpath:imgBaseUrl
  };
  static Resources = null;
  static InstInfo = null;
  Page = null;
  title = "aa";
  constructor(page) {

  }


  onBaseLoad(options) {
    console.log("onBaseLoad");
    this.onMyLoad();
  }
  onMyLoad(options) {
    console.log("onMyLoad");
  }
  onBaseShow() {
    console.log("onBaseShow");
    if (AppBase.InstInfo == null) {
      this.post("inst", "info", {}).then((InstInfo) => {
        this.InstInfo = InstInfo;
        AppBase.InstInfo = InstInfo;
      });
    } else {
      this.InstInfo = AppBase.InstInfo;
    }
    if (AppBase.Resources == null) {
      this.post("inst", "resources", {}).then((resources) => {
        this.res = resources;
        AppBase.Resources = resources;
      });
    } else {
      this.res = AppBase.Resources;
    }

    var token = window.localStorage.getItem("UserToken");
    //alert(token);
    if (token == null) {
      this.MemberInfo = { photo:this.uploadpath+"inst/"+this.InstInfo.memberlogo };
      this.onMyShow();
    } else {
      this.post("member", "info",{}).then((memberinfo) => {
        if (memberinfo == null || memberinfo.mobile == undefined || memberinfo.mobile == "") {
          memberinfo = { photo:this.uploadpath+"inst/"+this.InstInfo.memberlogo };
        }else{
          memberinfo.photo=this.uploadpath+"member/"+this.memberinfo.photo;
        }
        this.MemberInfo=memberinfo;
        this.onMyShow();
      });
    }
  }

  onMyShow() {
    console.log("onMyShow");
  }

  post(model, func, params) {
    return http.post('api/' + model + '/' + func, params).then((ret) => {
      return ret;
    });
  }

  generateBodyJson() {
    var base = this;
    return {
      Base: base,
      data() {
        return base.data;
      },
      components: {
        "mt-actionsheet": Actionsheet,
        "mt-swipe": Swipe,
        "mt-swipe-item": SwipeItem,
        "mt-range": Range,
        "mt-progress": Progress,
        "mt-picker": Picker,
        "mt-datetime-picker": DatetimePicker,
        "mt-index-list": IndexList,
        "mt-index-section": IndexSection,
        "mt-palette-button": PaletteButton,
        "mt-header": Header,
        "mt-tabbar": Tabbar,
        "mt-tabbar-item": TabItem,
        "mt-button": Button,
        "mt-cell": Cell,
        "mt-cell-swipe": CellSwipe,
        "mt-tab-container": TabContainer,
        "mt-tab-container-item": TabContainerItem,
        "mt-search": Search,
        "mt-switch": Switch,
        "mt-checklist": Checklist,
        "mt-radio": Radio,
        "mt-field": Field,
        "mt-badge": Badge
      },
      methods: {
        onMyLoad: base.onMyLoad,
        onMyShow: base.onMyShow,
        onBaseLoad: base.onBaseLoad,
        onBaseShow: base.onBaseShow,
        toast: base.toast,
        info: base.info,
        confirm: base.confirm,
        post: base.post
      },
      onMyLoad: base.onMyLoad,
      onMyShow: base.onMyShow,
      beforeCreate: base.beforeCreate,
      created: base.created,
      beforeMount: base.beforeMount,
      mounted: base.mounted,
      beforeUpdate: base.beforeUpdate,
      updated: base.updated,
      beforeDestory: base.beforeDestory,
      destroyed: base.destroyed
    }
  }
  beforeCreate() {
    console.log("beforeCreate");
  }
  created() {
    console.log("created");
    this.onBaseLoad();
  }
  beforeMount() {
    console.log("beforeMount");
  }
  mounted() {
    console.log("mounted");
    this.onBaseShow();
  }
  beforeUpdate() {
    console.log("beforeUpdate");
  }
  updated() {
    console.log("updated");
  }
  beforeDestory() {
    console.log("beforeDestory");
  }
  destroyed() {
    console.log("destroyed");
  }
  toast(message, position = "", icon = "") {
    Toast({
      message: message,
      position: position,
      iconClass: icon,
      duration: (message.length / 5) * 1000 + 3000
    });
  }
  info(message) {
    MessageBox.alert(message);
  }
  confirm(message, callback) {
    return MessageBox.confirm(message, "提示").then((action) => {
      return action == "confirm";
    });
  }
}
