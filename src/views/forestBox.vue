<template>
  <div class="forestBox_container">
    <div class="forest_content comContent">
      <div class="titleContent">
        <div class="text">活动简介</div>
      </div>
      <div class="module_container">
        <div class="activeDescBox">
          在房内幸运礼物面板开幸运宝箱有机会开出【家人们】、【不做垫子】、【枫叶】、【童年风筝】、【想你的液】、【晚安狗】6种不同礼物礼物将发放至你的背包，请注意查收
        </div>
      </div>
      <div class="content_box module_container">
        <div class="module_title">点图标集大奖</div>
        <div class="recordCon">
          <div class="record_btn" @click="_isShowRecord(true)">宝箱记录</div>
        </div>
        <div class="circle-content">
          <div
            class="circleBox"
            v-for="(item, index) in giftData2.gift_list"
            :class="'circleBox_' + (index + 1)"
            :key="'key_' + index"
          >
            <div class="boxGCont">
              <div
                class="giftBox"
                @click="
                  toShowBigPicture(box1Data[index].icon, box1Data[index].name)
                "
              >
                <img v-if="item.num > 0" :src="baseUrl + item.image" alt="" />
                <img v-else :src="box2Data[index].image" alt="" />
              </div>
              <div class="giftName longText">{{ item.name }}</div>
              <div class="lightNum">点亮{{ item.num }}次</div>
              <div class="circleDesc">{{ item.price }}钻/个</div>
            </div>
          </div>
          <div class="circleBox circleBox_7" v-if="giftData2.mergeGift">
            <div class="boxGCont">
              <div
                class="giftBox"
                @click="toShowBigPicture(box1Data[6].icon, box1Data[6].name)"
              >
                <img :src="baseUrl + giftData2.mergeGift.image" alt="" />
                <!--<img :src="box2Data[6].image" alt="">-->
              </div>
              <!--<div class="giftName">{{ giftData2.mergeGift.name }}</div>-->
              <!--<div class="lightNum">合成{{ giftData2.mergeGift.num }}次</div>-->
              <!--<div class="circleDesc">{{ giftData2.mergeGift.price }}钻/个</div>-->
            </div>
          </div>
        </div>
        <div class="openBoxBtn" @click="_onOpenBox()">开宝箱</div>
        <div class="descText">
          <p>
            1.开幸运宝箱开出后【家人们】、【不做垫子】、【枫叶】、【童年风筝】、【想你的液】、【晚安狗】6种不同礼物即可点亮图标，
            每开出一次即可点亮一次，6种礼物全部点亮，即可合成【童话星空】礼物大奖
          </p>
          <p>
            2.每获得一次【童话星空】礼物，6中礼物的点亮次数将会减少1次，点亮次数为0时，图标将会变灰
          </p>
          <p>3.【童话星空】礼物时效为15天，请及时使用，否则将会失效</p>
        </div>
      </div>
    </div>

    <div class="forest_content comContent" style="padding-bottom: 0">
      <div class="titleContent">
        <div class="text">榜单奖励</div>
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

    <div class="forest_content comContent">
      <div class="titleContent">宝箱榜单</div>
      <div class="listContentBox">
        <ForestList />
      </div>
    </div>
  </div>
</template>
<script>
import System from '@/system'
import Native from '../services/native'
import ForestList from '../components/forestList'
import RewardItem from '../components/common/rewardItem'

import tab2_gift_light1 from '../assets/image/tab2_gift_light1.png'
import tab2_gift_light2 from '../assets/image/tab2_gift_light2.png'
import tab2_gift_light3 from '../assets/image/tab2_gift_light3.png'
import tab2_gift_light4 from '../assets/image/tab2_gift_light4.png'
import tab2_gift_light5 from '../assets/image/tab2_gift_light5.png'
import tab2_gift_light6 from '../assets/image/tab2_gift_light6.png'
import tab2_gift_light7 from '../assets/image/tab2_gift_7.png'

import tab2_gift_1 from '../assets/image/tab2_gift_1.png'
import tab2_gift_2 from '../assets/image/tab2_gift_2.png'
import tab2_gift_3 from '../assets/image/tab2_gift_3.png'
import tab2_gift_4 from '../assets/image/tab2_gift_4.png'
import tab2_gift_5 from '../assets/image/tab2_gift_5.png'
import tab2_gift_6 from '../assets/image/tab2_gift_6.png'
import tab2_gift_7 from '../assets/image/tab2_gift_7.png'

