<style lang="less" scoped>
.pop_container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 990;
  .popContent {
    width: 630px;
    min-height: 828px;
    height: auto;
    padding-bottom: 40px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #d0fde1 linear-gradient(180deg, #fdf8d8 0%, #d2fbe2 100%);
    border-radius: 12px;
    border: 2px solid;
    border-image: linear-gradient(
        180deg,
        rgba(143, 255, 165, 1),
        rgba(85, 195, 145, 1)
      )
      2 2;
    .title {
      font-size: 36px;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
      height: 94px;
      line-height: 94px;
      background: url('../assets/images/title_com_bg.png') 0 0 no-repeat;
      background-size: 100% 100%;
      margin-top: -16px;
      text-align: center;
    }

    .rewardContent {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin: 40px 0 20px;
      height: 700px;
      overflow-y: auto;
      .recordContent {
        width: 550px;
        height: 100%;
        margin: 0 auto;
        .recordListLi {
          margin-bottom: 30px;
          .time {
            height: 34px;
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #008842;
            line-height: 34px;
          }
          .content {
            font-size: 28px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #00734e;
            line-height: 40px;
          }
        }
      }

      .rewardLiBox {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }

      .rewardLi {
        margin-bottom: 40px;
      }
    }
    .bottomBtn {
      border-radius: 16px;
      font-size: 40px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #c50000;
      line-height: 86px;
      text-align: center;
      margin: 40px auto 0;

      width: 468px;
      height: 86px;
      background: url('../assets/images/btn_bg_yellow.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }

    .closeBtn {
      width: 48px;
      height: 48px;
      position: absolute;
      top: -80px;
      right: 0;
      background: url('../assets/images/icon_close.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }
    .noData {
      text-align: center;
      width: 100%;
      font-size: 32px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #008842;
      line-height: 600px;
    }
  }
}
</style>

<template>
  <div class="pop_container">
    <div class="popContent">
      <div class="title">
        {{ type === 'record' ? '我的宝箱记录' : '我的春日宝箱战绩' }}
      </div>
      <div class="rewardContent scrollContent" v-if="type === 'record'">
        <div
          class="recordContent"
          v-if="recordListData && recordListData.length"
        >
          <div
            class="recordListLi"
            v-for="(item, index) in recordListData"
            :key="'key_' + index"
          >
            <div class="time">{{ timeConversion(item.time * 1000) }}</div>
            <div class="content">{{ item.content }}</div>
          </div>
        </div>
        <div class="noData" v-else>暂无数据~</div>
      </div>

      <div class="rewardContent scrollContent" v-if="type === 'result'">
        <div v-if="rewardData && rewardData.length" class="rewardLiBox">
          <div
            class="rewardLi rewardLi3"
            v-for="(item, index) in rewardData"
            :key="'key_' + index"
          >
            <RewardItem :itemData="item" />
          </div>
        </div>
        <div class="noData" v-else>暂无数据~</div>
      </div>
      <div
        class="bottomBtn"
        v-if="type === 'record'"
        @click="showResult('result')"
      >
        宝箱战绩
      </div>
      <div
        class="bottomBtn"
        v-if="type === 'result'"
        @click="showResult('record')"
      >
        宝箱记录
      </div>
      <div class="closeBtn" @click="_close"></div>
    </div>
  </div>
</template>
<script>
import Native from '../services/native'
import { setTime } from '../services/transformTime'
import RewardItem from './common/rewardItem'
import System from '@/system'
export default {
  data() {
    return {
      rewardData: [],
      type: 'record', // 记录    result 战绩
      recordListData: [
        // {
        //   time: '1650536463',
        //   content: '抽中了XXXX道具XX个,XXX道具XX'
        // }
      ]
    }
  },
  filters: {},
  components: { RewardItem },
  computed: {},

  mounted() {
    this._getRecordList()
  },
  methods: {
    showResult(type) {
      this.type = type
      System.ta('murderer_h5_page1', 'result')
      Native.schema(encodeURIComponent(`who://www/browser?page=bag&type=gift`))
      // if (type === 'result') this._getResultList();
      // if (type === 'record') this._getRecordList();
    },
    timeConversion(time) {
      return setTime(time, 'yyyy-MM-dd hh:mm:ss')
    },
    _close() {
      this.$parent._isShowRecord(false)
    },
    _getRecordList() {
      this.$store
        .dispatch('lotteryRecordAction', { type: 1 })
        .then((res) => {
          if (res && res.success) {
            this.recordListData = res.records
          } else {
            return this.$store.dispatch('errorMessage', {
              msg:
                (res && res.msg) ||
                (res && res.message) ||
                '服务异常，请稍后重试~',
              status: true
            })
          }
        })
        .catch((err) => {
          return this.$store.dispatch('errorMessage', {
            msg:
              (err && err.msg) ||
              (err && err.message) ||
              '服务异常，请稍后重试~',
            status: true
          })
        })
    },
    _getResultList() {
      this.$store
        .dispatch('lotterySummaryAction')
        .then((res) => {
          if (res && res.success) {
            this.rewardData = res.data.list
          } else {
            return this.$store.dispatch('errorMessage', {
              msg:
                (res && res.msg) ||
                (res && res.message) ||
                '服务异常，请稍后重试~',
              status: true
            })
          }
        })
        .catch((err) => {
          return this.$store.dispatch('errorMessage', {
            msg:
              (err && err.msg) ||
              (err && err.message) ||
              '服务异常，请稍后重试~',
            status: true
          })
        })
    }
  }
}
</script>
