<style lang="less" scoped>
.forestList_container {
  width: 100%;
  height: auto;
  .module_container {
    position: relative;
    .rewardText2 {
      font-size: 22px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #129e7d;
      line-height: 34px;
      margin: 0 auto 40px;
      width: 586px;
    }
    .rewardGift {
      width: 192px;
      .giftBox {
        margin: 0 auto;
        width: 130px;
        height: 130px;
        background: linear-gradient(180deg, #fe68a6 0%, #fe8896 100%);
        border-radius: 12px;
        position: relative;
        .img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          height: auto;
          max-height: 100%;
        }
        .label {
          width: 56px;
          height: 30px;
          background: url('../assets/image/icon_label_bg.png') 0 0 no-repeat;
          background-size: 100% 100%;
          position: absolute;
          top: 0;
          right: 0;
          text-align: center;
          line-height: 30px;
          font-size: 20px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: #cf285e;
        }
      }

      .giftName {
        background-color: rgba(243, 173, 186, 1);
        border-radius: 10px;
        font-size: 24px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #ffffff;
        width: 192px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 14px auto 20px;
      }
    }
  }
}
</style>

<template>
  <div class="forestList_container">
    <div class="module_container">
      <div class="rewardText2">
        <p>榜单根据用户开【幸运宝箱】得次数进行排名，1次=1宝箱值</p>
      </div>
      <div class="list_content">
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
import HomeItem from '../components/homeItem'

import tab2_reward_1 from '../assets/image/tab2_reward_1.png'
import tab2_reward_2 from '../assets/image/tab2_reward_2.png'
import tab2_reward_3 from '../assets/image/tab2_reward_3.png'

import tab2_reward_1_gif from '../assets/image/tab2_reward_1.gif'
import tab2_reward_2_gif from '../assets/image/tab2_reward_2.gif'
import tab2_reward_3_gif from '../assets/image/tab2_reward_3.gif'

export default {
  data() {
    return {
      pageListData: null,
      selfListData: null
    }
  },
  filters: {},
  components: {
    HomeItem
  },
  computed: {},

  mounted() {
    this._onGetListData()
    // this.mockDataFun()
  },
  methods: {
    toShowBigPicture(url, name) {
      this.$store.dispatch('isShowBigPicture', {
        status: true,
        data: {
          url: url,
          name: name,
          flag: true,
          isGif: false
        }
      })
    },
    _onGetListData() {
      this.$store.dispatch('rankListAction').then((res) => {
        if (res && res.success) {
          this.pageListData = res.rankList
          this.selfListData = res.myRankInfo
        }
      })
    },
    mockDataFun() {
      this.selfListData = {
        age: 51,
        icon: '202108/19/611e0c14212309.21579167.jpg',
        name: '神棍',
        popularity_level: 6,
        sex: 1,
        uid: 118434197,
        score: 87,
        vip_level: 2,
        title: 30,
        rank: 13
      }
      this.pageListData = [
        {
          age: 51,
          icon: '202108/19/611e0c14212309.21579167.jpg',
          name: '神棍',
          popularity_level: 6,
          sex: 1,
          uid: 118434197,
          score: 87,
          vip_level: 2,
          title: 30
        },
        {
          age: 51,
          icon: '202108/19/611e0c14212309.21579167.jpg',
          name: '神棍',
          popularity_level: 6,
          sex: 1,
          uid: 118434197,
          score: 87,
          vip_level: 2,
          title: 60
        },
        {
          age: 51,
          icon: '202108/19/611e0c14212309.21579167.jpg',
          name: '神棍',
          popularity_level: 6,
          sex: 1,
          uid: 118434197,
          score: 87,
          vip_level: 2,
          title: 30
        },
        {
          age: 51,
          icon: '202108/19/611e0c14212309.21579167.jpg',
          name: '神棍',
          popularity_level: 6,
          sex: 1,
          uid: 118434197,
          score: 87
        },
        {
          age: 51,
          icon: '202108/19/611e0c14212309.21579167.jpg',
          name: '神棍',
          popularity_level: 6,
          sex: 1,
          uid: 118434197,
          score: 87,
          vip_level: 2,
          title: 30
        },
        {
          age: 51,
          icon: '202108/19/611e0c14212309.21579167.jpg',
          name: '神棍',
          popularity_level: 6,
          sex: 1,
          uid: 118434197,
          score: 87,
          vip_level: 2,
          title: 30
        },
        {
          age: 51,
          icon: '202108/19/611e0c14212309.21579167.jpg',
          name: '神棍',
          popularity_level: 6,
          sex: 1,
          uid: 118434197,
          score: 87,
          vip_level: 2,
          title: 30
        },
        {
          age: 51,
          icon: '202108/19/611e0c14212309.21579167.jpg',
          name: '神棍',
          popularity_level: 6,
          sex: 1,
          uid: 118434197,
          score: 87
        }
      ]
    }
  }
}
</script>
