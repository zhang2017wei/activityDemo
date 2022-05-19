<style lang="less" scoped>
.rewardItem_container {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
  .giftBox {
    width: 130px;
    height: 130px;
    background: linear-gradient(180deg, #fe68a6 0%, #fe8896 100%);
    border-radius: 18px;
    margin: 0 auto;
    position: relative;
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
      min-width: 84px;
      height: 34px;
      padding: 0 10px;
      background: url('../../assets/image/icon_label_bg.png') 0 0 no-repeat;
      background-size: 100% 100%;
      line-height: 34px;
      font-size: 22px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #cf285e;
      text-align: center;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .giftName {
    background-color: rgba(243, 173, 186, 1);
    border-radius: 10px;
    font-size: 20px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #ffffff;
    width: 174px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 10px auto 10px;
    border: 1px solid rgba(243, 173, 186, 1);
  }
  .giftDesc {
    text-align: center;
    width: 100%;
    font-size: 24px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #cf285e;
    line-height: 36px;
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
        <img :src="itemData.icon" class="giftUrl" alt="" />
        <div class="label" v-if="itemData.label">{{ itemData.label }}</div>
      </div>
      <div class="giftName longText" v-if="itemData.name">
        {{ itemData.name }}
      </div>
      <div class="giftDesc longText">{{ itemData.desc }}</div>
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
