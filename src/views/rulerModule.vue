<style lang="less" scoped>
.ruler_container {
  width: 100%;
  height: auto;
  background: #00734e;
  padding-bottom: 40px;
  .comContent {
    margin: 100px auto 0;
    width: 710px;
    height: auto;
    background: #d0fde1 linear-gradient(180deg, #fdf8d8 0%, #d2fbe2 100%);
    border-radius: 12px;
    border: 2px solid;
    border-image: linear-gradient(
        180deg,
        rgba(143, 255, 165, 1),
        rgba(85, 195, 145, 1)
      )
      2 2;
    position: relative;
    border-top: 0.1px solid transparent;
    padding-bottom: 42px;
    .titleContent {
      width: 714px;
      height: 94px;
      margin-top: -44px;
      margin-left: -4px;
      background: url('../assets/images/title_com_bg.png') 0 0 no-repeat;
      background-size: 100% 118px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
    }
  }

  .descContent {
    margin: 0 auto 20px;
    padding: 20px;
    .p {
      color: #129e7d;
    }
    .text_title {
      color: #129e7d;
      font-size: 28px;
      font-weight: 400;
    }
  }
  .descContent2 {
    background: #d2fbe2;
  }
  .descContent4 {
    background: #d2fbe2;
  }

  .icon_back {
    width: 48px;
    height: 48px;
    position: fixed;
    top: 60px;
    left: 22px;
    z-index: 979;
    background: url('https://xs-image.yinjietd.com/static/mini/activity/murderer/murdererIQiYi/image/banner/icon_back.png')
      0 0 no-repeat;
    background-size: 100% 100%;
  }
  .topContent {
    width: 100%;
    height: 820px;
    background: url('../assets/images/banner_bg.png') 0 0 no-repeat;
    background-size: 100% 820px;
    position: relative;
    &::after {
      content: '';
      background: url('../assets/images/banner_option_bg.png') 0 0 no-repeat;
      background-size: 100% 100%;
      width: 754px;
      height: 130px;
      position: absolute;
      bottom: -60px;
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

  .title1 {
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #129e7d;
  }
}
</style>

<template>
  <div class="ruler_container">
    <div class="icon_back"></div>
    <div class="topContent">
      <div v-if="userBaseInfo">
        <div class="activeTime">
          活动时间：
          {{ (userBaseInfo.start_time * 1000) | setTime('MM月dd日') }}-{{
            (userBaseInfo.end_time * 1000) | setTime('MM月dd日')
          }}
        </div>
      </div>
    </div>
    <div class="comContent">
      <div class="titleContent">
        <div class="text">活动简介</div>
      </div>
      <div
        class="descContent"
        :class="'descContent' + (index + 1)"
        v-for="(item, index) in ruleData"
        :key="'key_ruler_' + index"
      >
        <div class="title1">{{ item.module_title }}</div>
        <div v-for="(data, idx3) in item.content" :key="'data_' + idx3">
          <div class="text_title">{{ data.text_title }}</div>
          <div v-for="(li, idx) in data.descText" :key="'ruler_' + idx">
            <div class="p">{{ li.textP }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import System from '@/system'
import Native from '../services/native'
import { mapGetters, mapState } from 'vuex'
import { setTime } from '../services/transformTime'
export default {
  data() {
    return {
      ruleData: [
        {
          module_title: '一、幸运宝箱',
          content: [
            {
              descText: [
                {
                  textP:
                    '1. 活动期间，在幸运礼物面板开【幸运宝箱】礼物有机会开出【家人们】【不做垫子】【枫叶】【童年风筝】【想你的液】【晚安狗】6种不同礼物，开出的礼物将发放至你的背包，请及时使用'
                },
                {
                  textP:
                    '2. 【家人们】【不做垫子】【枫叶】【童年风筝】【想你的液】【晚安狗】6种不同礼物同时即可点亮H5图标，每开出一次即可点亮一次，6种礼物全部点亮将会自动获得【童话星空】礼物'
                },
                {
                  textP:
                    '3. 每获得一次【童话星空】礼物，6种礼物的点亮次数将会减少1次，点亮次数为0时图标将会变灰'
                },
                {
                  textP:
                    '4.【童话星空】礼物时效为15天，请及时使用否则将会失效。'
                },
                {
                  textP:
                    '5. 宝箱榜单根据活动期间开宝箱的次数进行排名，1次=1宝箱值'
                },
                {
                  textP: '榜单奖励：'
                },
                {
                  textP:
                    '第1名：8天【童心飞扬】头像框、8天【童心飞扬】聊天气泡、8天【童心飞扬】入场横幅、8天【童心飞扬】主页装扮'
                },
                {
                  textP:
                    '第2-3名：5天【童心飞扬】头像框、5天【童心飞扬】聊天气泡、5天【童心飞扬】入场横幅、5天【童心飞扬】主页装扮'
                },
                {
                  textP:
                    '第4-5名：3天【童心飞扬】头像框、3天【童心飞扬】聊天气泡、3天【童心飞扬】入场横幅、3天【童心飞扬】主页装扮'
                },
                {
                  textP: '请得奖人注意查看系统消息'
                }
              ]
            }
          ]
        },
        {
          module_title: '二、限时爆戒指',
          content: [
            {
              descText: [
                {
                  textP:
                    '1. 活动期间，送出带“爆戒指”+“婚戒”角标的【纸飞机】礼物，有机会获得【糖果】戒指或稀有【童话乐园】戒指，一旦爆出【糖果】戒指或稀有【童话乐园】戒指，将获得由官方探长发布的朋友圈全服通知及全服飘屏。同时也会给用户推送获得戒指的系统消息，请注意查收。'
                },
                { textP: '2. 开出【童话乐园】戒指，还将触发房内霸屏' },
                { textP: '补充规则：' },
                {
                  textP:
                    '①同一用户累计送出520个【纸飞机】礼物，未得到任何戒指，活动结束后，将给用户补发1个【糖果】戒指'
                },
                {
                  textP:
                    '②同一用户累计送出1314个【纸飞机】礼物，未得到【童话乐园】戒指，活动结束后，将给用户补发1个【童话乐园】戒指'
                }
              ]
            }
          ]
        },
        {
          module_title: '三、充值赠送',
          content: [
            {
              descText: [
                {
                  textP:
                    '1. 用户单笔充值满不同金额，还可额外获赠不同数额的钻石，每个档位单日最多可优惠10次'
                },
                {
                  textP:
                    '2. 同时，单日累计充值满2000的用户，可额外获得一个7天【家里有矿】称号以及3天【星空木马】头像框'
                },
                {
                  textP:
                    '3. 活动期间累计充值达5000元、10000元、20000元可额外获得不同称号。奖励将在活动结束后根据最高档位发放对应称号'
                }
              ]
            }
          ]
        },
        {
          module_title: '四、粽夏榜单',
          content: [
            {
              text_title: '● 主持实力榜',
              descText: [
                {
                  textP:
                    '1. 根据活动期间用户开播的任何房型房内所有礼物打赏流水进行排名。房内所有礼物打赏流水统一归属到房主。1钻=1主持值'
                },
                { textP: '2. 榜单奖励：以活动期间，根据主持排名进行奖励发放' },
                { textP: '第1名：8天【粽夏金话筒】称号和1个【恋如雨至】礼物' },
                { textP: '第2-3名：5天【粽夏银话筒】称号和1个【求撩猫】礼物' },
                {
                  textP: '第4-5名：3天【粽夏花话筒】称号和、1个【爱心熊掌】礼物'
                },
                { textP: '第6-10名：3天【粽夏花话筒】称号' },
                { textP: '请得奖人注意查看系统消息' }
              ]
            },
            {
              text_title: '● 主持破白榜',
              descText: [
                {
                  textP:
                    '1. 根据活动期间主播房内破白人数总和进行排名，1人=1破白数'
                },
                { textP: '2. 榜单奖励：以活动期间，根据破白名进行奖励发放' },
                { textP: '第1名：8天【童真金话筒】称号和1个【杏雨梨云】礼物' },
                { textP: '第2-3名：5天【童真银话筒】称号和1个【求撩猫】礼物' },
                {
                  textP: '第4-5名：3天【童真花话筒】称号和、1个【爱心熊掌】礼物'
                },
                { textP: '第6-10名：3天【童真花话筒】称号' },
                { textP: '请得奖人注意查看系统消息' }
              ]
            }
          ]
        }
      ]
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

  mounted() {},
  methods: {
    _doBack() {
      Native.NativeNavigateBack()
    }
  }
}
</script>
