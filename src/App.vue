<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import defaultSettings from '@/settings'
export default {
  name: 'App',
  metaInfo() {
    return {
      title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
      titleTemplate: title => {
        return title ? `${title} - ${defaultSettings.title}` : defaultSettings.title
      }
    }
  }
}
</script>
