import { basename } from "path";
import {
  Actionsheet,
  DatetimePicker,
  Picker,
  Button,
  Navbar,
  TabItem,
  Swipe,
  SwipeItem,
  TabContainer,
  TabContainerItem,
  Popup,
  Indicator,
  Toast
} from 'mint-ui';

export class AppBase {
  Page = null;
  constructor(page) {
    
  }

  
  onMyLoad(options) {
    console.log("onMyLoad");
  }
  onMyShow() {
    console.log("onMyShow");
  }



  
  generateBodyJson() {
    var base=this;
    var components=[];
    var data={};
    return {
      Base:base,
      data(){
        return data;
      },
      components:{
        "mt-actionsheet":Actionsheet
      },
      methods:{
        onMyLoad:base.onMyLoad,
        onMyShow:base.onMyShow,
        actionSheet() {
          alert(1);
          this.sheetVisible = true;
        }
      },
      onMyLoad:base.onMyLoad,
      onMyShow:base.onMyShow,
      beforeCreate:base.beforeCreate,
      created:base.created,
      beforeMount:base.beforeMount,
      mounted:base.mounted,
      beforeUpdate:base.beforeUpdate,
      updated:base.updated,
      beforeDestory:base.beforeDestory,
      destroyed:base.destroyed
    }
  }
  beforeCreate(){
    console.log("beforeCreate");
  }
  created(){
    console.log("created");
    this.onMyLoad();
  }
  beforeMount(){
    console.log("beforeMount");
  }
  mounted(){
    console.log("mounted");
    this.onMyShow();
  }
  beforeUpdate(){
    console.log("beforeUpdate");
  }
  updated(){
    console.log("created");
  }
  beforeDestory(){
    console.log("beforeDestory");
  }
  destroyed(){
    console.log("destroyed");
  }
}