<style lang="less" scoped>
.rewardItem_container {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
  text-align: center;
  .giftBox {
    width: 170px;
    height: 170px;
    border-radius: 16px;
    margin: 0 auto;
    position: relative;
    background: linear-gradient(
        180deg,
        rgba(187, 212, 9, 1) 0%,
        rgba(45, 210, 89, 1) 100%
      )
      #00734e;
    .boxContent {
      width: 166px;
      height: 166px;
      border-radius: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(180deg, #018872 0%, #00734e 100%) #00734e;
    }
    .giftUrl {
      width: 70%;
      height: auto;
      max-height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .label {
      padding: 0 10px;
      line-height: 34px;
      font-size: 22px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #cf285e;
      text-align: center;
      position: absolute;
      top: 0;
      right: 0;
      min-width: 72px;
      height: 32px;
      background: #ffe9b7;
      border-radius: 0px 16px 0px 16px;
    }
  }

  .giftName {
    text-align: center;
    width: 166px;
    margin: 8px auto 0;
    height: 40px;
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #c50000;
    line-height: 40px;
  }
  .giftDesc {
    text-align: center;
    margin-top: 10px;
    line-height: 32px;
    display: inline-block;
    height: 32px;
    background: #ffa300;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    padding: 0 6px;
    max-width: 95%;
  }
}
</style>

<template>
  <div class="rewardItem_container" v-if="itemData">
    <div class="giftLiContent">
      <div
        class="giftBox"
        @click="
          toShowBigPicture(
            itemData.showIcon ? itemData.showIcon : itemData.icon,
            itemData.name
          )
        "
      >
        <div class="boxContent">
          <img :src="itemData.icon" class="giftUrl" alt="" />
          <div class="label" v-if="itemData.label">{{ itemData.label }}</div>
        </div>
      </div>
      <div class="giftName longText" v-if="itemData.name">
        {{ itemData.name }}
      </div>
      <div class="giftDesc longText" v-if="itemData.desc">
        {{ itemData.desc }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemData: null
  },
  data() {
    return {}
  },
  filters: {},
  components: {},
  computed: {},

  mounted() {},
  methods: {
    toShowBigPicture(url, name, flag) {
      this.$store.dispatch('isShowBigPicture', {
        status: true,
        data: {
          url: url,
          name: name,
          flag: true,
          isGif: flag
        }
      })
    }
  }
}
</script>
