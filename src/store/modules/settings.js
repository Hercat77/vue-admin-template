import defaultSettings from '@/settings'

const { showSettings, fixedHeader, sidebarLogo, tagsView, topNav, dynamicTitle } = defaultSettings

// 布局配置缓存
const storageSetting = JSON.parse(localStorage.getItem('layout-setting')) || ''

const state = {
  title: '',
  theme: '#409EFF',
  showSettings: showSettings,
  fixedHeader: storageSetting.fixedHeader === undefined ? fixedHeader : storageSetting.fixedHeader,
  sidebarLogo: storageSetting.sidebarLogo === undefined ? sidebarLogo : storageSetting.sidebarLogo, // 控制是否显示左侧导航栏顶部logo
  tagsView: storageSetting.tagsView === undefined ? tagsView : storageSetting.tagsView, // 控制tagsView导航标签栏是否显示
  topNav: storageSetting.topNav === undefined ? topNav : storageSetting.topNav, // 控制是否显示顶部导航栏
  dynamicTitle: storageSetting.dynamicTitle === undefined ? dynamicTitle : storageSetting.dynamicTitle // 是否动态标题
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  // 设置网页标题
  setTitle({ commit }, title) {
    state.title = title
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

