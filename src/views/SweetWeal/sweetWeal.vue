<style lang="less" scoped>
.sweetWeal_container {
  padding-top: 82px;
  width: 100%;
  padding-bottom: 60px;
  .exchangeContent {
    margin-top: 94px;
    &:nth-child(1) {
      margin-top: 0;
    }
  }
  .descText {
    width: 670px;
    font-size: 22px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #129e7d;
    line-height: 32px;
    margin: 0 auto 38px;
  }
  .moduleContent {
    padding-top: 0;
    margin-top: -20px;
  }
  .subTextTitle {
    margin: 38px auto 40px;
    width: 100%;
    text-align: center;
    height: 66px;
    font-size: 48px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #c60000;
    line-height: 66px;
  }
  .liContent {
    width: 100%;
    .li {
      width: 594px;
      height: 170px;
      margin: 26px auto 0;
      background: url('../../assets/images/recharge_li_bg.png') 0 0 no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .leftText {
        margin-left: 34px;
        .text1 {
          height: 42px;
          font-size: 30px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 42px;
          span {
            color: #ffa300;
          }
        }
        .text2 {
          height: 34px;
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #fdf8d8;
          line-height: 34px;
        }
      }
      .rightBtn {
        margin-right: 34px;
        background: url('../../assets/images/exchange_btn_1.png') 0 0 no-repeat;
        background-size: 100% 100%;
        width: 148px;
        height: 56px;
        text-align: center;
        line-height: 56px;
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #c50000;
      }
    }
  }
}
</style>

<template>
  <div class="sweetWeal_container">
    <div class="exchangeContent comContent">
      <div class="titleContent">
        <div class="text">充值赠送</div>
      </div>
      <div class="content module_container">
        <div class="descText">
          <p>
            1.用户单笔充值满不同金额，还可额外获赠不同数额的钻石，每个档位单日最多可优惠10次
          </p>
          <p>
            2.同时，单日累计充值满2000的用户，可额外获得7天【家里有矿】称号以及3天【星空木马】头像框
          </p>
          <p>
            3.活动期间累计充值达5000元、10000元、20000元活动结束后根据最高档位发放对应奖励
          </p>
        </div>
        <div class="module_title">活动简介</div>
      </div>
      <div class="rewardContent">
        <div
          class="rewardLi rewardLi2"
          v-for="(item, index) in rewardData1"
          :key="'key_' + index"
        >
          <RewardItem :itemData="item" />
        </div>
      </div>

      <div class="content moduleContent module_container">
        <div class="module_title">累计充值奖励</div>
      </div>
      <div class="rewardContent" style="margin-bottom: 0">
        <div
          class="rewardLi rewardLi3"
          v-for="(item, index) in rewardData2"
          :key="'key_' + index"
        >
          <RewardItem :itemData="item" />
        </div>
      </div>
    </div>

    <div class="exchangeContent comContent">
      <div class="titleContent">
        <div class="text">充值赠送金额</div>
      </div>
      <div class="subTextTitle">最高赠送20%</div>
      <div class="liContent">
        <div class="li">
          <div class="leftText">
            <div class="text1">单笔充值达到100-499元</div>
            <div class="text2">额外赠送10%钻石</div>
          </div>
          <div class="rightBtn" @click="_onDoRecharge()">去充值</div>
        </div>
        <div class="li">
          <div class="leftText">
            <div class="text1">单笔充值达到500-999元</div>
            <div class="text2">额外赠送15%钻石</div>
          </div>
        </div>
        <div class="li">
          <div class="leftText">
            <div class="text1">单笔充值达到1000元及以上</div>
            <div class="text2">额外赠送20%钻石</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RewardItem from '../../components/common/rewardItem'
import System from '@/system'
import Native from '../../services/native'
export default {
  data() {
    return {
      rewardData1: [
        {
          icon: '',
          showIcon: '',
          name: '家里有矿称号',
          label: '8天',
          desc: ''
        },
        {
          icon: '',
          showIcon: '',
          name: '星空木马头像框',
          label: '8天',
          desc: ''
        }
      ],
      rewardData2: [
        {
          icon: '',
          showIcon: '',
          name: '家里有矿称号',
          label: '8天',
          desc: '累充达5000元'
        },
        {
          icon: '',
          showIcon: '',
          name: '星空木马头像框',
          label: '8天',
          desc: '累充达10000元'
        },
        {
          icon: '',
          showIcon: '',
          name: '星空木马头像框',
          label: '8天',
          desc: '累充达20000元'
        }
      ]
    }
  },
  filters: {},
  components: {
    RewardItem
  },
  computed: {},

  mounted() {},
  methods: {
    _onDoRecharge() {
      System.ta('murderer_h5_page1', 'recharge')
      Native.NativeShowChargeBalance()
    }
  }
}
</script>
