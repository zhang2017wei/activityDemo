<style lang="less" scoped>
.banner_container {
  width: 100%;
  height: 920px;
  position: relative;
  .banner_content {
    width: 100%;
    height: 100%;
    background: url('../assets/images/banner_bg.png') 0 0 no-repeat;
    background-size: 100% 820px;
  }
  .toRulerPage {
    position: absolute;
    top: 252px;
    right: 0px;
    width: 64px;
    height: 178px;
    background: url('../assets/images/icon_ruler_btn.png') 0 0 no-repeat;
    background-size: 100% 100%;
    border-top: 1px solid transparent;
    .text {
      width: 41px;
      height: 160px;
      margin: 6px auto;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 40px;
      text-align: center;
    }
  }
  .shareBtn {
    position: absolute;
    right: 0;
    top: 296px;
    width: 128px;
    height: 56px;
    font-size: 28px;
    background: url('../assets/images/icon_ruler_btn.png') 0 0 no-repeat;
    background-size: 100% 100%;
    text-align: center;
    line-height: 56px;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    font-weight: bold;
    color: #ffffff;
  }
  .icon_back {
    width: 48px;
    height: 48px;
    position: fixed;
    top: 60px;
    left: 22px;
    z-index: 919;
    background: url('https://xs-image.yinjietd.com/static/mini/activity/murderer/murdererIQiYi/image/banner/icon_back.png')
      0 0 no-repeat;
    background-size: 100% 100%;
  }

  .content {
    height: 748px;
    width: 100%;
  }
  .tabContainer {
    width: 750px;
    height: 130px;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    background: url('../assets/images/banner_option_bg.png') 0 0 no-repeat;
    background-size: 100% 100%;
    border-top: 1px solid transparent;
  }
  .tabContent {
    width: 100%;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 72px;
    .tabLi {
      width: calc(100% / 4);
      height: 100%;
      position: relative;
      line-height: 92px;
      text-align: center;
      background: url('../assets/images/banner_tab_bg.png') 0 0 no-repeat;
      background-size: 100% 100%;
      .textTab {
        font-size: 32px;
        font-family: YouSheBiaoTiHei;
        color: #ffffff;
      }
    }
    .option_active {
      background: url('../assets/images/banner_tab_active.png') 0 0 no-repeat;
      background-size: 100% 100%;
      .textTab {
        font-size: 36px;
        font-family: YouSheBiaoTiHei;
        color: #c50000;
        text-shadow: 0px 2px 0px #ffdaa3;
      }
    }
  }

  .activeTime {
    width: 426px;
    height: 60px;
    background: rgba(255, 255, 255, 0.74);
    border-radius: 30px;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #00836d;
    text-align: center;
    line-height: 60px;
    position: absolute;
    top: 266px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

<template>
  <div class="banner_container">
    <div class="banner_content">
      <div class="toRulerPage" @click="_toRulerPage()">
        <div class="text">活动规则</div>
      </div>
      <!--<div class="shareBtn" @click="_doShare()">分享</div>-->
      <div v-if="userBaseInfo">
        <div class="activeTime">
          活动时间：
          {{ (userBaseInfo.start_time * 1000) | setTime('MM月dd日') }}-{{
            (userBaseInfo.end_time * 1000) | setTime('MM月dd日')
          }}
        </div>
      </div>
      <div class="icon_back" @click="_doBack()"></div>

      <div class="content"></div>
      <div class="tabContainer">
        <div class="tabContent">
          <div
            class="tabLi"
            v-for="(item, index) in tabListData"
            :class="activeIndex === index ? 'option_active' : ''"
            @click="tabBarOptionClick(index)"
            :key="'key_' + index"
          >
            <div class="textTab">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Native from '../services/native'
import { setTime } from '../services/transformTime'
import { mapState } from 'vuex'
import System from '@/system'
export default {
  data() {
    return {
      tabListData: [
        {
          text: '幸运宝箱'
        },
        {
          text: '限时爆戒指'
        },
        {
          text: '充值赠送'
        },
        {
          text: '粽夏榜单'
        }
      ],
      activeIndex: 0
    }
  },
  filters: {
    setTime
  },
  components: {},
  computed: {
    ...mapState({
      userBaseInfo: (state) => state.userBaseInfo
    })
  },

  mounted() {
    // this.tabBarOptionClick(3)
  },
  methods: {
    _doShare() {
      System.ta('murderer_h5_homeClick', 'share')
      this.$store.dispatch('showSharePopAction', true)
    },
    _toRulerPage() {
      System.ta('murderer_h5_homeClick', 'activityRuler')
      this.$router.push({ path: '/ruler' })
    },
    _doBack() {
      Native.NativeNavigateBack()
    },
    tabBarOptionClick(index) {
      this.activeIndex = index
      this.$store.dispatch('bannerActiveIndex', index)
      System.ta('murderer_h5_homeTabBar', 'page' + (index + 1))
    }
  }
}
</script>
