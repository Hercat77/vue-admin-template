import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress 配置

const whiteList = ['/login'] // 不需要重定向的白名单

router.beforeEach(async(to, from, next) => {
  // 开始 progress bar
  NProgress.start()

  // 设置页面标题
  // document.title = getPageTitle(to.meta.title)

  // 判断用户是否登录
  const hasToken = getToken()

  if (hasToken) {
    // 设置页面标题
    to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
    if (to.path === '/login') {
      // 登录成功，跳转到 home 页面
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        store.dispatch('user/getInfo').then(() => {
          store.dispatch('GenerateRoutes').then(accessRoutes => {
            // 根据roles权限生成可访问的路由表
            router.addRoutes(accessRoutes) // 动态添加可访问路由表
            // router.options.routes=[...router.options.routes,...accessRoutes]
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
        }).catch(err => {
          store.dispatch('user/logout').then(() => {
            Message.error(err)
            next({ path: '/' })
          })
        })

        // try {
        //   // 获取用户信息
        //   store.dispatch('user/getInfo').then(() => {
        //     // 获取用户可访问的路由表
        //     store.dispatch('GenerateRoutes').then(accessRoutes => {
        //       router.addRoutes(accessRoutes) // 动态添加可访问路由表
        //       console.log(router.options.routes)
        //       next({ ...to, replace: true }) // hack 方法 确保addRoutes已完成
        //     })
        //   })
        // } catch (error) {
        //   // remove token and go to login page to re-login
        //   await store.dispatch('user/resetToken')
        //   Message.error(error || 'Has Error')
        //   next(`/login?redirect=${to.path}`)
        //   NProgress.done()
        // }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
