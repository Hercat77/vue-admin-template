import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getTokenKey() {
  return TokenKey
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 设置某个cookie存储
export function setCache(key, value) {
  let result = value
  if (typeof value === 'object' && value != null) {
    result = JSON.stringify(result)
  }
  return Cookies.set(key, result)
}

// 获取某个cookie存储
export function getCache(key) {
  const val = Cookies.get(key)
  try {
    return JSON.parse(val)
  } catch (e) {
    return val
  }
}

// 删除某个cookie存储
export function removeCache(key) {
  return Cookies.remove(key)
}
