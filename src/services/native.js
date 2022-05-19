function objToParam(obj) {
  let arr = []
  for (let key in obj) {
    arr.push(key + '=' + obj[key])
  }
  return arr.join('&')
}

function callAppMethod(funcType, data, callback) {
  if (typeof data === 'function') {
    callback = data
    data = null
  }
  console.log('callAppMethod', funcType, data, callback)
  let paramData = {}
  if (data) {
    paramData.param = JSON.stringify(data)
  }
  if (callback) {
    let cbFunName =
      'nativeCB' + new Date().getTime() + parseInt(Math.random() * 100)
    window[cbFunName] = function (jsonData) {
      callback(jsonData)
      console.log('Native Call JS', JSON.stringify(jsonData))
      delete window[cbFunName]
    }
    paramData.cb = cbFunName
  }
  if (
    !window.NativeProxy ||
    typeof window.NativeProxy.postMessage !== 'function'
  ) {
    return console.warn(`不支持调用Native方法: ${funcType}`)
  }

  window.NativeProxy.postMessage(
    `banban://${funcType}${paramData ? '?' + objToParam(paramData) : ''}`
  )
}

function listenAppMethod(funcType, data, callback) {
  if (typeof data === 'function') {
    callback = data
    data = null
  }
  window[funcType] = function (jsonData) {
    callback(jsonData)
  }
}

const nativeMethodLists = {
  NativeGetUserInfo: function (cb) {
    //获取用户信息
    return callAppMethod('getUserInfo', cb)
  },
  // 跳转客户端登录
  NativeLogin: function () {
    return callAppMethod('login')
  },
  // 进入指定房间
  NativeOpenRoom: function (rid) {
    return callAppMethod('openRoom', { rid })
  },
  // 进入指定大神的订单邀约界面
  NativeOpenOrderScreen: function (toUid) {
    return callAppMethod('openOrderScreen', { uid: toUid })
  },
  // 设置页面标题
  NativeSetTitle: function (title) {
    return callAppMethod('setTitle', { title })
  },
  // 签到/补签
  NativeCheckin: function (params, cb) {
    return callAppMethod('checkin', params, cb)
  },
  // 领取奖励
  NativeGetAward: function (params, cb) {
    return callAppMethod('getAward', params, cb)
  },
  // 客户端重新回到H5
  NativeReturnToWeb: function (cb) {
    return listenAppMethod('onReturnToWeb', cb)
  },
  // 分享图片
  NativeShareByImage: function (type, tp, imgUrl) {
    return callAppMethod('shareDirect', { type, tp, imgUrl })
  },
  // 分享到微信
  NativeShareWechat: function (tp) {
    return callAppMethod('shareDirect', { type: 'wechat', tp })
  },
  // 分享到朋友圈
  NativeShareWechatMoment: function (tp) {
    return callAppMethod('shareDirect', { type: 'moment', tp })
  },
  // 分享到QQ
  NativeShareQQ: function (tp) {
    return callAppMethod('shareDirect', { type: 'qq', tp })
  },
  // 分享到QQ空间
  NativeShareQZone: function (tp) {
    return callAppMethod('shareDirect', { type: 'qzone', tp })
  },
  // 跳转到我的字符页
  NativeShowVipMall: function () {
    return callAppMethod('showVipMall')
  },
  // 跳转到我的字符页榜单
  NativeShowRank: function (param) {
    return callAppMethod('showRank', param)
  },
  // 跳转到web页
  NativeShowScreen: function (path) {
    return callAppMethod('showCommonWebScreen', {
      url: encodeURIComponent(
        window.location.origin + window.location.pathname + '#' + path
      )
    })
  },
  // 跳转到个人主页
  NativeShowImageScreen: function (uid) {
    uid = +uid
    return callAppMethod('showImageScreen', { uid })
  },
  // 进入附近
  NativeShowNearby: function () {
    return callAppMethod('showNearby')
  },
  // 进入粉丝列表
  NativeShowFansList: function () {
    return callAppMethod('showFansList')
  },
  // 进入首页
  NativeShowHomePage: function () {
    return callAppMethod('showHomePage')
  },
  // 进入发现-娱乐房列表
  NativeShowJoyRoom: function () {
    return callAppMethod('showJoyRoom')
  },
  // 进入余额充值
  NativeShowChargeBalance: function () {
    return callAppMethod('showChargeBalance')
  },
  // 进入身份验证
  NativeShowChargeOrBindPhoneNumber: function () {
    return callAppMethod('showChargeOrBindPhoneNumber')
  },
  // 进入选择你要创建的类型页面
  NativeShowCreateRoom: function () {
    return callAppMethod('showCreateRoom')
  },
  // 随机进入画猜、卧底、狼人杀房间
  NativeShowSocialGame: function () {
    return callAppMethod('showSocialGame')
  },
  // 随机进入画猜、卧底、狼人杀、娱乐房
  NativeShowSocialGameAndJoyRoom: function () {
    return callAppMethod('showSocialGameAndJoyRoom')
  },
  // 进入朋友圈
  NativeShowMoment: function () {
    return callAppMethod('showMoment')
  },
  // 进入与指定好友聊天界面
  NativeShowPrivateChat: function (params) {
    return callAppMethod('showPrivateChat', params)
  },
  // 身份验证剧本杀
  NativeIdAuth: function () {
    return callAppMethod('idAuth')
  },
  // 剧本杀首页
  NativeJuben: function () {
    return callAppMethod('juben')
  },
  // 小游戏 游戏id
  NativeLittleGame: function (params) {
    return callAppMethod('littleGame', params)
  },
  // 消息Tab关注列表
  NativeShowFollowList: function () {
    return callAppMethod('showFollowList')
  },
  // 发现页
  NativeShowDiscoveryPage: function () {
    return callAppMethod('showDiscoveryPage')
  },
  // 剧本库列表
  NativeJubenList: function () {
    return callAppMethod('jubenList')
  },
  getHeader(data) {
    return {
      'Content-Type': 'application/x-www-form-urlencoded',
      'user-token': encodeURIComponent(data.token)
    }
  },

  // 绑定手机
  showBindPhone: function (cb) {
    return callAppMethod('showBindPhone', cb)
  },
  // 绑定微信
  showThirdPlatformBind: function (data, cb) {
    return callAppMethod('showThirdPlatformBind', data, cb)
  },
  // 保存图片
  saveImage: function (data, cb) {
    return callAppMethod('saveImage', data, cb)
  },
  // 支付
  buyGiftPicks: function (cb) {
    return callAppMethod('buyGiftPicks', cb)
  },

  // 礼物佩戴
  openMyBag: function (data, cb) {
    return callAppMethod('openMyBag', data, cb)
  },

  // 返回
  NativeNavigateBack: function () {
    return callAppMethod('navigateBack')
  },

  // 打开指定页面
  schema: function (data) {
    return callAppMethod('schema', { schema_url: data })
  }
}

