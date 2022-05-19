<style lang="less" scoped>
.loverList_container {
  .optionContent {
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 670px;
    height: 66px;
    background: #fffceb;
    border-radius: 33px;
    .tab {
      width: 50%;
      height: 100%;
      border-radius: 33px;
      text-align: center;
      line-height: 66px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 600;
      color: #c60000;
    }
    .tabActive {
      background: #ffb000;
      color: #ffffff;
    }
  }

  .descTextC {
    width: 590px;
    font-size: 22px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #a8e5fe;
    line-height: 32px;
    margin: 22px auto 0;
  }

  .module_container {
    padding-top: 0;
    padding-bottom: 20px;
    margin-top: 40px;
    .module_title {
      margin: 30px auto;
    }
  }

  .liveRoomContent {
    padding-bottom: 0;
    .userLiveContent {
      width: 634px;
      height: 162px;
      background: #00734e;
      border-radius: 16px;
      margin: 30px auto;
      overflow-x: auto;
      .liveUserBox {
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .liveLi {
          width: 140px;
          height: 120px;
          border-radius: 50%;
          position: relative;
          .img {
            width: 116px;
            height: 116px;
            position: absolute;
            top: 50%;
            left: 20px;
            border: 2px solid #00cb99;
            transform: translateY(-50%);
            border-radius: 50%;
          }
        }
        .labelContent {
          width: 44px;
          height: 44px;
          background: #ffb000;
          position: absolute;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          .labelBox {
            background: #ffb000;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin: 2px;
            position: relative;
            .icon_live {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 26px;
              height: 35px;
            }
          }
        }
      }
    }
    .noLiveData {
      width: 100%;
      text-align: center;
      line-height: 110px;
      color: #ffffff;
    }
  }

  .listContent {
    width: 670px;
    margin: 0 auto;
    padding-top: 40px;
  }
  .rewContent {
    padding-bottom: 0;
  }
}
</style>

<template>
  <div class="loverList_container">
    <div class="optionContent">
      <div
        class="tab"
        @click="onChangeTab(1)"
        :class="activeIndex === 1 ? 'tabActive' : ''"
      >
        主持实力榜
      </div>
      <div
        class="tab"
        @click="onChangeTab(2)"
        :class="activeIndex === 2 ? 'tabActive' : ''"
      >
        主持破白榜
      </div>
    </div>

    <div class="descTextC">
      {{
        activeIndex === 1
          ? '根据活动期间用户开播的任何房型房内所有礼物打赏流水进行计算排名，房内所有礼物打赏流水统一归属到房主，1钻=1主持值'
          : '根据活动期间主播房内破白人数总和进行排名1人=1破白数'
      }}
    </div>
    <div class="comContent" style="padding-bottom: 10px">
      <div class="titleContent">
        <div class="text">开播主播</div>
      </div>
      <div class="liveRoomContent module_container">
        <div class="userLiveContent scrollContent">
          <div
            class="liveUserBox liveUserBox_7321"
            v-if="liveListData && liveListData.length"
          >
            <div
              class="liveLi"
              v-for="(item, index) in liveListData"
              :key="'key_img' + index"
              @click="_toLiveRoom(item.in_room)"
            >
              <img :src="baseUrl + (item.icon || '')" class="img" alt="" />
              <div class="labelContent">
                <div class="labelBox">
                  <img
                    src="../../assets/image/icon_live.gif"
                    class="icon_live"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-else class="noLiveData">暂无数据</div>
        </div>
      </div>
    </div>

    <div class="rewContent comContent" v-if="activeIndex === 1">
      <div class="titleContent">
        <div class="text">主持实力总榜奖励</div>
      </div>
      <div v-for="(item, index) in rewardData" :key="'reKey_' + index">
        <div class="rewardTitle">{{ item.title }}</div>
        <div class="rewardContent">
          <div
            class="rewardLi rewardLi2"
            v-for="(li, idx) in item.data"
            :key="'itemKey_' + idx"
          >
            <RewardItem :itemData="li" />
          </div>
        </div>
      </div>
    </div>
    <div class="rewContent comContent" v-if="activeIndex === 2">
      <div class="titleContent">主持实力总榜奖励</div>
      <div v-for="(item, index) in rewardData" :key="'reKey_' + index">
        <div class="rewardTitle">{{ item.title }}</div>
        <div class="rewardContent">
          <div
            class="rewardLi rewardLi2"
            v-for="(li, idx) in item.data"
            :key="'itemKey_' + idx"
          >
            <RewardItem :itemData="li" />
          </div>
        </div>
      </div>
    </div>

    <div class="comContent">
      <div class="titleContent">
        {{ activeIndex === 1 ? '主持实力榜' : '主持破白榜' }}
      </div>
      <div class="listContent">
        <HomeItem
          typeText="实力值"
          :pageListData="pageListData"
          :selfListData="selfListData"
        />
      </div>
    </div>
  </div>
</template>
<script>
import System from '@/system'
import Native from '../../services/native'
import RewardItem from '../../components/common/rewardItem'
import HomeItem from '../../components/homeItem'

export default {
  data() {
    return {
      rewardData: [
        {
          title: '榜单第1名',
          data: [
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '8天'
            },
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '8天'
            },
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '10天'
            },
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '10天'
            }
          ]
        },
        {
          title: '榜单第2-3名',
          data: [
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '8天'
            },
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '8天'
            },
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '10天'
            },
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '10天'
            }
          ]
        },
        {
          title: '榜单第4-5名',
          data: [
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '8天'
            },
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '8天'
            },
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '10天'
            },
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '10天'
            }
          ]
        },
        {
          title: '榜单第6-10名',
          data: [
            {
              icon: '',
              showIcon: '',
              name: 'XXX头像框',
              desc: '',
              label: '8天'
            }
          ]
        }
      ],
      liveListData: null,
      pageListData: null,
      selfListData: null,
      activeIndex: 1,
      baseUrl: 'https://xs-image.yinjietd.com/'
    }
  },
  filters: {},
  components: {
    RewardItem,
    HomeItem
  },
  computed: {},

  mounted() {
    this._onGetLiveRoomData()
    this._onGetTabList(this.activeIndex + 1)
  },
  methods: {
    _onGetTabList(type) {
      this.$store
        .dispatch('liveRankAction', { rank_type: type })
        .then((res) => {
          if (res && res.success) {
            this.pageListData = res.data.list
            this.selfListData = res.data.myRankInfo
          }
        })
    },
    _onGetLiveRoomData() {
      this.$store.dispatch('liveListAction').then((res) => {
        if (res && res.success) {
          this.liveListData = res.data.list
          setTimeout(() => {
            this._onSetWidth()
          }, 10)
        }
      })
    },
    _onSetWidth() {
      let _dom = document.getElementsByClassName('liveUserBox_7321')
      if (_dom && this.liveListData) {
        let _width = 140 * this.liveListData.length + 20
        _dom[0].style.width = _width / 2 + 'px'
      } else {
        this._onSetWidth()
      }
    },
    onChangeTab(index) {
      this.activeIndex = index
      this._onGetTabList(index + 1)
      System.ta('murderer_h5_page4', 'list' + index)
    },
    _toLiveRoom(rid) {
      Native.schema(
        encodeURIComponent(`who://www/browser?page=room&rid=${rid}`)
      )
    }
  }
}
</script>
