/**
 * @file tab页签操作封装
 * @version
 * @author pankzou
 * @date 2022-02-21
 * @lastModified
 * @lastModifiedDate
 */
import store from '@/store'
import router from '@/router'

export default {
  // 刷新当前tab页签，obj代表当前路由
  refreshPage(obj) {
    // matched:包含当前路由的所有嵌套路径片段的路由记录(数组)
    const { path, matched } = router.currentRoute

    if (obj === undefined) {
      matched.forEach((m) => {
        if (m.components && m.components.default && m.components.default.name) {
          if (!['Layout'].includes(m.components.default.name)) {
            obj = { name: m.components.default.name, path: path }
          }
        }
      })
    }

    return store.dispatch('tagsView/delCachedView', obj).then(() => {
      const { path } = obj
      router.replace({
        path: '/redirect' + path
      })
    })
  },

  // 关闭当前tab页签
  closePage(obj) {
    if (obj === undefined) {
      return store.dispatch('tagsView/delView', router.currentRoute).then(({ lastPath }) => {
        return router.push(lastPath || '/')
      })
    }
    return store.dispatch('tagsView/delView', obj)
  },

  // 关闭所有tab页签
  closeAllPage() {
    return store.dispatch('tagsView/delAllViews')
  },

  // 关闭左侧tab页签
  closeLeftPage(obj) {
    return store.dispatch('tagsView/delLeftTags', obj || router.currentRoute)
  },

  // 关闭右侧tab页签
  closeRightPage(obj) {
    return store.dispatch('tagsView/delRightTags', obj || router.currentRoute)
  },

  // 关闭其他tab页签
  closeOtherPage(obj) {
    return store.dispatch('tagsView/delOthersViews', obj || router.currentRoute)
  },

  // 关闭当前tab页签，并打开新的tab页签
  closeOpenPage(obj) {
    store.dispatch('tagsView/delView', router.currentRoute)
    if (obj !== undefined) {
      return router.push(obj)
    }
  },

  // 添加tab页签
  openPage(title, url) {
    var obj = { path: url, meta: { title: title }}
    store.dispatch('tagsView/addView', obj)
    return router.push(url)
  },

  // 修改tab页签
  updatePage(obj) {
    return store.dispatch('tagsView/updateVisitedView', obj)
  }
}
