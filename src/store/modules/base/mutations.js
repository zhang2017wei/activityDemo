export default {
  SET_IS_SHOW_SHARE_POP(state, data) {
    state.isShowSharePop = data
  },

  SET_DOWNLOAD_URL(state, data) {
    state.downLoadUrl = data.url
    state.isOpenInApp = data.type
    state.isInWeChat = data.isInWeChat
  },
  SET_IS_SHOW_BIG_PICTURE(state, data) {
    state.isShowBigPicture = data
  },
  SET_LIST_DATA(state, data) {
    state.listData = data
  },
  SET_BANNER_ACTIVE_INDEX(state, data) {
    state.bannerActiveIndex = data
  },
  SET_PROBABILITY_POP(state, data) {
    state.isShowProbabilityPop = data
  }
}