const nativeMethodMaps = {
  showNearby: nativeMethodLists.NativeShowNearby,
  showFansList: nativeMethodLists.NativeShowFansList,
  showHomePage: nativeMethodLists.NativeShowHomePage,
  showJoyRoom: nativeMethodLists.NativeShowJoyRoom,
  showChargeBalance: nativeMethodLists.NativeShowChargeBalance,
  showOVCharge: nativeMethodLists.NativeShowOVCharge,
  showBindPhoneNumber: nativeMethodLists.NativeShowBindPhoneNumber,
  showChargeOrBindPhoneNumber:
    nativeMethodLists.NativeShowChargeOrBindPhoneNumber,
  showCreateRoom: nativeMethodLists.NativeShowCreateRoom,
  showSocialGame: nativeMethodLists.NativeShowSocialGame,
  showSocialGameAndJoyRoom: nativeMethodLists.NativeShowSocialGameAndJoyRoom,
  showMoment: nativeMethodLists.NativeShowMoment,
  showPrivateChat: nativeMethodLists.NativeShowPrivateChat,
  showImageScreen: nativeMethodLists.NativeShowImageScreen,
  jubenList: nativeMethodLists.NativeJubenList,
  showDiscoveryPage: nativeMethodLists.NativeShowDiscoveryPage,
  showFollowList: nativeMethodLists.NativeShowFollowList,
  idAuth: nativeMethodLists.NativeIdAuth,
  juben: nativeMethodLists.NativeJuben,
  littleGame: nativeMethodLists.NativeLittleGame,
  showThirdPlatformBind: nativeMethodLists.showThirdPlatformBind,
  showBindPhone: nativeMethodLists.showBindPhone,
  saveImage: nativeMethodLists.saveImage,
  NativeShareWechat: nativeMethodLists.NativeShareWechat, // 分享到微信
  NativeShareWechatMoment: nativeMethodLists.NativeShareWechatMoment, // 分享到微信朋友圈
  NativeShareQQ: nativeMethodLists.NativeShareQQ, // 分享到QQ
  NativeShareQZone: nativeMethodLists.NativeShareQZone // 分享到QQ空间
}

export const getNativeMethodMaps = function (name, params) {
  if (!nativeMethodMaps[name]) {
    console.log('未找到native方法: ', name)
  } else {
    nativeMethodMaps[name](params)
  }
}

export default nativeMethodLists
