<template>
  <div class="app-container">
    <div class="mb20">
      当前权限：{{ roles }}
    </div>
    <div class="mb20">
      权限切换：
      <el-radio-group v-model="switchRoles">
        <el-radio-button label="editor" />
        <el-radio-button label="visitor" />
        <el-radio-button label="admin" />
      </el-radio-group>
    </div>

    <div :key="key">
      <div class="mb20">
        <span v-hasRole="['admin']">只有 <el-tag size="small">admin</el-tag> 能够看到</span>
      </div>

      <div class="mb20">
        <span v-hasRole="['editor']">只有 <el-tag size="small">editor</el-tag> 能够看到</span>
      </div>

      <div class="mb20">
        <span v-hasRole="['visitor']">只有 <el-tag size="small">visitor</el-tag> 能够看到</span>
      </div>

      <div class="mb20">
        <el-button v-hasPermi="['system:user:query']" size="small" type="primary">用户查询</el-button>
        <el-button v-hasPermi="['system:user:add']" size="small" type="primary">用户新增</el-button>
        <el-button v-hasPermi="['system:user:edit']" size="small" type="primary">用户修改</el-button>
        <el-button v-hasPermi="['system:user:remove']" size="small" type="primary">用户删除</el-button>
        <el-button v-hasPermi="['system:role:query']" size="small" type="primary">角色查询</el-button>
        <el-button v-hasPermi="['system:role:add']" size="small" type="primary">角色新增</el-button>
        <el-button v-hasPermi="['system:role:edit']" size="small" type="primary">角色修改</el-button>
        <el-button v-hasPermi="['system:role:remove']" size="small" type="primary">角色删除</el-button>
        <el-button v-hasPermi="['*:*:*']" size="small" type="primary">重置密码</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DirectivePermission',
  data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令
    }
  },
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.key++
        })
      }
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped>

</style>
