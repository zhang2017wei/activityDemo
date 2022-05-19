<style lang="less" scoped>
.probabilityPop_container {
  width: 100%;
  height: 100%;
  .probabilityCover {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.6);
  }
  .probabilityContent {
    width: 630px;
    height: 720px;
    background: #bbf8ff;
    border-radius: 40px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
    border: 1px solid transparent;
    .title {
      height: 44px;
      font-size: 32px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #00475c;
      line-height: 44px;
      margin-top: 60px;
      text-align: center;
    }
    .tabContent {
      width: 5.52rem;
      height: 400px;
      border: 2px solid #ff66ac;
      margin: 0.4rem auto 0.55rem;
      overflow: hidden;
      border-radius: 12px;
      .tr {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid #ff66ac;
        box-sizing: border-box;
        .p {
          height: 80px;
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #00475c;
          width: 50%;
          line-height: 80px;
          text-align: center;
        }
        .p1 {
          border-right: 2px solid #ff66ac;
        }
      }
      .tr:last-child {
        border-bottom: 0;
      }
    }

    .closeBtn {
      text-align: center;
      margin: 0 auto;
      line-height: 0.68rem;

      width: 200px;
      height: 68px;
      background: linear-gradient(180deg, #fea0bd 0%, #ff4a98 100%);
      border-radius: 16px;
      font-size: 28px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
    }
  }
}
</style>

<template>
  <div class="probabilityPop_container">
    <div class="probabilityCover" @click="_closePopFun()"></div>
    <div class="probabilityContent">
      <div class="title">限定戒指概率</div>
      <div class="tabContent">
        <div class="tr" v-for="(item, index) in listData" :key="'key_' + index">
          <div class="p p1">{{ item.title }}</div>
          <div class="p">{{ item.num }}</div>
        </div>
      </div>
      <div class="closeBtn" @click="_closePopFun()">关闭</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData: [
        {
          title: '限定戒指',
          num: '开出概率'
        },
        {
          title: '精灵虎',
          num: '0.35'
        },
        {
          title: '双宿双飞',
          num: '0.1'
        },
        {
          title: '蝶恋花',
          num: '0.35'
        },
        {
          title: '疯狂爱',
          num: '0.2'
        }
      ]
    }
  },
  filters: {},
  components: {},
  computed: {},

  mounted() {},
  methods: {
    _closePopFun() {
      this.$store.dispatch('isShowProbabilityPop', false)
    }
  }
}
</script>
