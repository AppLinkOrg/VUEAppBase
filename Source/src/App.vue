<template>
<div>
  <transition name="router-slid" mode="out-in">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </transition>
  <transition name="router-slid" mode="out-in">
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </transition>
  <svg-icon></svg-icon>
</div>
</template>

<script>
import svgIcon from './components/common/svg'
export default {
  name: 'App',
  components: {
    svgIcon
  }
}
</script>
<style lang="scss">
@import './style/mixin';
@import './style/common';
@import './style/vue-transition.scss';
#app {
    width: 100%;
    height: 100%;
    & > div {
        width: 100%;
        height: 100%;
        position: relative;
    }
}
</style>
