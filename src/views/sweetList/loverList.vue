<style lang="less" scoped>
.loverList_container {
  .activeDescContent {
    width: 646px;
    height: auto;
    background-color: #fdd9da;
    margin: 30px auto;
    padding-bottom: 40px;
    border-radius: 16px;
    .descTextC {
      width: 586px;
      font-size: 26px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #cf285e;
      line-height: 34px;
      margin: 22px auto 0;
    }
  }

  .module_container {
    padding-top: 0;
    padding-bottom: 20px;
    margin-top: 40px;
    .module_title {
      margin: 30px auto;
    }
  }

  .listContent {
    padding-top: 40px;
  }
}
</style>

<template>
  <div class="loverList_container">
    <div class="activeDescContent">
      <div class="module_subTitle">
        <div class="iconStar"></div>
        活动简介
        <div class="iconStar"></div>
      </div>
      <div class="descTextC">
        活动期间，已经结婚的情侣和新结婚的情侣用户，在房内互赠礼物，
        可以增加恋人值，10钻=1恋人值。榜单根据恋人值进行排名
      </div>
    </div>

    <div class="module_container">
      <div class="module_subTitle">
        <div class="iconStar"></div>
        甜蜜恋人总榜奖励
        <div class="iconStar"></div>
      </div>
      <div class="module_title">甜蜜恋人总榜第1名</div>
      <div class="rewardContent">
        <div
          class="rewardLi rewardLi4"
          v-for="(item, index) in rewardData1"
          :key="'key_' + index"
        >
          <RewardItemNew :itemData="item" />
        </div>
      </div>

      <div class="module_title" style="margin-top: 20px">
        甜蜜恋人总榜第2-3名
      </div>
      <div class="rewardContent">
        <div
          class="rewardLi rewardLi4"
          v-for="(item, index) in rewardData2"
          :key="'key_' + index"
        >
          <RewardItemNew :itemData="item" />
        </div>
      </div>

      <div class="module_title" style="margin-top: 20px">
        甜蜜恋人总榜第4-5名
      </div>
      <div class="rewardContent">
        <div
          class="rewardLi rewardLi4"
          v-for="(item, index) in rewardData3"
          :key="'key_' + index"
        >
          <RewardItemNew :itemData="item" />
        </div>
      </div>
    </div>

    <div class="module_container">
      <div class="module_subTitle">
        <div class="iconStar"></div>
        甜蜜恋人总榜奖励
        <div class="iconStar"></div>
      </div>
      <div class="listContent">
        <HomeItem
          typeText="宝箱值"
          :pageListData="pageListData"
          :selfListData="selfListData"
        />
      </div>
    </div>
  </div>
</template>
<script>
import RewardItemNew from '../../components/common/rewardItemNew'
// import HomeItem from '../../components/homeItem'
import HomeItem from '../../components/listItem'

import tab4_gift_1 from '../../assets/image/tab4_gift_1.png'
import tab4_gift_2 from '../../assets/image/tab4_gift_2.png'
import tab4_gift_3 from '../../assets/image/tab4_gift_3.png'

import tab4_gift_1_gif from '../../assets/image/tab4_gift_1.gif'
import tab4_gift_2_gif from '../../assets/image/tab4_gift_2.gif'
import tab4_gift_3_gif from '../../assets/image/tab4_gift_3.gif'

export default {
  data() {
    return {
      rewardData1: [
        {
          icon: tab4_gift_1,
          showIcon: tab4_gift_1_gif,
          name: '精灵王子头像框',
          desc: '',
          label: '8天'
        },
        {
          icon: tab4_gift_2,
          showIcon: tab4_gift_2_gif,
          name: '精灵公主头像框',
          desc: '',
          label: '8天'
        },
        {
          icon: tab4_gift_3,
          showIcon: tab4_gift_3_gif,
          name: '爱你座驾',
          desc: '',
          label: '5天'
        }
      ],
      rewardData2: [
        {
          icon: tab4_gift_1,
          showIcon: tab4_gift_1_gif,
          name: '精灵王子头像框',
          desc: '',
          label: '5天'
        },
        {
          icon: tab4_gift_2,
          showIcon: tab4_gift_2_gif,
          name: '精灵公主头像框',
          desc: '',
          label: '5天'
        },
        {
          icon: tab4_gift_3,
          showIcon: tab4_gift_3_gif,
          name: '爱你座驾',
          desc: '',
          label: '3天'
        }
      ],
      rewardData3: [
        {
          icon: tab4_gift_1,
          showIcon: tab4_gift_1_gif,
          name: '精灵王子头像框',
          desc: '',
          label: '3天'
        },
        {
          icon: tab4_gift_2,
          showIcon: tab4_gift_2_gif,
          name: '精灵公主头像框',
          desc: '',
          label: '3天'
        },
        {
          icon: tab4_gift_3,
          showIcon: tab4_gift_3_gif,
          name: '爱你座驾',
          desc: '',
          label: '1天'
        }
      ],
      pageListData: null,
      selfListData: null
    }
  },
  filters: {},
  components: {
    RewardItemNew,
    HomeItem
  },
  computed: {},

  mounted() {
    this._onGetListData()
  },
  methods: {
    _onGetListData() {
      this.$store
        .dispatch('cpTotalRankAction', { rank_type: 0 })
        .then((res) => {
          if (res && res.success) {
            this.pageListData = res.data.list
            this.selfListData = res.data.myRankInfo
          }
        })
    }
  }
}
</script>