export default {
  data() {
    return {
      box1Data: [
        {
          icon: tab2_gift_light1,
          name: '男神礼物'
        },
        {
          icon: tab2_gift_light2,
          name: '女神礼物'
        },
        {
          icon: tab2_gift_light3,
          name: '枫叶礼物'
        },
        {
          icon: tab2_gift_light4,
          name: '甜蜜相守礼物'
        },
        {
          icon: tab2_gift_light5,
          name: '想你的液礼物'
        },
        {
          icon: tab2_gift_light6,
          name: '晚安狗礼物'
        },
        {
          icon: tab2_gift_light7,
          name: '步步生花'
        }
      ],
      box2Data: [
        { image: tab2_gift_1 },
        { image: tab2_gift_2 },
        { image: tab2_gift_3 },
        { image: tab2_gift_4 },
        { image: tab2_gift_5 },
        { image: tab2_gift_6 },
        { image: tab2_gift_7 }
      ],
      giftData2: {
        gift_list: [
          {
            num: 0,
            name: '家人们礼物',
            price: 99
          },
          {
            num: 0,
            name: '不做垫子礼物',
            price: 99
          },
          {
            num: 0,
            name: '枫叶礼物',
            price: 99
          },
          {
            num: 0,
            name: '单双鸭礼物',
            price: 99
          },
          {
            num: 0,
            name: '想你的液礼物',
            price: 99
          },
          {
            num: 0,
            name: '晚安狗礼物',
            price: 99
          },
          {
            num: 0,
            name: '极光森林礼物',
            price: 99
          }
        ]
      },
      baseUrl: 'https://xs-image.yinjietd.com/',
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
        }
      ]
    }
  },
  filters: {},
  components: {
    ForestList,
    RewardItem
  },
  computed: {},

  mounted() {
    this._onGetGiftListData()
  },
  methods: {
    _onGetGiftListData() {
      this.$store.dispatch('giftLotteryAction').then((res) => {
        if (res && res.success) {
          this.giftData2 = res.data
        }
      })
    },
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
    _onOpenBox() {
      System.ta('murderer_h5_page2', 'treasureChests')
      Native.schema(
        encodeURIComponent(
          `who://www/browser?page=home&tab=room&filter=games_rcmd&header=room_games_rcmd`
        )
      )
    },
    _isShowRecord(data) {
      this.$parent._isShowRecord(data)
      System.ta('murderer_h5_page1', 'record')
    }
  }
}
</script>

<style lang="less" scoped>
.forestBox_container {
  padding-bottom: 100px;
}

.activeDescBox {
  width: 100%;
  margin: 0 auto;
  padding: 0 0 30px;
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #129e7d;
  line-height: 32px;
}

.forest_content {
  .content_box {
    border-radius: 24px;
    margin: 0 auto;
    min-height: 770px;
    width: 100%;
    .recordCon {
      width: 100%;
      height: 58px;
      margin: 18px auto;
      display: flex;
      justify-content: flex-end;
      .record_btn {
        text-align: center;
        width: 180px;
        height: 58px;
        background: linear-gradient(
          90deg,
          rgba(0, 193, 209, 0) 0%,
          rgba(0, 141, 165, 0.5) 100%
        );
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #00734e;
        line-height: 58px;
        margin-right: -2px;
      }
    }
    .circle-content {
      width: 100%;
      height: 610px;
      position: relative;
    }
    .circleBox {
      position: absolute;
      width: 122px;
      height: 122px;
      border-radius: 50%;
      background: url('../assets/images/icon_circle_bg.png') 0 0 no-repeat;
      background-size: 100% 100%;
      .boxGCont {
        position: relative;
        width: 100%;
        .giftBox {
          width: 122px;
          height: 122px;
          border-radius: 122px;
          position: relative;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            height: auto;
            max-height: 100%;
          }
        }
        .giftName {
          width: 174px;
          text-align: center;
          position: absolute;
          top: 122px;
          left: 50%;
          transform: translateX(-50%);
          height: 40px;
          line-height: 40px;
          font-size: 28px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #c50000;
        }
        .lightNum {
          /*padding: 2px;*/
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #c50000;
          position: absolute;
          z-index: 4;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 116px;
          line-height: 32px;
          text-align: center;
          height: 32px;
          background: #ffe9b7;
          border-radius: 16px;
        }
        .circleDesc {
          margin-top: 40px;
          height: 26px;
          line-height: 36px;
          text-align: center;
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffa100;
        }
      }
    }
    .circleBox_1 {
      top: 372px;
      left: 72px;
    }
    .circleBox_2 {
      top: 170px;
      left: 40px;
    }
    .circleBox_3 {
      top: 28px;
      left: 198px;
    }
    .circleBox_4 {
      top: 28px;
      right: 198px;
    }
    .circleBox_5 {
      top: 170px;
      right: 40px;
    }
    .circleBox_6 {
      top: 372px;
      right: 72px;
    }
    .circleBox_7 {
      width: 314px;
      height: 312px;
      top: 226px;
      left: 50%;
      transform: translateX(-50%);
      background: url('../assets/images/icon_circle_center_bg.png') 0 0
        no-repeat;
      background-size: 100% 100%;
      border-radius: unset;
      .boxGCont {
        position: relative;
        .giftBox {
          width: 314px;
          height: 312px;
          position: relative;
          border-radius: unset;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50%;
            height: auto;
            max-height: 100%;
          }
        }
        .giftName {
          top: 140px;
          width: 214px;
          font-size: 22px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
        }
        .circleDesc {
          margin-top: 4px;
          font-weight: 600;
        }
      }
    }

    .openBoxBtn {
      background: url('../assets/images/btn_bg_yellow.png') 0 0 no-repeat;
      background-size: 100% 100%;
      width: 648px;
      height: 104px;
      font-size: 40px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #c50000;
      line-height: 104px;
      text-align: center;
      margin: 0 auto 34px;
    }

    .descText {
      text-align: left;
      width: 670px;
      margin: 0 auto;
      line-height: 32px;
      font-size: 22px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #129e7d;
    }
  }
}

.listContentBox {
  width: 100%;
  margin-top: 10px;
}
</style>
