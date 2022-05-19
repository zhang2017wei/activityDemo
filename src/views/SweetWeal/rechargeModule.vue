<style lang="less" scoped>
.Recharge_container {
  .content {
    padding: 30px 0 40px;
    .introduce {
      width: 586px;
      margin: 18px auto 0;
      font-size: 26px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #cf285e;
      line-height: 34px;
    }
    .rewardContent {
      margin-bottom: 0;
    }
    .subTextTitle {
      margin: 20px auto 18px;
      width: 100%;
      text-align: center;
      font-size: 32px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #c54810;
    }
    .liContent {
      width: 100%;
      .li {
        width: 626px;
        height: 148px;
        margin: 26px auto 0;
        background: url('../../assets/image/recharge_li_bg.png') 0 0 no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .leftText {
          margin-left: 34px;
          .text1 {
            font-size: 26px;
            font-family: SourceHanSansCN-Normal, SourceHanSansCN;
            font-weight: 400;
            color: #cf285e;
            line-height: 40px;
          }
          .text2 {
            font-size: 22px;
            font-family: SourceHanSansCN-Normal, SourceHanSansCN;
            font-weight: 400;
            color: #cf285e;
            line-height: 34px;
            margin-top: 16px;
          }
        }
        .rightBtn {
          margin-right: 34px;
          background: url('../../assets/image/exchange_btn_1.png') 0 0 no-repeat;
          background-size: 100% 100%;
          width: 160px;
          height: 56px;
          text-align: center;
          line-height: 56px;
          font-size: 26px;
          font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
          font-weight: normal;
          color: #ffffff;
        }
      }
    }
  }
}
</style>

<template>
  <div class="Recharge_container">
    <div class="content module_container">
      <div class="module_title">活动简介</div>
      <div class="introduce">
        <p>
          1.用户单笔充值满不同金额，还可额外获赠不同数额的钻石，每个档位单日最多可优惠10次
        </p>
        <p>2.同时，单日累计充值满2000的用户，可额外获得7天【家里有矿】称号</p>
        <p>
          3.活动期间累计充值达5000元、10000元、20000元，活动结束后根据最高档位发放对应奖励
        </p>
      </div>
    </div>

    <br />
    <div class="content module_container">
      <div class="module_title">单日累充奖励</div>
      <div class="rewardContent">
        <div
          class="rewardLi"
          v-for="(item, index) in rewardData1"
          :key="'key_' + index"
        >
          <RewardItem :itemData="item" />
        </div>
      </div>
    </div>

    <br />
    <div class="content module_container">
      <div class="module_title">累计充值奖励</div>
      <div class="rewardContent">
        <div
          class="rewardLi"
          v-for="(item, index) in rewardData2"
          :key="'key_' + index"
        >
          <RewardItem :itemData="item" />
        </div>
      </div>
    </div>

    <br />
    <div class="content module_container">
      <div class="module_title">充值赠送金额</div>
      <div class="subTextTitle">最高赠送20%</div>
      <div class="liContent">
        <div
          class="li"
          v-for="(item, ind) in rechargeData"
          :key="'key_li_' + ind"
        >
          <div class="leftText">
            <div class="text1">{{ item.text1 }}</div>
            <div class="text2">{{ item.text2 }}</div>
          </div>
          <div class="rightBtn" v-if="ind === 0" @click="_onDoRecharge(ind)">
            {{ item.btnText }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Native from '../../services/native'
import System from '@/system'
import { mapGetters } from 'vuex'

import tab1_gift1 from '../../assets/image/tab1_gift1.png'
import tab1_gift2 from '../../assets/image/tab1_gift2.png'
import tab1_gift3 from '../../assets/image/tab1_gift3.png'
import tab1_gift4 from '../../assets/image/tab1_gift4.png'

import tab1_gift1_gif from '../../assets/image/tab1_gift1.gif'
import tab1_gift2_gif from '../../assets/image/tab1_gift2.gif'
import tab1_gift3_gif from '../../assets/image/tab1_gift3.gif'
import tab1_gift4_gif from '../../assets/image/tab1_gift4.gif'

import RewardItem from '../../components/common/rewardItem'

export default {
  data() {
    return {
      rewardData1: [
        {
          icon: tab1_gift1,
          showIcon: tab1_gift1_gif,
          name: '家里有矿称号',
          label: '7天',
          desc: ''
        }
      ],
      rewardData2: [
        {
          icon: tab1_gift2,
          showIcon: tab1_gift2_gif,
          name: '甜蜜新贵称号',
          label: '7天',
          desc: '累充达5000元'
        },
        {
          icon: tab1_gift3,
          showIcon: tab1_gift3_gif,
          name: '甜蜜土豪称号',
          label: '10天',
          desc: '累充达10000元'
        },
        {
          icon: tab1_gift4,
          showIcon: tab1_gift4_gif,
          name: '甜蜜神壕称号',
          label: '15天',
          desc: '累充达20000元'
        }
      ],
      rechargeData: [
        {
          text1: '单笔充值达到100-499元',
          text2: '额外赠送10%钻石',
          btnText: '去充值'
        },
        {
          text1: '单笔充值达到500-999元',
          text2: '额外赠送15%钻石'
        },
        {
          text1: '单笔充值达到1000元及以上',
          text2: '额外赠送20%钻石'
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
    _onDoRecharge(index) {
      System.ta('murderer_h5_page1', 'recharge' + (index + 1))
      Native.NativeShowChargeBalance()
    }
  }
}
</script>
