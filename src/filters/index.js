/**
 * @file vue-filter过滤器
 * @version
 * @author pankzou
 * @date 2022-02-24
 * @lastModified
 * @lastModifiedDate
 */

/**
 * 日期格式化
 * @param {string} date - 需要的日期格式
 * @returns {string} - 符合格式的日期
 */
export function formatDate(date, fmt = 'yyyy-MM-dd') {
  if (date) {
    const fullDate = new Date(date.replace(/-/g, '/'))

    const o = {
      'M+': fullDate.getMonth() + 1, // 月份
      'd+': fullDate.getDate(), // 日
      'H+': fullDate.getHours(), // 小时
      'm+': fullDate.getMinutes(), // 分
      's+': fullDate.getSeconds(), // 秒
      'q+': Math.floor((fullDate.getMonth() + 3) / 3), // 季度
      'S': fullDate.getMilliseconds()// 毫秒
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (fullDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  } else {
    return ''
  }
}
