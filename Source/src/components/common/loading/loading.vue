<template>
<div class="loading">
  <img width="24" height="24" src="./loading.gif">
  <p class="desc">{{title}}</p>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../style/mixin';
.loading {
    width: 100%;
    text-align: center;
    .desc {
        line-height: 20px;
        @include fs(12px);
        color: #999;
    }
}
</style>
