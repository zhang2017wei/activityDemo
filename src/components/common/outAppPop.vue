<style lang="less" scoped>
.outAppPop_container {
  .showDownLoadPop {
    width: 100%;
    height: 200%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    pointer-events: auto;
  }
  .guideOpen {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10004;
    background: rgba(0, 0, 0, 0.7);
    .text {
      font-size: 30px;
      font-family: Alibaba PuHuiTi;
      font-weight: normal;
      color: #ffffff;
      width: 140px;
      position: absolute;
      top: 100px;
      right: 140px;
    }
    .icon_downLoad {
      width: 163px;
      height: 220px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}
</style>

<template>
  <div class="outAppPop_container">
    <div
      v-if="!isOpenInApp && isInWeChat"
      class="showDownLoadPop"
      @click="isShowPop(true)"
    ></div>
    <a
      :href="downLoadUrl"
      class="showDownLoadPop"
      v-if="!isOpenInApp && !isInWeChat"
    ></a>
    <div class="guideOpen" v-if="showGuidePop" @click="isShowPop(false)">
      <div class="text">在浏览器打开继续</div>
      <img
        src="https://xs-image.oss-cn-hangzhou.aliyuncs.com/static/mini/activity/murderer/icon_downLoad.png"
        class="icon_downLoad"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showGuidePop: false
    }
  },
  filters: {},
  components: {},
  computed: {
    ...mapGetters({
      downLoadUrl: 'downLoadUrl',
      isOpenInApp: 'isOpenInApp',
      isInWeChat: 'isInWeChat'
    })
  },

  mounted() {},
  methods: {
    isShowPop(data) {
      this.showGuidePop = data
    }
  }
}
</script>
