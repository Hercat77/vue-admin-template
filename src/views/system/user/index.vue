<template>
  <div class="app-container">
    用户管理
    <el-button @click="handleLocation" type="button">跳转</el-button>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    methods: {
      handleLocation() {
        this.$router.push('/system/user-auth/role/2')
      }
    }
  }
</script>

<style scoped>

</style>
