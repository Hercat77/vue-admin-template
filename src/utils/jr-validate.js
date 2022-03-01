/**
 * @file 表单校验
 * @version
 * @author pankzou
 * @date 2022-02-24
 * @lastModified
 * @lastModifiedDate
 */
import * as valid from './validate'

/**
 * IP
 * @param {string} str
 * @returns {Boolean}
 */
export function validateIP(rule, value, callback) {
  if (!valid.isIP(value)) {
    callback(new Error('IP格式错误！'))
  } else {
    callback()
  }
}

/**
 * 密码
 * @param {string} str
 * @returns {Boolean}
 */
export function validatePassword(rule, value, callback) {
  if (!valid.isPassword(value)) {
    callback(new Error('密码为6-18位数字、字母！'))
  } else {
    callback()
  }
}

/**
 * 强密码（至少包含一个大写字母、一个小写字母、一个特殊字符、一个数字）
 * @param {string} str
 * @returns {Boolean}
 */
export function validateStrongPassword(rule, value, callback) {
  if (!valid.isStrongPassword(value)) {
    callback(new Error('密码为6-18字符，至少包含一个大小写字母、数字和特殊符号！'))
  } else {
    callback()
  }
}

/**
 * xss 攻击校验
 * @param {string} str
 * @returns {Boolean}
 */
export function validateXss(rule, value, callback) {
  if (!valid.isXss(value)) {
    callback(new Error('不能同时包含<>！'))
  } else {
    callback()
  }
}

/**
 * 特殊字符及空格
 * @param {string} str
 * @returns {Boolean}
 */
export function validateSpclChar(rule, value, callback) {
  if (!valid.isSpclChar(value)) {
    callback(new Error('不能包含特殊字符、空格！'))
  } else {
    callback()
  }
}
