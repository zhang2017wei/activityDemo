<style lang="less" scoped>
.recordPop_container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 990;
  .recordContent {
    width: 630px;
    /*min-height: 704px;*/
    height: auto;
    max-height: 90%;
    background: #bbf8ff;
    border-radius: 40px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top: 1px solid transparent;
    .title {
      width: 90%;
      margin: 60px auto 40px;
      text-align: center;
      font-size: 28px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #00475c;
      line-height: 40px;
    }
    .rewardContent {
      width: 296px;
      height: auto;
      margin: 0 auto;
      min-height: 296px;
      background: #95dfe8;
      border-radius: 16px;
      border: 2px solid #ff66ac;
      .gif {
        width: 100%;
        height: auto;
        max-height: 600px;
      }
    }

    .optionContent {
      display: flex;
      justify-content: center;
      margin: 60px auto;
      padding-bottom: 60px;
    }
    .closeBtn {
      width: 200px;
      height: 68px;
      background: linear-gradient(180deg, #88fea8 0%, #00c697 100%);
      border-radius: 16px;
      font-size: 28px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 68px;
      text-align: center;
      margin-right: 70px;
    }
    .sendGift {
      width: 200px;
      height: 68px;
      background: linear-gradient(180deg, #fea0bd 0%, #ff4a98 100%);
      border-radius: 16px;
      font-size: 28px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 68px;
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="recordPop_container">
    <div class="recordContent">
      <div class="title">
        {{ popData }}
      </div>
      <div class="rewardContent">
        <img src="" class="gif" alt="" />
      </div>
      <div class="optionContent">
        <div class="closeBtn" @click="_close">关闭</div>
        <div class="sendGift" @click="_onSendGift()">去送礼</div>
      </div>
    </div>
  </div>
</template>
<script>
import Native from '../services/native'
export default {
  props: {
    popData: null
  },
  data() {
    return {}
  },
  filters: {},
  components: {},
  computed: {},

  mounted() {},
  methods: {
    _close() {
      this.$parent._isShowSynthetic(false)
    },
    _onSendGift() {
      Native.schema(
        encodeURIComponent(
          `who://www/browser?page=home&tab=room&filter=games_rcmd&header=room_games_rcmd`
        )
      )
    }
  }
}
</script>
