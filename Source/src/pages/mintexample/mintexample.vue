<template>
  <div>
    <div>aa</div>
    <div>
      <button @click="toast">提示框</button>
    </div>
    <div>
      <button @click="indicator">加载框</button>
    </div>
    <div>
      <button @click="indicator">弹出框</button>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";

export default {
  name: "mintexample",
  data() {
    return {};
  },
  methods: {
    toast: function() {
      Toast({
        message: "操作成功",
        iconClass: "icon icon-success"
      });
    },
    indicator: function() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
    }
  },
  components: {}
};
</script>
