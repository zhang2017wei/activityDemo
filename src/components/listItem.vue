<style lang="less" scoped>
.listItem_container {
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  position: relative;

  .listItem_content {
    width: 604px;
    height: auto;
    border-bottom: 2px solid #fc8ca9;
    position: relative;
    z-index: 3;
    margin: 20px auto;
    .liLabel {
      width: 90px;
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      margin-left: 30px;
      text-align: center;
      .icon_love {
        width: 70px;
        height: 54px;
      }
      .p1 {
        height: 28px;
        line-height: 28px;
        font-size: 20px;
        font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
        font-weight: normal;
        color: #cf285e;
      }
      .p2 {
        height: 28px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #cf285e;
        line-height: 28px;
      }
    }
    .liContent {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 26px 30px;
      .rankBox {
        width: 60px;
        height: 82px;
        line-height: 82px;
        text-align: center;
        font-size: 34px;
        font-family: YouSheBiaoTiHei;
        font-weight: 600;
        color: #cf285e;
      }
      .rankNum1 {
        background: url('../assets/image/rank_no1.png') 0 0 no-repeat;
        background-size: 100% 100%;
      }
      .rankNum2 {
        background: url('../assets/image/rank_no2.png') 0 0 no-repeat;
        background-size: 100% 100%;
      }
      .rankNum3 {
        background: url('../assets/image/rank_no3.png') 0 0 no-repeat;
        background-size: 100% 100%;
      }
      .infoBox {
        box-sizing: border-box;
        width: calc(50% - 30px);
        height: 100%;
        .headBox {
          width: 98px;
          height: 98px;
          border-radius: 50%;
          position: relative;
          margin: 0 auto;

          .img {
            border: 4px solid #fc8ca9;
            width: 96px;
            height: 96px;
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
        .infoName {
          margin: 20px auto 0;
          height: 32px;
          line-height: 32px;
          width: 90%;
          text-align: center;
          font-size: 20px;
          font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
          font-weight: normal;
          color: #cf285e;
        }
        .labelContent {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 0.52rem;
          .level {
            width: 60px;
            height: 24px;
            background: url('https://xs-image.yinjietd.com/static/mini/activity/murderer/murdererNewYear2022/icon_level.png')
              0 0 no-repeat;
            background-size: 100% 100%;
            text-align: center;
            line-height: 0.26rem;
            font-size: 0.18rem;
            font-family: Helvetica;
            color: #ffffff;
            margin: 0 0.04rem;
            text-indent: 0.14rem;
          }
          .labelIcon {
            width: 1.1rem;
            height: 0.52rem;
            text-align: center;
            line-height: 0.52rem;
          }
        }
      }
    }
  }

  .noData {
    height: 500px;
    line-height: 500px;
    text-align: center;
  }

  .selfItemContent {
    width: 750px;
    position: absolute;
    left: -52px;
    bottom: -238px;
    height: 238px;
    background: linear-gradient(180deg, #fea5c6 0%, #fe84a9 100%);
    box-shadow: inset 0px 6px 6px 0px #fecde0, inset 0px -6px 8px 0px #fa6188;
    border-radius: 16px 16px 0px 0px;
    .liContent {
      padding: 20px 50px 0;
    }
    .noCpLi {
      width: 80%;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .text_1 {
      font-weight: 600;
      text-align: center;
      font-size: 32px;
      font-family: ZapfDingbatsITC;
      color: #ffffff;
      letter-spacing: 1px;
    }
    .text_Btn {
      background: url('../assets/image/exchange_btn_1.png') 0 0 no-repeat;
      background-size: 100% 100%;
      width: 160px;
      height: 56px;
      font-size: 26px;
      line-height: 56px;
      text-align: center;
      font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
      font-weight: normal;
      color: #ffffff;
    }
  }
}
</style>

<template>
  <div class="listItem_container">
    <div v-if="pageListData && pageListData.length">
      <div
        v-for="(item, index) in pageListData"
        class="listItem_content"
        :key="'key_' + index"
      >
        <div class="liLabel">
          <img src="../assets/image/icon_love.png" class="icon_love" alt="" />
          <p class="p1">恋人值</p>
          <p class="p2">{{ item.score }}</p>
        </div>
        <div class="liContent">
          <div class="rankBox" :class="'rankNum' + (index + 1)">
            {{ index > 2 ? index + 1 : '' }}
          </div>
          <div class="infoBox">
            <div class="headBox" @click="userHeadClick(item.members[0].uid)">
              <img :src="item.members[0].icon" class="img" alt="" />
              <img
                :src="item.members[0].head_frame"
                v-if="item.members[0].head_frame"
                class="head_frame"
                alt=""
              />
            </div>
            <div class="infoName longText">{{ item.members[0].name }}</div>
            <div class="labelContent">
              <div class="level" v-if="item.members[0].vip_level">
                {{ item.members[0].vip_level }}
              </div>
              <img
                :src="item.members[0].title | setHonor"
                class="labelIcon"
                v-if="item.members[0].title"
                alt=""
              />
            </div>
          </div>
          <div class="infoBox">
            <div class="headBox" @click="userHeadClick(item.members[1].uid)">
              <img :src="item.members[1].icon" class="img" alt="" />
              <img
                :src="item.members[1].head_frame"
                v-if="item.members[1].head_frame"
                class="head_frame"
                alt=""
              />
            </div>
            <div class="infoName longText">{{ item.members[1].name }}</div>
            <div class="labelContent">
              <div class="level" v-if="item.members[1].vip_level">
                {{ item.members[1].vip_level }}
              </div>
              <img
                :src="item.members[1].title | setHonor"
                class="labelIcon"
                v-if="item.members[1].title"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="noData">暂无数据</div>

    <div
      v-if="selfListData && selfListData.members && selfListData.members.length"
    >
      <div class="listItem_content selfItemContent">
        <div class="liLabel">
          <img src="../assets/image/icon_love.png" class="icon_love" alt="" />
          <p class="p1">恋人值</p>
          <p class="p2">{{ selfListData.score }}</p>
        </div>
        <div class="liContent">
          <div class="rankBox" :class="'rankNum' + selfListData.rank">
            {{
              selfListData.rank > 2
                ? selfListData.rank
                : selfListData.rank === 0
                ? '10+'
                : ''
            }}
          </div>
          <div class="infoBox">
            <div
              class="headBox"
              @click="userHeadClick(selfListData.members[0].uid)"
            >
              <img
                :src="selfListData.members[0].icon || ''"
                class="img"
                alt=""
              />
              <img
                :src="selfListData.members[0].head_frame"
                v-if="selfListData.members[0].head_frame"
                class="head_frame"
                alt=""
              />
            </div>
            <div class="infoName longText">
              {{ selfListData.members[0].name }}
            </div>
            <div class="labelContent">
              <div class="level" v-if="selfListData.members[0].vip_level">
                {{ selfListData.members[0].vip_level }}
              </div>
              <img
                :src="selfListData.members[0].title | setHonor"
                class="labelIcon"
                v-if="selfListData.members[0].title"
                alt=""
              />
            </div>
          </div>
          <div class="infoBox">
            <div
              class="headBox"
              @click="userHeadClick(selfListData.members[1].uid)"
            >
              <img
                :src="selfListData.members[1].icon || ''"
                class="img"
                alt=""
              />
              <img
                :src="selfListData.members[1].head_frame"
                v-if="selfListData.members[1].head_frame"
                class="head_frame"
                alt=""
              />
            </div>
            <div class="infoName longText">
              {{ selfListData.members[1].name }}
            </div>
            <div class="labelContent">
              <div class="level" v-if="selfListData.members[1].vip_level">
                {{ selfListData.members[1].vip_level }}
              </div>
              <img
                :src="selfListData.members[1].title | setHonor"
                class="labelIcon"
                v-if="selfListData.members[1].title"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="listItem_content selfItemContent">
        <div class="noCpLi">
          <div class="text_1">❤暂无情侣关系</div>
          <div class="text_Btn" @click="toMarryPage()">去求婚</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Native from '../services/native'
import { setHonor } from '../services/assets'
import System from '@/system'
export default {
  props: {
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

  mounted() {},
  methods: {
    userHeadClick(uid) {
      if (!uid) return
      Native.NativeShowImageScreen(uid)
      System.ta('murderer_h5_page_userHeardClick', uid)
    },
    toMarryPage() {
      System.ta('murderer_h5_page_click', 'marryBtn')
      Native.schema(encodeURIComponent(`who://www/browser?page=show_marry`))
    }
  }
}
</script>
