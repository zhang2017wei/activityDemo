<style lang="less" scoped>
.kingDiscount_container {
  .content {
    width: calc(100% - 60px);
    height: auto;
    margin: 0 auto;
    border: 1px solid transparent;
    .listContent {
      width: 100%;
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
            width: 70px;
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
          border-radius: 40px;
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
      .descTextBox {
        width: calc(100% - 160px - 200px - 20px);
        font-size: 26px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #cf285e;
        line-height: 32px;
      }
      .btnInfo {
        text-align: center;
        .oldPrice {
          font-size: 24px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: #cf285e;
          line-height: 30px;
          text-decoration: line-through;
        }
        .nowPrice {
          font-size: 24px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: #cf285e;
          line-height: 30px;
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
.kingDiscount2 {
  margin-top: 30px;
}
</style>

<template>
  <div>
    <div class="kingDiscount_container module_container">
      <div class="module_title">结婚戒指</div>
      <div class="content">
        <div
          class="listContent"
          v-for="(item, index) in data1"
          :key="'key_' + index"
        >
          <div class="rewardGift">
            <div class="giftBox">
              <img :src="item.icon" class="img" alt="" />
              <div class="label" v-if="item.period">{{ item.period }}</div>
            </div>
            <div class="giftName loneText">{{ item.name }}</div>
          </div>
          <div class="descTextBox">{{ item.desc }}</div>
          <div class="btnInfo">
            <div class="oldPrice">原价: {{ item.oldPrice }}</div>
            <div class="nowPrice">现价: {{ item.nowPrice }}</div>
            <div class="exchangeBtn" @click="_toBuyFun(index)">去购买</div>
          </div>
        </div>
      </div>
    </div>
    <div class="kingDiscount_container module_container kingDiscount2">
      <div class="module_title">单身戒指</div>
      <div class="content">
        <div
          class="listContent"
          v-for="(item, index) in data2"
          :key="'key_' + index"
        >
          <div class="rewardGift">
            <div class="giftBox">
              <img :src="item.icon" class="img" alt="" />
              <div class="label" v-if="item.period">{{ item.period }}</div>
            </div>
            <div class="giftName loneText">{{ item.name }}</div>
          </div>
          <div class="descTextBox">{{ item.desc }}</div>
          <div class="btnInfo">
            <div class="oldPrice">原价: {{ item.oldPrice }}</div>
            <div class="nowPrice">现价: {{ item.nowPrice }}</div>
            <div class="exchangeBtn" @click="_toBuyFun(index + 2)">去购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Native from '../../services/native'
import System from '@/system'
import tab1_gift5 from '../../assets/image/tab1_gift5.png'
import tab1_gift6 from '../../assets/image/tab1_gift6.png'
import tab1_gift7 from '../../assets/image/tab1_gift7.png'
import tab1_gift8 from '../../assets/image/tab1_gift8.png'
export default {
  data() {
    return {
      data1: [
        {
          icon: tab1_gift5,
          period: '5.2折',
          name: '鲜花戒指',
          desc: '你是开在我心头的一朵鲜花',
          oldPrice: '2100钻',
          nowPrice: '1092钻'
        },
        {
          icon: tab1_gift6,
          period: '5.2折',
          name: '典藏鲜花戒指',
          desc: '鲜花戒指，送给鲜花一样美好的ta',
          oldPrice: '52000钻',
          nowPrice: '27040钻'
        }
      ],
      data2: [
        {
          icon: tab1_gift7,
          period: '5.2折',
          name: '典藏solo尾戒',
          desc: '戒指如生活，平实而精致，简约不简单',
          oldPrice: '11100钻',
          nowPrice: '5772钻'
        },
        {
          icon: tab1_gift8,
          period: '5.2折',
          name: '典藏自己的糖尾戒',
          desc: '给自己发糖，创造生活的小幸福',
          oldPrice: '111100钻',
          nowPrice: '57772钻'
        }
      ]
    }
  },
  filters: {},
  components: {},
  computed: {
    ...mapGetters({
      // listData: 'listData'
    })
  },

  mounted() {},
  methods: {
    _toBuyFun(index) {
      System.ta('murderer_h5_page1', 'buy' + (index + 1))
      // 跳转商城
      return Native.schema(encodeURIComponent('who://www/browser?page=mall'))
    }
  }
}
</script>
