import axios from 'axios'
import Qs from 'qs'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { tansParams } from '@/utils/index'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 跨域请求时发送cookie
  timeout: 5000 // 请求超时
})

// request 请求拦截器
service.interceptors.request.use(
  config => {
    // 判断该接口是否需要设置token，默认需要token
    const isToken = (config.headers || {}).isToken === true
    if (getToken() && isToken) {
      config.headers['X-Token'] = getToken()
    }

    // get 请求映射params参数
    if (config.method === 'get' && config.params) {
      let url = config.url + '?' + tansParams(config.params)
      url = url.slice(0, -1)
      config.params = {}
      config.url = url
    }

    // post 请求处理参数
    if (config.method === 'post') {
      const contentType = config.headers['Content-Type']

      if (contentType.indexOf('application/x-www-form-urlencoded') !== -1) {
        config.data = Qs.stringify(config.data)
      } else if (contentType.indexOf('application/json') !== -1) {
        config.data = JSON.stringify(config.data)
      }
    }

    return config
  },
  error => {
    // 请求错误时
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response 响应拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // 如果状态码不为200，则判定为错误
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 401: 无效token;
      if (res.code === 401) {
        // 重新登录
        MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
