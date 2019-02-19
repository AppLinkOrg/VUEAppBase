<template>
<div class="loading_mask" v-if="loading">
  <div class="loading_container">
    <div class="load_img"></div>
    <svg class="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
       <ellipse cx="26" cy="10" rx="26" ry="10" style="fill:#999;stroke:none;"></ellipse>
     </svg>
    <p class="title">计算结果中...</p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';

@keyframes load {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(0px);
    }
}
@keyframes ellipse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.3);
    }
    100% {
        transform: scale(1);
    }
}
.loading_mask {
    position: fixed;
    @include wh(100%, 100%);
    top: 0;
    left: 0;
    z-index: 10000;
    background-color: rgba(0, 0, 0, .4);
}
.loading_container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}
.title {
    margin-top: 1.5rem;
    @include fs(14px);
    color: #eee;
}
.load_img {
    @include wh(2.5rem, 2.5rem);
    margin: 0 auto;
    background: url("../../assets/imgs/icon_loading.png") no-repeat 0 0;
    background-size: 2.5rem auto;
    transform: translateY(0px);
    animation: load 0.6s infinite ease-in-out;
    position: relative;
    z-index: 11;
}
.load_ellipse {
    position: absolute;
    @include wh(2.6rem, 2rem);
    top: 2.2rem;
    left: 50%;
    margin-left: -1.3rem;
    z-index: 10;
    animation: ellipse 0.6s infinite ease-in-out;
}
</style>
