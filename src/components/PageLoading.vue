<template>
  <BasePage>
    <div class="bg abs page" :style="{backgroundImage: finalImageSrcBg}">Loading {{loadPercent}}%</div>
  </BasePage>
</template>

<script>
import BasePage from "./BasePage.vue";
import imageLoad from "../util/image-load.js";
export default {
  name: "pageLoading",
  components: {
    BasePage
  },
  data() {
    return {
      sharedState: window.store.state,
      loadPercent: 0,
      publicPath: process.env.BASE_URL,
      imageBgSrc: "imgs/bg-loading.jpg"
    };
  },
  computed: {
    finalImageSrcBg() {
      return `url(${this.publicPath}${this.imageBgSrc})`;
    }
  },
  created() {
    let _imageLoad = new imageLoad();
    _imageLoad
      .queueImage(this.sharedState.sourceArrayPreLoad)
      .imageLoadingProgressCallback(
        num => {
          this.preloadPercent = Math.floor(num);
        },
        () => {
          this.startLoading();
        }
      );
  },
  methods: {
    startLoading() {
      let _imageLoad = new imageLoad();
      _imageLoad
        .queueImage(this.sharedState.sourceArrayLoading)
        .imageLoadingProgressCallback(
          num => {
            this.loadPercent = Math.floor(num);
          },
          () => {
            this.$emit("loadComplete");
          }
        );
    }
  }
};
</script>

<style lang="scss">
@import url("../style/common.scss");

.bg {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
}
</style>