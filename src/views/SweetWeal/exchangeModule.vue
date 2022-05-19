<style lang="less" scoped>
.exchange_container {
  .content {
    width: calc(100% - 60px);
    height: auto;
    padding-bottom: 10px;
    margin: 0 auto;
    border: 1px solid transparent;

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
            background: url('../../assets/image/icon_label_bg.png') 0 0
              no-repeat;
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
          font-size: 20px;
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
      .btnInfo {
        .textInfo {
          height: 32px;
          font-size: 24px;
          font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
          font-weight: normal;
          color: #cf285e;
          line-height: 32px;
          min-width: 160px;
          text-align: center;
          margin-bottom: 16px;
        }
        .exchangeBtn {
          background: url('../../assets/image/exchange_btn_1.png') 0 0 no-repeat;
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
        .exchangeBtn2 {
          background: url('../../assets/image/exchange_btn_2.png') 0 0 no-repeat;
          background-size: 100% 100%;
          color: #f3adba;
        }
      }
    }
  }
}
</style>

<template>
  <div class="exchange_container module_container">
    <div class="module_title">兑换奖池</div>
    <div class="content" v-if="listData">
      <div
        class="listContent"
        v-for="(item, index) in listData.exchange_list"
        :key="'key_' + index"
      >
        <div
          class="rewardGift"
          @click="
            toShowBigPicture(
              item.rewardList[0].image,
              item.rewardList[0].name,
              false
            )
          "
        >
          <div class="giftBox">
            <img :src="item.rewardList[0].image" class="img" alt="" />
            <div class="label" v-if="item.rewardList[0].period">
              {{ item.rewardList[0].period }}天
            </div>
          </div>
          <div class="giftName loneText">{{ item.rewardList[0].name }}</div>
        </div>
        <div class="btnInfo">
          <div class="textInfo">{{ item.progress }}/{{ item.condition }}</div>
          <div
            class="exchangeBtn"
            v-if="item.progress >= item.condition"
            @click="
              _doExchangeFun(
                item.eid,
                item.rewardList[0].image,
                item.rewardList[0].name,
                index
              )
            "
          >
            兑换
          </div>
          <div class="exchangeBtn exchangeBtn2" v-else>兑换</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import System from '@/system'
import { mapGetters } from 'vuex'

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
    _doExchangeFun(id, url, name, index) {
      System.ta('murderer_h5_reward_page1', 'exchange' + (index + 1))
      this.$store
        .dispatch('exchangeAction', { eid: id })
        .then((res) => {
          if (res && res.success) {
            this.$store.dispatch('listAction')
            // this.$store.dispatch('errorMessage', {msg: '兑换成功~', status: true});
            this.toShowBigPicture(url, '兑换成功', false)
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
