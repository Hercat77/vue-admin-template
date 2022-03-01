/**
 * @file 自定义指令
 * @version
 * @author pankzou
 * @date 2022-02-21
 * @lastModified
 * @lastModifiedDate
 */
import hasPermi from './permission/hasPermi'
import hasRole from './permission/hasRole'

const install = function(Vue) {
  Vue.directive('hasPermi', hasPermi)
  Vue.directive('hasRole', hasRole)
}

if (window.Vue) {
  window['hasRole'] = hasRole
  window['hasPermi'] = hasPermi
  Vue.use(install); // eslint-disable-line
}

export default install
