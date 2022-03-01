const routes = [
  {
    'name': 'System',
    'path': '/system',
    'hidden': false,
    'redirect': 'noRedirect',
    'component': 'Layout',
    'alwaysShow': true,
    'meta': {
      'title': '系统管理',
      'icon': 'system',
      'noCache': false,
      'link': null
    },
    'children': [
      {
        'name': 'User',
        'path': 'user',
        'hidden': false,
        'component': 'system/user/index',
        'meta': {
          'title': '用户管理',
          'icon': 'user',
          'noCache': false,
          'link': null
        }
      },
      {
        'name': 'Role',
        'path': 'role',
        'hidden': false,
        'component': 'system/role/index',
        'meta': {
          'title': '角色管理',
          'icon': 'peoples',
          'noCache': false,
          'link': null
        }
      },
      {
        'name': 'Menu',
        'path': 'menu',
        'hidden': false,
        'component': 'system/menu/index',
        'meta': {
          'title': '菜单管理',
          'icon': 'tree-table',
          'noCache': false,
          'link': null
        }
      }
    ]
  },
  {
    'name': 'Monitor',
    'path': '/monitor',
    'hidden': false,
    'redirect': 'noRedirect',
    'component': 'Layout',
    'alwaysShow': true,
    'meta': {
      'title': '系统监控',
      'icon': 'monitor',
      'noCache': false,
      'link': null
    },
    'children': [
      {
        'name': 'Online',
        'path': 'online',
        'hidden': false,
        'component': 'monitor/online/index',
        'meta': {
          'title': '在线用户',
          'icon': 'online',
          'noCache': false,
          'link': null
        }
      }
    ]
  },
  {
    'name': 'Tool',
    'path': '/tool',
    'hidden': false,
    'redirect': 'noRedirect',
    'component': 'Layout',
    'alwaysShow': true,
    'meta': {
      'title': '系统工具',
      'icon': 'tool',
      'noCache': false,
      'link': null
    },
    'children': [
      {
        'name': 'Build',
        'path': 'build',
        'hidden': false,
        'component': 'tool/build/index',
        'meta': {
          'title': '表单构建',
          'icon': 'build',
          'noCache': false,
          'link': null
        }
      }
    ]
  },
  {
    'name': 'Permission',
    'path': '/permission',
    'hidden': false,
    'redirect': 'noRedirect',
    'component': 'Layout',
    'alwaysShow': true,
    'meta': {
      'title': '权限测试',
      'icon': 'lock',
      'noCache': false,
      'link': null
    },
    'children': [
      {
        'name': 'DirectivePermission',
        'path': 'directive',
        'hidden': false,
        'component': 'permission/index',
        'meta': {
          'title': '指令权限',
          'icon': '',
          'noCache': false,
          'link': null
        }
      }
    ]
  },
  {
    'name': 'SystemComponents',
    'path': '/system-components',
    'hidden': false,
    'redirect': 'noRedirect',
    'component': 'Layout',
    'alwaysShow': true,
    'meta': {
      'title': '系统组件',
      'icon': 'system',
      'noCache': false,
      'link': null
    },
    'children': [
      {
        'name': 'Form',
        'path': 'directive',
        'hidden': false,
        'component': 'systemComponents/form/index',
        'meta': {
          'title': '复杂表单',
          'icon': '',
          'noCache': false,
          'link': null
        }
      }
    ]
  }
]

export default [
  // 获取路由信息
  {
    url: '/vue-admin-template/routes/getRouters',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: routes
      }
    }
  }
]
