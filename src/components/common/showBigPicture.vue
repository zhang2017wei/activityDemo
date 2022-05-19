<style lang="less" scoped>
.showBigPicture_container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  .container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 634px;
    height: auto;
    z-index: 9;
    text-align: center;
    padding-bottom: 10px;
    background: #d0fde1 linear-gradient(180deg, #fdf8d8 0%, #d2fbe2 100%);
    border-radius: 12px;
    border: 2px solid;
    border-image: linear-gradient(
        180deg,
        rgba(143, 255, 165, 1),
        rgba(85, 195, 145, 1)
      )
      2 2;
    .title {
      font-size: 36px;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
      height: 94px;
      line-height: 94px;
      background: url('../../assets/images/title_com_bg.png') 0 0 no-repeat;
      background-size: 100% 100%;
      margin-top: -16px;
    }
    .onePrizeImg {
      width: 296px;
      height: auto;
      margin-top: 80px;
    }
    .closeContent {
      width: 52px;
      height: 52px;
      background: url('../../assets/images/icon_close.png') 0 0 no-repeat;
      background-size: 100% 100%;
      position: absolute;
      right: 0;
      top: -100px;
    }
  }
  .container_gif {
    background: transparent;
    .onePrizeImg {
      width: 4rem;
      height: auto;
      margin: 0.7rem auto;
    }
  }
}
</style>

<template>
  <div
    class="showBigPicture_container"
    v-if="isShowBigPicture && isShowBigPicture.data"
  >
    <div
      class="container commonBox common_content"
      :class="isShowBigPicture.data.isGif ? 'container_gif' : ''"
    >
      <div class="title">{{ isShowBigPicture.data.name }}</div>
      <img
        v-if="isShowBigPicture.data.url && isShowBigPicture.data.flag"
        :src="isShowBigPicture.data.url"
        class="onePrizeImg"
        alt=""
      />
      <img
        v-if="isShowBigPicture.data.url && !isShowBigPicture.data.flag"
        :src="
          isShowBigPicture.data.url.indexOf('http') > -1
            ? isShowBigPicture.data.url
            : baseUrl + isShowBigPicture.data.url
        "
        class="onePrizeImg"
        alt=""
      />
      <div class="closeContent" @click="onCloseFun"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      baseUrl: 'https://xs-image.yinjietd.com/'
    }
  },
  filters: {},
  computed: {
    ...mapGetters({
      isShowBigPicture: 'isShowBigPicture'
    })
  },
  components: {},

  mounted() {},
  methods: {
    onCloseFun() {
      this.$store.dispatch('isShowBigPicture', { status: false, data: null })
    }
  }
}
</script>
