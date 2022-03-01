/**
 * @file 插件入口
 * @version
 * @author pankzou
 * @date 2022-02-18
 * @lastModified
 * @lastModifiedDate
 */
import modal from './modal'
import cache from './cache'
import tab from './tab'
import auth from './auth'

export default {
  install(Vue) {
    // 提示框对象
    Vue.prototype.$modal = modal
    // 本地缓存对象
    Vue.prototype.$cache = cache
    // 页签操作对象
    Vue.prototype.$tab = tab
    // 认证对象
    Vue.prototype.$auth = auth
  }
}
