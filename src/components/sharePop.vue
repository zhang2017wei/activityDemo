<style lang="less" scoped>
.popWindowContainer {
  .coverContent {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 23;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .popContent {
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 24;
    bottom: 0;
    left: 0;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    background-color: #f3f6f6;
    border-radius: 0.3rem 0.3rem 0 0;
    .title {
      color: #202020;
      text-align: center;
      font-size: 0.28rem;
      height: 0.8rem;
      line-height: 0.8rem;
    }
    .listContent {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 0.3rem;
      margin-bottom: 0.5rem;
      .listItem {
        text-align: center;
        .icon {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
        }
      }
    }
    .cancelBox {
      width: 100%;
      height: 1.1rem;
      background-color: #ffffff;
      font-size: 0.3rem;
      font-weight: 700;
      color: #202020;
      text-align: center;
      line-height: 1.1rem;
    }
  }
  .moveLeft {
    animation-name: moveLeftShare;
  }
  .moveRight {
    animation-name: moveRightShare;
    bottom: -100%;
  }
}
</style>
<style>
@keyframes moveLeftShare {
  0% {
    bottom: -100%;
  }
  100% {
    bottom: 0;
  }
}
@keyframes moveRightShare {
  0% {
    bottom: 0;
  }
  100% {
    bottom: -100%;
  }
}
</style>
<template>
  <div class="popWindowContainer">
    <div class="coverContent" @click="onCloseModuleFun()"></div>
    <div class="popContent" :class="[isShow ? 'moveLeft' : 'moveRight']">
      <div class="title">分享</div>
      <div class="listContent">
        <div
          class="listItem"
          v-for="(item, index) in listData"
          :key="'key_' + index"
          @click="doShare(item)"
        >
          <img :src="item.icon" alt="" class="icon" />
          <div class="shareName">{{ item.name }}</div>
        </div>
      </div>
      <div class="cancelBox" @click="onCloseModuleFun()">取消分享</div>
    </div>
  </div>
</template>
<script>
const icWeapp =
  'https://xs-image.yinjietd.com/static/mini/activity/murderer/murdererIQiYi/image/share/ic-share-weapp.png'
const icMoment =
  'https://xs-image.yinjietd.com/static/mini/activity/murderer/murdererIQiYi/image/share/ic-share-moment.png'
const icQQ =
  'https://xs-image.yinjietd.com/static/mini/activity/murderer/murdererIQiYi/image/share/ic-share-qq.png'
const icQzone =
  'https://xs-image.yinjietd.com/static/mini/activity/murderer/murdererIQiYi/image/share/ic-share-qzone.png'
import Native from '../services/native'
import { mapState } from 'vuex'
import System from '@/system'
export default {
  data() {
    return {
      isShow: true,
      listData: [
        { name: '微信好友', icon: icWeapp, type: 'weapp', tp: 205 },
        { name: '朋友圈', icon: icMoment, type: 'moment', tp: 205 },
        { name: 'QQ', icon: icQQ, type: 'qq', tp: 205 },
        { name: 'QQ空间', icon: icQzone, type: 'qzone', tp: 205 }
      ]
    }
  },
  filters: {},
  components: {},
  computed: {
    ...mapState({
      userBaseInfo: (state) => state.userBaseInfo
    })
  },

  mounted() {},
  methods: {
    onCloseModuleFun() {
      this.isShow = false
      let timer = setTimeout(() => {
        this.$store.dispatch('showSharePopAction', false)
        clearTimeout(timer)
      }, 300)
    },
    doShare(data) {
      if (!data) return
      System.ta('murderer_h5_shareClick', data.type)
      const _tp = this.userBaseInfo.share_tp
      switch (data.type) {
        case 'weapp':
          Native.NativeShareWechat(_tp)
          break
        case 'moment':
          Native.NativeShareWechatMoment(_tp)
          break
        case 'qq':
          Native.NativeShareQQ(_tp)
          break
        case 'qzone':
          Native.NativeShareQZone(_tp)
          break
        default:
      }
    }
  }
}
</script>
