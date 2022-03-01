const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permissions: state => state.user.permissions,
  topbarRouters: state => state.routePermission.topbarRouters,
  defaultRoutes: state => state.routePermission.defaultRoutes,
  sidebarRouters: state => state.routePermission.sidebarRouters
}
export default getters
