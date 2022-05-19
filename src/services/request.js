import axios from 'axios'
import store from '../store/index'
axios.defaults.timeout = 30 * 1000
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

/**
 * getRequest => http get
 * @param url
 * @param params
 * @returns {*}
 */
export const getRequest = async (url, params) => {
  let urlStr
  const token = localStorage.getItem('user-token')
  if (!params) params = {}
  params.package = localStorage.getItem('pkg') || 'com.rewan.who.ios'
  if (!params) {
    urlStr = url
  } else {
    urlStr = url + '?' + translateParams(params)
  }
  let parameters = {
    url: urlStr,
    method: 'get',
    headers: { 'user-token': token, Accept: 'application/json' }
  }
  let data = await axios.request(parameters)
  return data.data
}
/**
 * postRequest => http post
 * @param url
 * @param params
 * @returns {*}
 */
export const postRequest = async (url, params) => {
  const token = localStorage.getItem('user-token')
  if (!params) params = {}
  let _package = localStorage.getItem('pkg') || 'com.rewan.who.ios'
  let parameters = {
    url: url + '?package=' + _package,
    method: 'post',
    data: translateParams(params),
    headers: { 'user-token': token, Accept: 'application/json' }
  }
  let data = await axios.request(parameters)
  return data.data
}
/**
 * translate obj params to string with &
 * @param params
 * @returns {string}
 */
export function translateParams(params) {
  let url = ''
  for (let param in params) {
    url += `${param}=${params[param]}&`
  }
  return url.substring(0, url.length - 1)
}
