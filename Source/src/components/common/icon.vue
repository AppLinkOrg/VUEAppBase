<template>
<div class="icon-list">
  <router-link to="expert" class="icon">
    <img src="http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/mamau/static/icon/expert.png" alt="专家天团">
    <p class="icon-name">专家天团</p>
  </router-link>
  <router-link to="video" class="icon">
    <img src="http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/mamau/static/icon/video.png" alt="精选视频">
    <p class="icon-name">精选视频</p>
  </router-link>
  <router-link to="ebaby" class="icon">
    <img src="http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/mamau/static/icon/ebaby.png" alt="宝贝培养">
    <p class="icon-name">宝贝培养</p>
  </router-link>
  <router-link to="article" class="icon">
    <img src="http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/mamau/static/icon/artice.png" alt="热门文章">
    <p class="icon-name">热门文章</p>
  </router-link>
  <router-link class="icon" to="activity">
    <img src="http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/mamau/static/icon/activity.png" alt="活动专题">
    <p class="icon-name">活动专题</p>
  </router-link>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";
.icon-list {
    height: 5.6rem;
    background-color: $fc;
    display: flex;
    .icon {
        flex: 1;
        width: 0;
        img {
            margin: 1.2rem auto 0.4rem;
            @include wh(2.2rem, 2.2rem);
            border-radius: 100%;
            display: block;
        }
        .icon-name {
            text-align: center;

            @include fs(12px);
        }
    }
}
</style>
