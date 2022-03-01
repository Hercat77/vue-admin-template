/**
 * @file 正则管理
 * @version
 * @author pankzou
 * @date 2022-02-24
 * @lastModified
 * @lastModifiedDate
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * IP
 * @param {string} str
 * @returns {Boolean}
 */
export function isIP(str) {
  const validMap = /\d+\.\d+\.\d+\.\d+/
  return validMap.test(str.trim())
}

/**
 * 密码
 * @param {string} str
 * @returns {Boolean}
 */
export function isPassword(str) {
  const validMap = /^[0-9a-zA-Z]{6,18}$/
  return validMap.test(str.trim())
}

/**
 * 强密码（至少包含一个大写字母、一个小写字母、一个特殊字符、一个数字）
 * @param {string} str
 * @returns {Boolean}
 */
export function isStrongPassword(str) {
  // eslint-disable-next-line no-useless-escape
  const validMap = /^.*(?=.{6,18})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).*$/
  return validMap.test(str.trim())
}

/**
 * xss 攻击校验
 * @param {string} str
 * @returns {Boolean}
 */
export function isXss(str) {
  const validMap = /<.*>/
  return validMap.test(str.trim())
}

/**
 * 邮箱
 * @param {string} str
 * @returns {Boolean}
 */
export function isEmail(str) {
  const validMap = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return validMap.test(str.trim())
}

/**
 * 手机号
 * @param {string} str
 * @returns {Boolean}
 */
export function isMobile(str) {
  const validMap = /^(0|86|17951)?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/
  return validMap.test(str.trim())
}

/**
 * 手机验证码
 * @param {string} str
 * @returns {Boolean}
 */
export function isMobileCaptcha(str) {
  const validMap = /^\d{6}$/
  return validMap.test(str.trim())
}

/**
 * 图片验证码
 * @param {string} str
 * @returns {Boolean}
 */
export function isImgCaptcha(str) {
  const validMap = /^[0-9a-zA-Z]{5}$/
  return validMap.test(str.trim())
}

/**
 * 身份证
 * @param {string} str
 * @returns {Boolean}
 */
export function isIdCard(str) {
  const validMap = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
  return validMap.test(str.trim())
}

/**
 * 邮政编码
 * @param {string} str
 * @returns {Boolean}
 */
export function isZipCode(str) {
  const validMap = /^[1-9]\d{5}(?!\d)$/
  return validMap.test(str.trim())
}

/**
 * 特殊字符及空格
 * @param {string} str
 * @returns {Boolean}
 */
export function isSpclChar(str) {
  const validMap = new RegExp('[` ~!@#$^&*()=|{}\':;\',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“\'。，、？]')
  return validMap.test(str.trim())
}
