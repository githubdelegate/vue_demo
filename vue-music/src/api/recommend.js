import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

// picmid=1&rnd=0.2125310972804919&g_tk=5381&
// jsonpCallback=getPlaylist&loginUin=0&hostUin=0
// &format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0
// &platform=yqq&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=29

export function getDissList() {
  // https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  const url = '/api/getDissList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  // return jsonp(url, data, options)
  // const data = {
  //   picmid: 1,
  //   rnd: Math.random(),
  //   g_tk: 5381,
  //   // jsonpCallback: 'getPlaylist',
  //   loginUin: '0',
  //   hostUin: 0,
  //   format: 'json',
  //   inCharset: 'utf8',
  //   outCharse: 'utf-8',
  //   notice: 0,
  //   platform: 'yqq',
  //   needNewCode: 0,
  //   categoryId: 10000000,
  //   sortId: 5,
  //   sin: 0,
  //   ein: 29
  // }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}