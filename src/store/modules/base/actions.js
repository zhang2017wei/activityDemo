import * as types from '../../mutation-types'
import { getUrl } from '../../../config/urlConfig'
import { getRequest, postRequest } from '../../../services/request'
export default {
  // 完成分享
  async shareDoneFun({ commit, state, rootState }, data) {
    // commit('IS_SHOW_LOADING',true);
    // const url = getUrl('base','shareDone');
    // try {
    //   const result = await postRequest(url, data);
    //   commit('IS_SHOW_LOADING', false);
    //   return result
    // }catch (e) {
    //   commit('IS_SHOW_LOADING', false);
    //   return null
    // }
  },

  // 活动配置信息
  async configAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'configUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async getDanMuAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'getDanMuUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async exchangeAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'exchangeUrl')
    try {
      const result = await postRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async listAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'listUrl')
    try {
      const result = await getRequest(url, data)
      if (
        result &&
        result.data &&
        result.data.exchange_list &&
        result.data.exchange_list.length
      ) {
        commit('SET_LIST_DATA', result.data)
      }
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async rewardAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'rewardUrl')
    try {
      const result = await postRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async cpTotalRankAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'cpTotalRankUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async giftLotteryAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'giftLotteryUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async mergeGiftAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'mergeGiftUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async rankListAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'rankListUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async giftRingAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'giftRingUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async lotteryRecordAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'lotteryRecordUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async lotterySummaryAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'lotterySummaryUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async consumeRankAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'consumerankUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async liveRankAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'liveRankUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async liveListAction({ commit, state, rootState }, data) {
    commit('IS_SHOW_LOADING', true)
    const url = getUrl('base', 'liveListUrl')
    try {
      const result = await getRequest(url, data)
      commit('IS_SHOW_LOADING', false)
      return result
    } catch (e) {
      commit('IS_SHOW_LOADING', false)
      return null
    }
  },

  async showSharePopAction({ commit, state, rootState }, data) {
    commit('SET_IS_SHOW_SHARE_POP', data)
  },

  async setDownLoadUrl({ commit, state, rootState }, data) {
    commit('SET_DOWNLOAD_URL', data)
  },
  async isShowBigPicture({ commit, state, rootState }, data) {
    commit('SET_IS_SHOW_BIG_PICTURE', data)
  },
  async bannerActiveIndex({ commit, state, rootState }, data) {
    commit('SET_BANNER_ACTIVE_INDEX', data)
  },
  async isShowProbabilityPop({ commit, state, rootState }, data) {
    commit('SET_PROBABILITY_POP', data)
  }
}
