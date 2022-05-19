<style lang="less" scoped>
.limitRing_container {
  width: 100%;
  height: auto;
  padding-bottom: 120px;
  border-top: 1px solid transparent;
  .comContent {
    margin-top: 94px;
    .module_container {
      margin: 0 auto;
      padding: 20px 0;
      width: 100%;
      position: relative;
    }
  }
  .content {
    .topDivBox {
      margin: 40px 0;
      display: flex;
      justify-content: flex-end;
      .textConB {
        display: inline-block;
        text-align: right;
        padding-right: 20px;
        line-height: 58px;
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #00734e;
        min-width: 345px;
        height: 58px;
        background: linear-gradient(
          90deg,
          rgba(0, 193, 209, 0) 0%,
          rgba(0, 141, 165, 0.5) 100%
        );
      }
    }

    .descContent {
      width: 670px;
      font-size: 22px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #129e7d;
      line-height: 32px;
      margin: 0 auto;
    }
  }
}
</style>

<template>
  <div class="limitRing_container">
    <div class="comContent">
      <div class="titleContent">
        <div class="iconStar"></div>
        <div class="text">送礼物爆婚戒</div>
        <div class="iconStar"></div>
      </div>
      <div class="module_container">
        <div class="content">
          <div class="topDivBox">
            <div class="textConB">
              我送出的甜蜜音符：
              <span>{{ send_num }}个</span>
            </div>
          </div>

          <div class="rewardContent">
            <div
              class="rewardLi rewardLi3"
              v-for="(item, index) in rewardData"
              :key="'key_' + index"
            >
              <RewardItem :itemData="item" />
            </div>
          </div>

          <div class="descContent">
            活动期间，送出带“活动”角标的【纸飞机】礼物，有机会获得【糖果】戒指或稀有【童话乐园】戒指，一旦爆出【糖果】戒指或稀有【童话乐园】戒指，将获得由官方探长发布的朋友圈全服通知及全服飘屏，同时也会给用户推送获得戒指的系统消息，请注意查收
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RewardItem from '../components/common/rewardItem'

export default {
  data() {
    return {
      rewardData: [
        {
          icon: '',
          showIcon: '',
          name: '甜蜜音符礼物',
          desc: '点亮X次'
        },
        {
          icon: '',
          showIcon: '',
          name: '甜蜜乐章结婚戒指',
          desc: '增加恩爱值5200'
        },
        {
          icon: '',
          showIcon: '',
          name: '誓言结婚戒指',
          desc: '增加恩爱值5200'
        }
      ],
      send_num: 0,
      gift_id: 1066 // 前端配置写死的礼物ID 每次活动都不一样 需要调整
    }
  },
  filters: {},
  components: { RewardItem },
  computed: {},

  mounted() {
    this._onGetGiftInfo()
  },
  methods: {
    _onGetGiftInfo() {
      this.$store
        .dispatch('giftRingAction')
        .then((res) => {
          if (res && res.success) {
            res.data.forEach((item) => {
              if (item.gift_id === this.gift_id) this.send_num = item.send_num
            })
          } else {
            return this.$store.dispatch('errorMessage', {
              msg: (res && res.msg) || '服务异常，请稍后重试~',
              status: true
            })
          }
        })
        .catch((err) => {
          return this.$store.dispatch('errorMessage', {
            msg: (err && err.msg) || '服务异常，请稍后重试~',
            status: true
          })
        })
    }
  }
}
</script>
