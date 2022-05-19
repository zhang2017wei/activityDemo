import Native from './services/native'
import device from './services/deviceinfo'
import './services/report'
import store from './store/index'
import axios from 'axios'
import { getQuery } from './services/commonFunction'

const theme = {
  name: '谁是凶手',
  appId: 'bafd52e6df194c45968d9a6452ce80ae',
  iosApp: 'who://com.who.android/message' + window.location.search,
  androidApp: 'who://com.rewan.who.ios/message' + window.location.search,
  iosDownloadUrl:
    'https://apps.apple.com/cn/app/%E8%B0%81%E6%98%AF%E5%87%B6%E6%89%8B-%E6%B5%B7%E9%87%8F%E4%BC%98%E8%B4%A8%E5%89%A7%E6%9C%AC%E6%9D%80%E5%89%A7%E6%9C%AC-%E7%9C%9F%E5%AE%9E%E6%A1%88%E4%BB%B6%E6%8E%A8%E7%90%86/id1483169890',
  androidDownloadUrl:
    'https://ee-download.oss-cn-hangzhou.aliyuncs.com/appd/rpg-gw-release.apk'
}

// https://a.app.qq.com/o/simple.jsp?pkgname=com.who.android
// 判断是否在app环境中打开
export let isInApp = Boolean(window.NativeProxy)
if (window.location.href.indexOf('808') > -1) isInApp = true

export default class System {
  static async init() {
    localStorage.setItem('initProgress', 'begin')
    let _appDownloadUrl =
      { ios: theme.iosDownloadUrl, android: theme.androidDownloadUrl }[
        device.system
      ] || theme.androidDownloadUrl
    let isInWeChat = await System.isInWeChat()
    store.dispatch('setDownLoadUrl', {
      url: _appDownloadUrl,
      type: isInApp,
      isInWeChat: isInWeChat
    })
    if (isInApp) {
      Native.NativeGetUserInfo(async (data) => {
        localStorage.setItem('uid', data.uid)
        localStorage.setItem('user-token', data.token)
        localStorage.setItem('pkg', data.package)
        localStorage.setItem('reportInfo', data.reportInfo)
        localStorage.setItem('version_code', data.version_code)
        localStorage.setItem(
          'userIcon',
          data.icon.indexOf('http') > -1
            ? data.icon
            : 'https://xs-image.yinjietd.com/' + data.icon
        )
        console.log('NativeGetUserInfo.......', data)
        localStorage.setItem('initProgress', 'finish')
      })
    }
    if (
      window.location.href.indexOf('localhost') > -1 ||
      window.location.href.indexOf('20.189') > -1
    ) {
      // 本地开发环境 127565583  128439980
      let res = await axios.request(
        'http://192.168.11.46/test/userToken?uid=128439980'
      )
      let _token = res.data.data
      localStorage.setItem('user-token', _token)
      localStorage.setItem('initProgress', 'finish')
    }
  }

  static async ta(data, type) {
    if (!window.ta || !window.ta.track) return
    let _data = {
      murderer_h5_name: 'who-sweet520'
    }
    if (type) _data.click_button = type
    window.ta.track(data, _data)
  }

  static isInWeChat() {
    var ua = navigator.userAgent.toLowerCase()
    if (
      ua.match(/MicroMessenger/i) == 'micromessenger' ||
      ua.match(/QQ/i) == 'qq'
    ) {
      return true
    } else {
      return false
    }
  }

  static async g() {
    const _ch = getQuery('ch') || 'xiaoyuanliebian' // 渠道号
    var mac = getCookie('_bm')
    console.log('mac', mac)
    if (!mac) {
      mac = guid()
      setCookie('_bm', mac)
    }
    var ldy = setClipboardText(mac)
    const tag = 'xiaoyuanliebian'
    axios.request(`https://help.yinjietd.com/g?ch=${_ch}&ldy=${ldy}&tag=${tag}`)
  }
}

export const S4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}

export const guid = () => {
  return (
    'web' +
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4()
  )
}

export const setClipboardText = (value) => {
  const text = document.createElement('textarea')
  var encryption = encodeURIComponent(window.btoa(value)),
    c
  c = text.value = 'ldy_' + encryption
  document.body.appendChild(text)
  text.select()
  document.execCommand('Copy')
  text.remove()
  return c
}

export const getCookie = (name) => {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr === document.cookie.match(reg)) {
    return unescape(arr[2])
  } else {
    return null
  }
}

export const setCookie = (name, value) => {
  var Days = 365
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}
