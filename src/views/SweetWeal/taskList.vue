<style lang="less" scoped>
.taskList_container {
  .content {
    width: calc(100% - 60px);
    height: auto;
    padding-bottom: 10px;
    margin: 0 auto;
    border: 1px solid transparent;
    .selfInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      margin-bottom: 30px;
      .LeftBox {
        width: 200px;
        height: 64px;
        font-size: 26px;
        font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
        font-weight: normal;
        color: #cf285e;
        line-height: 32px;
        text-align: center;
      }
      .rightBox {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
        font-weight: normal;
        color: #cf285e;
        .icon_task {
          width: 68px;
          height: 72px;
          margin: 0 20px;
        }
      }
    }

    .listContent {
      width: 100%;
      min-height: 202px;
      margin: 20px auto 0;
      border-bottom: 1px solid #fc8ca9;
      &:last-child {
        border-bottom: 0;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      .rewardGift {
        width: 120px;
        .giftBox {
          margin: 0 auto;
          width: 130px;
          height: 130px;
          position: relative;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120px;
            height: 120px;
          }
        }

        .rewardNum {
          width: 116px;
          height: 36px;
          background: url('../../assets/image/icon_xunz.png') 0 0 no-repeat;
          background-size: 100% 100%;
          border-radius: 18px;
          border: 2px solid #efaae0;
          font-size: 22px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          line-height: 36px;
          margin: 8px auto 20px;
        }
      }
      .nameInfo {
        width: calc(100% - 280px);
        text-indent: 20px;
        font-size: 26px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #cf285e;
      }
      .btnInfo {
        width: 160px;
        .btnText {
          width: 160px;
          height: 56px;
          font-size: 26px;
          font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
          font-weight: normal;
          color: #f3adba;
          line-height: 56px;
          text-align: center;
          background: url('../../assets/image/exchange_btn_2.png') 0 0 no-repeat;
          background-size: 100% 100%;
        }
        .toFinishBtn {
          /*background: url("../../assets/image/exchange_btn_2.png") 0 0 no-repeat;*/
          /*background-size: 100% 100%;*/
          background: url('../../assets/image/icon_xunz.png') 0 0 no-repeat;
          background-size: 100% 100%;
          border-radius: 18px;
          color: #ffffff;
        }
        .hasDoneBtn {
          /*background: url("../../assets/image/exchange_btn_2.png") 0 0 no-repeat;*/
          /*background-size: 100% 100%;*/
        }
        .canGetBtn {
          color: #ffffff;
          background: url('../../assets/image/exchange_btn_1.png') 0 0 no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>

<template>
  <div class="taskList_container module_container">
    <div class="module_title">勋章用于兑换奖励</div>
    <div class="content" v-if="listData">
      <div class="selfInfo">
        <div class="LeftBox">
          每日任务<br />
          (每日0点刷新)
        </div>
        <div class="rightBox">
          我的勋章:
          <img
            src="../../assets/image/icon_task.png"
            class="icon_task"
            alt=""
          />
          X{{ (listData && listData.current_num) || 0 }}
        </div>
      </div>
      <div
        class="listContent"
        v-for="(item, index) in listData.mission_list"
        :key="'key_' + index"
      >
        <div class="rewardGift">
          <div class="giftBox">
            <img src="../../assets/image/icon_task.png" alt="" />
          </div>
          <div class="rewardNum">勋章x{{ item.reward_list[0].num }}</div>
        </div>
        <div class="nameInfo">{{ item.name }}</div>
        <div class="btnInfo">
          <div class="hasDoneBtn btnText" v-if="listData.is_exchange_time">
            已结束
          </div>
          <div v-else>
            <div class="hasDoneBtn btnText" v-if="item.state === 1">已完成</div>
            <div v-else>
              <div
                class="canGetBtn btnText"
                v-if="item.progress >= item.condition"
                @click="_doGetReward(item.id, index)"
              >
                领取
              </div>
              <div
                class="toFinishBtn btnText"
                v-else
                @click="_toAppPage(index)"
              >
                去完成
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Native from '../../services/native'
import { mapGetters } from 'vuex'
import System from '@/system'

export default {
  data() {
    return {}
  },
  filters: {},
  components: {},
  computed: {
    ...mapGetters({
      listData: 'listData'
    })
  },

  mounted() {},
  methods: {
    _toAppPage(index) {
      System.ta('murderer_h5_task_page1', 'goToFinish' + (index + 1))
      this.$store.dispatch('listAction')
      if (index === 1) {
        // 跳转广场-话题页面
        return Native.schema(
          encodeURIComponent('who://www/browser?page=circle&tab=square')
        )
      }
      if (index < 4) {
        return Native.schema(
          encodeURIComponent(
            'who://www/browser?page=home&tab=room&filter=games_rcmd&header=room_games_rcmd'
          )
        )
      }
      if (index === 4) {
        // 跳转广场-话题页面
        return Native.schema(
          encodeURIComponent('who://www/browser?page=circle&tab=square')
        )
      }
    },
    toShowBigPicture(url, name, flag) {
      this.$store.dispatch('isShowBigPicture', {
        status: true,
        data: {
          url: url,
          name: name,
          flag: true,
          isGif: flag
        }
      })
    },
    _doGetReward(id, index) {
      System.ta('murderer_h5_task_page1', 'receive' + (index + 1))
      this.$store
        .dispatch('rewardAction', { mid: id })
        .then((res) => {
          if (res && res.success) {
            this.$store.dispatch('listAction')
            this.$store.dispatch('errorMessage', {
              msg: '领取成功~',
              status: true
            })
          } else {
            return this.$store.dispatch('errorMessage', {
              msg: (res && res.msg) || '服务异常，请稍后重试~',
              status: true
            })
          }
        })
        .catch((err) => {
          return this.$store.dispatch('errorMessage', {
            msg: (err && err.msg) || '服务异常，请稍后重试~',
            status: true
          })
        })
    }
  }
}
</script>
