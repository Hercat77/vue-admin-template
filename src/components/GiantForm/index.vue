<template>
  <el-form
    ref="formRef"
    :label-width="labelWidth"
    label-position="right"
    :size="size"
    :model="checkData"
    v-loading="loading"
    :rules="viewMode||rules"
    class="stripe jr-form-border"
    :class="{'jr-form-view':viewMode}"
  >
    <el-row :gutter="viewMode?0:gutter">
      <template v-if="viewMode">
        <el-col
          v-for="(item,index) in checkData.formList"
          :key="index"
          :class="item.class"
          :style="{'line-height':item.lineHeight||'33px','width':item.width}"
          :md="item.col||12"
        >
          <template v-if="!item.hidden">
            <slot v-if="item.type==='custom'" :name="item.slot" :item="item">{{ item.label }}</slot>
            <div v-if="item.type==='input'||'span'">{{ item.value }}</div>
            <el-form-item v-else :label="item.label" :class="item.class" :label-width="item.labelWidth">
              <slot v-if="item.slot" :name="item.slot" :item="item">{{ item.value }}</slot>
              <img
                v-if="item.type==='image'"
                :src="'data:image/jpeg;base64,'+item.value"
                style="width: 140px;height: 140px"
                alt=""
              >
              <p v-else>{{ item.value }}</p>
            </el-form-item>
          </template>
        </el-col>
      </template>
      <template v-else>
        <el-col
          v-for="(item,index) in checkData.formList"
          :key="index"
          :style="{'line-height':item.lineHeight,'width':item.width}"
          :class="item.class"
          :md="item.col||12"
        >
          <template v-if="!item.hidden">
            <slot v-if="item.type==='custom'" :name="item.slot" :item="item">{{ item.label }}</slot>
            <el-tooltip v-else-if="item.type==='span'" :content="item.value" placement="top" :disabled="!item.disabled">
              <div>{{ item.value }}</div>
            </el-tooltip>
            <div v-else-if="item.type==='input'" style="padding:0 5px">
              <el-input
                v-model="item.value"
                :size="size"
                :placeholder="item.placeholder||'请输入'"
                :disabled="item.disabled"
              />
            </div>
            <el-form-item
              v-else
              :label="item.label"
              :rules="item.rules"
              :prop="'formList.' + index + '.value'"
              :class="item.class"
              :label-width="item.labelWidth"
            >
              <el-popover slot="label" placement="top-start" width="200" trigger="hover" :content="item.label">
                <span slot="reference">{{ item.label }}</span>
              </el-popover>
              <slot v-if="item.slot" :name="item.slot" :item="item">{{ item.value }}</slot>
              <template v-else>
                <el-input
                  v-if="item.type==='text'"
                  v-model="item.value"
                  :placeholder="item.placeholder||'请输入'"
                  :disabled="item.disabled"
                  :readonly="item.readonly"
                />
                <el-input
                  v-if="item.type==='search'"
                  v-model="item.value"
                  :placeholder="item.placeholder||'请输入'"
                  :readonly="item.readonly"
                  :disabled="item.disabled"
                >
                  <el-button
                    slot="append"
                    icon="el-icon-search"
                    @click="inputSearch(item.value)"
                  />
                </el-input>
                <el-input
                  v-if="item.type==='sfzhm'"
                  v-model="item.value"
                  :style="{width:item.width||'100%'}"
                  :placeholder="item.placeholder||'请输入'"
                  :disabled="item.disabled"
                  @change="IdentityCheck(item.value)"
                />
                <el-input
                  v-if="item.type==='password'"
                  v-model="item.value"
                  :style="{width:item.width||'100%'}"
                  :placeholder="item.placeholder||'请输入密码'"
                  :disabled="item.disabled"
                  show-password
                />
                <el-input
                  v-if="item.type==='textarea'"
                  v-model="item.value"
                  type="textarea"
                  :autosize="item.autosize||{minRows: 4, maxRows: 8}"
                  :style="{width:item.width||'100%'}"
                  :placeholder="item.placeholder||'请输入'"
                  :maxlength="item.maxlength||'100'"
                  show-word-limit
                  :disabled="item.disabled"
                />
                <el-input-number
                  v-if="item.type==='number'"
                  v-model="item.value"
                  :min="item.min"
                  :max="item.max"
                  :style="{width:item.width||'120px'}"
                  :disabled="item.disabled"
                />
                <el-select
                  v-if="item.type==='select'"
                  v-model="item.value"
                  clearable
                  :style="{width:item.width||'100%'}"
                  :disabled="item.disabled"
                  :placeholder="item.placeholder||'请选择'"
                  @change="selectClick(item.value,item.key)"
                >
                  <el-option
                    v-for="(child,i) in item.dataList"
                    :key="i"
                    :label="child.label?child.label:child"
                    :value="child"
                  />
                </el-select>
                <el-cascader
                  v-if="item.type==='cascader'"
                  v-model="item.value"
                  :options="item.dataList"
                  :props="{ expandTrigger: 'hover' }"
                  clearable
                  :style="{width:item.width||'100%'}"
                  :disabled="item.disabled"
                  :placeholder="item.placeholder||'请选择'"
                />
                <el-radio-group
                  v-if="item.type==='radio'"
                  v-model="item.value"
                >
                  <el-radio
                    v-for="(child,i) in item.dataList"
                    :key="i"
                    :label="child"
                  >
                    {{ child }}
                  </el-radio>
                </el-radio-group>
                <el-checkbox-group
                  v-if="item.type==='checkbox'"
                  v-model="item.value"
                  :disabled="item.disabled"
                >
                  <el-checkbox
                    v-for="(child,i) in item.dataList"
                    :key="i"
                    :label="child"
                  >
                    {{ child }}
                  </el-checkbox>
                </el-checkbox-group>
                <el-switch
                  v-if="item.type==='switch'"
                  v-model="item.value"
                  :disabled="item.disabled"
                />
                <el-date-picker
                  v-if="item.type==='datetime'"
                  v-model="item.value"
                  type="datetime"
                  :placeholder="item.placeholder||'请选择日期时间'"
                  :style="{width:item.width||'100%'}"
                  :disabled="item.disabled"
                />
                <el-date-picker
                  v-if="item.type==='date'"
                  v-model="item.value"
                  type="date"
                  :picker-options="item.pickerOptions"
                  :placeholder="item.placeholder||'请选择日期'"
                  :style="{width:item.width||'100%'}"
                  :disabled="item.disabled"
                />
                <el-time-select
                  v-if="item.type==='time'"
                  v-model="item.value"
                  type="time"
                  :placeholder="item.placeholder||'请选择时间'"
                  :style="{width:item.width||'100%'}"
                  :disabled="item.disabled"
                />
              </template>
            </el-form-item>
          </template>
        </el-col>
      </template>
    </el-row>
    <slot />
  </el-form>
