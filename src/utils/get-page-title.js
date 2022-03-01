import defaultSettings from '@/settings'

const title = defaultSettings.title || '武汉佳软'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
