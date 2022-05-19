import Native from '../services/native'

let cache = []
// thinkingdata日志上报
window.ta = {
  async track(...params) {
    cache.push(params)

    // let { appName, server_env, thinkingdata, pkg, mac, uid } = System;
    let reportInfo = ''
    let pkg = 'h5_who'
    let uid = ''
    await Native.NativeGetUserInfo(async (data) => {
      reportInfo = data.reportInfo
      pkg = data.package
      uid = data.uid
    })
    // if (!thinkingdata) throw new Error(`当前环境[${appName},${server_env}] thinkingdata 未配置`);

    let script = window.document.createElement('script')
    window.document.body.appendChild(script)
    // script.src = `${process.env.PUBLIC_URL}/thinkingdata.umd.min.js`;
    script.src = `./thinkingdata.umd.min.js`
    script.onload = () => {
      // 初始化数数
      window.ta = window.thinkingdata
      window.ta.init({
        appId: 'bafd52e6df194c45968d9a6452ce80ae',
        serverUrl: 'https://data.91hotplay.com'
      })
      window.ta.setSuperProperties({
        package_name: pkg,
        mac: reportInfo ? JSON.parse(reportInfo).mac : 'mac',
        uid: uid
      })
      window.ta.login(uid)
      cache.forEach((params) => window.ta.track(...params))
    }
  }
}
