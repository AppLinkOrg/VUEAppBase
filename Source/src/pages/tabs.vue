<template>
  <div class="div ">
    <transition name="router-slid" mode="out-in">
      
      <router-view></router-view>
      <!-- <div style="height:180px;"></div> -->
    </transition>

    <section id='foot_guide' class="border-top">

     
        

       
     
      <router-link  to="/" class="guide_item" :class="isActived('home')?'actived':''" tag="div">
        <img v-if="isActived('home')"  class="icon_style" src="../assets/a-1.png" />
        <img  v-if="!isActived('home')" class="icon_style" src="../assets/a.png" />
        <span>呵护</span>
      </router-link>

      <router-link to="/childcarering" class="guide_item" :class="isActived('childcarering')?'actived':''" tag="div">
        <img v-if="isActived('childcarering')"  class="icon_style" src="../assets/b-1.png" />
        <img  v-if="!isActived('childcarering')" class="icon_style" src="../assets/b.png" />
        
        <span>育儿圈</span>
      </router-link>

      <router-link to="/Information" class="guide_item" :class="isActived('Information')?'actived':''" tag="div">
      <img v-if="isActived('Information')"  class="icon_style" src="../assets/c-1.png" />
        <img  v-if="!isActived('Information')" class="icon_style" src="../assets/c.png" />
        
        <span>资讯</span>
      </router-link>

      <router-link to="/mine" class="guide_item" :class="isActived('mine')?'actived':''" tag="div">
     
         <img v-if="isActived('mine')"  class="icon_style" src="../assets/d-1.png" />
        <img  v-if="!isActived('mine')" class="icon_style" src="../assets/d.png" />
        <span>我的</span>
      </router-link>

    </section>
  </div>
</template>

<script>
  export default {
    methods: {
      isActived(path) {
        return this.$route.path.indexOf(path) !== -1 ? true : false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import 'src/style/vue-transition.scss';

  .div {
    
    min-height: 100%;
  }
  #foot_guide {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    @include wh(100%, 2.5rem);
    background-color: #fff;
  }
  .guide_item {
    flex: 1;
    width: 0;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    .icon_style {
      @include wh(1.25rem, 1.25rem);
      fill: #999;
      .file {
        display: none;
      }
    }
    span {
      @include sc(0.5rem, #999);
    }
    &.actived {
      use {
        display: none;
      }
      .file {
        display: block;
        fill: $fColor;
      }
      span {
        color: $fColor;
      }
    }
  }
</style>