</template>

<script>
  export default {
    name: 'GiantForm',
    props: {
      labelWidth: {
        required: false,
        type: String,
        default: '150px'
      },
      size: {
        required: false,
        type: String,
        default: 'small'
      },
      gutter: {
        required: false,
        type: Number,
        default: 16
      },
      data: {
        required: false,
        type: Array,
        default: () => []
      },
      rules: {
        required: false,
        type: Array,
        default: () => {}
      },
      viewMode: {
        required: false,
        type: Boolean,
        default: false
      },
      loading: {
        required: false,
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    computed: {
      checkData: function () {
        return {formList: this.data}
      }
    },
    methods: {
      selectClick(val, key) {
        this.$emit('selectchange', {'val': val, 'key': key})
      },
      IdentityCheck(val) {
        const regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        if (regIdNo.test(val)) {
          this.$emit('identity', val)
        }
      },
      inputSearch(val) {
        this.$emit('inputsearch', val)
      }
    }
  }
</script>

<style scoped>
  ::v-deep .el-form-item {
    margin: 0 -1px -1px 0 !important;
    padding: 0 10px;
    border: 1px solid #c9c9c9;
    transition: .3s;
  }

  ::v-deep .el-col {
    padding-left: 0 !important;
    padding-right: 0 !important;
    background-color: #f8f8f8;
  }

  ::v-deep .el-form-item--small .el-form-item__content {
    line-height: 43px;
  }

  ::v-deep .el-form-item__content {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: -10px;
    padding: 1px 5px;
    border-left: 1px solid #c9c9c9;
    background-color: #fff;
  }

  ::v-deep .el-form-item__label {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ::v-deep .el-form-item--small .el-form-item__label {
    line-height: 42px;
  }

  ::v-deep .el-form-item__content .el-input-group {
    vertical-align: middle;
  }

  ::v-deep .el-form-item__error {
    top: 35%;
    right: 12%;
    left: unset;
    padding-top: 0;
  }
</style>
