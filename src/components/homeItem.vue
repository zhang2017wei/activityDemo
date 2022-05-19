<style lang="less" scoped>
.itemModule_container {
  width: 100%;
  height: 100%;
  min-height: 800px;
  position: relative;
  .container {
    width: 630px;
    height: auto;
    margin: 0 auto;
    position: relative;
    .itemContent {
      overflow-y: auto;
      height: 100%;
      max-height: 800px;
    }
  }
  .noListData {
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #3bd256;
    text-align: center;
    line-height: 700px;
  }
  .rankingLi {
    position: relative;
    margin: 0 auto 20px;
    width: 630px;
    height: 146px;

    .rankingLiBox {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0 auto 20px;
      padding: 0 26px;
      height: 100%;
      background: url('../assets/images/recharge_li_bg.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }
    .rankNum {
      width: 60px;
      height: 82px;
      line-height: 82px;
      text-align: center;
      font-size: 28px;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
      font-weight: 600;
    }
    .rankNum1 {
      background: url('../assets/images/rank_no1.png') 0 0 no-repeat;
      background-size: 60px 82px;
    }
    .rankNum2 {
      background: url('../assets/images/rank_no2.png') 0 0 no-repeat;
      background-size: 60px 100%;
    }
    .rankNum3 {
      background: url('../assets/images/rank_no3.png') 0 0 no-repeat;
      background-size: 60px 100%;
    }
    .headBox {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin: 0 20px 0 16px;
      position: relative;
      .img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .head_frame {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 92px;
        height: 92px;
        border-radius: 50%;
      }
    }
    .headBox_1 {
      .img {
        border: 1px solid #ffe655;
      }
    }
    .infoBox {
      width: calc(100% - 130px - 108px - 60px - 20px);
      text-align: left;
      .name {
        width: 100%;
        height: 32px;
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 32px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .labelContent {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 52px;
        .level {
          width: 48px;
          height: 24px;
          background: url('https://xs-image.yinjietd.com/static/mini/activity/murderer/murdererNewYear2022/icon_level.png')
            0 0 no-repeat;
          background-size: 100% 100%;
          text-align: center;
          line-height: 26px;
          font-size: 18px;
          font-family: Helvetica;
          color: #ffffff;
          margin: 0 4px;
          text-indent: 14px;
        }
        .labelIcon {
          width: 110px;
          height: 52px;
          text-align: center;
          line-height: 52px;
        }
      }
    }
    .walletInfo {
      width: 130px;
      text-align: right;
      .text {
        height: 28px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #3bd256;
        line-height: 28px;
      }
      .num {
        height: 40px;
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 40px;
      }
    }
  }
  .selfContent {
    box-sizing: border-box;
    position: absolute;
    /*bottom: -164px;*/
    bottom: -214px;
    left: -40px;
    width: 750px;
    height: 164px;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    .rankingLi {
      width: 100%;
      border: 0;
      height: 164px;
      margin: 0;
      border-radius: 12px 12px 0 0;
      .rankingLiBox {
        padding: 0 30px;
      }
    }
  }
}
</style>

<template>
  <div class="itemModule_container">
    <div class="container">
      <div
        class="itemContent scrollContent"
        v-if="pageListData && pageListData.length"
      >
        <div
          class="rankingLi"
          v-for="(item, index) in pageListData"
          :key="'key_' + index"
        >
          <div class="rankingLiBox">
            <div class="rankNum" :class="'rankNum' + (index + 1)">
              {{ index > 2 ? index + 1 : '' }}
            </div>
            <div
              class="headBox"
              :class="'headBox_' + (index + 1)"
              @click="userHeadClick(item.uid)"
            >
              <img :src="baseUrl + (item.icon || '')" class="img" alt="" />
              <img
                :src="item.head_frame"
                v-if="item.head_frame"
                class="head_frame"
                alt=""
              />
            </div>
            <div class="infoBox">
              <div class="name">
                {{ item.name }}
              </div>
              <div class="labelContent">
                <div class="level" v-if="item.vip_level">
                  {{ item.vip_level }}
                </div>
                <img
                  :src="item.title | setHonor"
                  class="labelIcon"
                  v-if="item.title"
                  alt=""
                />
              </div>
            </div>
            <div class="walletInfo">
              <div class="text" v-if="typeText">{{ typeText }}</div>
              <div class="num">{{ item.score || 0 }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="noListData">暂无数据</div>
    </div>
    <div class="selfContent" v-if="selfListData">
      <div class="rankingLi">
        <div class="rankingLiBox">
          <div class="rankNum" :class="'rankNum' + selfListData.rank">
            {{
              selfListData.rank > 3
                ? selfListData.rank
                : selfListData.rank === 0
                ? '10+'
                : ''
            }}
          </div>
          <div
            class="headBox"
            :class="'headBox_' + (3 + 1)"
            @click="userHeadClick(selfListData.uid)"
          >
            <img
              :src="baseUrl + (selfListData.icon || '')"
              class="img"
              alt=""
            />
            <img
              :src="selfListData.head_frame"
              v-if="selfListData.head_frame"
              class="head_frame"
              alt=""
            />
          </div>
          <div class="infoBox">
            <div class="name">
              {{ selfListData.name }}
            </div>
            <div class="labelContent">
              <div class="level" v-if="selfListData.vip_level">
                {{ selfListData.vip_level }}
              </div>
              <img
                :src="selfListData.title | setHonor"
                class="labelIcon"
                v-if="selfListData.title"
                alt=""
              />
            </div>
          </div>
          <div class="walletInfo">
            <div class="text" v-if="typeText">{{ typeText }}</div>
            <div class="num">{{ selfListData.score || 0 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setHonor } from '../services/assets'
import Native from '../services/native'
import System from '@/system'
export default {
  props: {
    typeText: null,
    pageListData: null,
    selfListData: null
  },
  data() {
    return {
      baseUrl: 'https://xs-image.yinjietd.com/'
    }
  },
  filters: {
    setHonor
  },
  components: {},
  computed: {},

  mounted() {
    // this.mockDataFun()
  },
  methods: {
    userHeadClick(uid) {
      if (!uid) return
      Native.NativeShowImageScreen(uid)
      System.ta('murderer_h5_page_userHeardClick', uid)
    }
    /*mockDataFun() {
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
        rank: 3
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
    }*/
  }
}
</script>
