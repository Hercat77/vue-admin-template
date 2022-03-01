<template>
  <div class="form-box">
    <el-tabs v-model="activeName" tab-position="left" @tab-click="tabChose">
      <div class="top-btn">
        <el-button type="text" :disabled="activeIndex==0" @click="lastChapter">{{ '<<'+'上一章' }}</el-button>
        <p>{{ activeName }}</p>
        <el-button type="text" :disabled="activeIndex==formTitle.length-1" @click="nextChapter">{{ '下一章'+'>>' }}
        </el-button>
      </div>
      <el-tab-pane
        v-for="(item,index) in formTitle"
        :key="index"
        :name="item.name"
      >
        <span slot="label">{{ item.name }} <span
          :class="item.state=='0'?['w-t', 'ri-close-circle-fill']:['p-t','ri-checkbox-circle-fill']"
        ></span></span>
        <div class="giant-form">
          <el-main>
            <jr-giant-form
              ref="giantForm"
              :loading="isShowLoading"
              :data="formData"
              :size="formSize"
              :view-mode="viewMode"
              class="flex-1"
            />
          </el-main>
        </div>
      </el-tab-pane>
      <div class="btn-box">
        <el-button v-loading.fullscreen.lock="formFullLoading" type="success" @click="translateHandle">暂存</el-button>
        <el-button v-loading.fullscreen.lock="formFullLoading" type="primary" @click="applyHandle">申报</el-button>
      </div>
    </el-tabs>
  </div>
</template>

<script>
  import {GiantList} from './formData'
  import GiantForm from '@/components/GiantForm/index'

  export default {
    name: 'Form',
    components: {
      'jr-giant-form': GiantForm
    },
    data() {
      return {
        formData: [],
        formSize: 'small',
        viewMode: false,
        formTitle: [
          {id: '1', name: '超限高层建筑工程抗震设防专项审查申报表', state: '0'},
          {id: '2', name: '行政性审查报审情况', state: '0'},
          {id: '3', name: '抗震设防标准', state: '0'},
          {id: '4', name: '勘察报告基本数据', state: '0'},
          {id: '5', name: '基础设计概况', state: '0'},
          {id: '6', name: '建筑结构布置和选型', state: '0'},
          {id: '7', name: '结构分析主要结果计算软件(主楼)', state: '0'},
          {id: '8', name: '结构分析主要结果计算软件(裙楼)', state: '0'},
          {id: '9', name: '基本抗震构造', state: '0'},
          {id: '10', name: '超限高层建筑工程设计的可行性及主要抗震措施', state: '0'},
          {id: '11', name: '超限高层建筑工程超限情况', state: '0'}
        ],
        activeName: '超限高层建筑工程抗震设防专项审查申报表',
        openNav: false,
        activeIndex: 0,
        isShowLoading: false,
        formFullLoading: false
      }
    },
    mounted() {
      this.formData = GiantList[this.formTitle[this.activeIndex].name]
      //每次进入页面都要查看表单填写情况
      this.detectForm()
    },
    methods: {
      // 表单刷新翻页
      fromBreak(type) {
        this.isShowLoading = true
        switch (type) {
          case '0':
            this.activeIndex -= 1
            this.activeName = this.formTitle[this.activeIndex].name
            break
          case '1':
            this.activeIndex += 1
            this.activeName = this.formTitle[this.activeIndex].name
            break
          case '2':
            this.activeIndex = this.formTitle.findIndex(item => item.name === this.activeName)
            break
        }
        this.formData = GiantList[this.activeName]
        this.detectForm()
        setTimeout(() => {
          this.isShowLoading = false
        }, 500)
      },
      //检测表单完成情况
      detectForm() {
        //首先校验必填项
        /*let noRule = GiantList['结构分析主要结果计算软件(主楼)'].findIndex(res => {
          if (res.key && (!res.rules || (res.rules instanceof Array && !res.rules[0].required))) {
            return typeof res.value == 'string' ? res.value : res.value.length > 0
          }
        })
        //再校验非必填项
        let beRule = GiantList['结构分析主要结果计算软件(主楼)'].findIndex(res => {
          if (res.key && (res.rules instanceof Array && res.rules[0].required) || (res.rules && res.rules.required)) {
            return typeof res.value == 'string' ? !res.value : res.value.length == 0
          }
        })
        console.log(noRule,'noRule')
        console.log(beRule,'beRule')*/
        this.formTitle.forEach((item) => {
          const noRule = GiantList[item.name].findIndex(res => {
            if (res.key && (!res.rules || (res.rules instanceof Array && !res.rules[0].required))) {
              return typeof res.value === 'string' ? res.value : res.value.length > 0
            }
          })
          const beRule = GiantList[item.name].findIndex(res => {
            if (res.key && (res.rules instanceof Array && res.rules[0].required) || (res.rules && res.rules.required)) {
              return typeof res.value === 'string' ? !res.value : res.value.length == 0
            }
          })
          if (beRule === -1 && noRule !== -1) {
            item.state = '1'
          }
        })
      },
      //上一章
      lastChapter() {
        this.fromBreak('0')
      },
      //下一章
      nextChapter() {
        this.fromBreak('1')
      },
      //tab切换
      tabChose() {
        this.fromBreak('2')
      },
      //解构对象返回数组参数
      deconstructObj() {
        let giantKeys = Object.keys(GiantList)
        let giantArr = []
        giantKeys.forEach(item => {
          giantArr = [...giantArr, ...GiantList[item]]
        })
        let giantObj = {}
        giantArr.forEach(item => {
          if (item.key) {
            giantObj[item.key] = item.value
          }
        })
        return giantObj
      },
      //暂存
      translateHandle() {
        this.formFullLoading = true
        const giantObj = this.deconstructObj()
        console.log(giantObj)
        setTimeout(() => {
          this.formFullLoading = false
          this.$message.success('暂存成功')
        }, 1000)
      },
      //异步处理
      asynchronousFn(fn) {
        return new Promise((resolve) => {
          fn()
          resolve()
        })
      },
      //申报
      applyHandle() {
        //首先判断每个表单填写状态
        const isRequired = this.formTitle.findIndex((item) => {
          const beRule = GiantList[item.name].findIndex(res => {
            if (res.key && (res.rules instanceof Array && res.rules[0].required) || (res.rules && res.rules.required)) {
              return typeof res.value == 'string' ? !res.value : res.value.length == 0
            }
          })
          return beRule !== -1
        })
        const isFinish = this.formTitle.findIndex(item => item.state == '0')
        if (isRequired === -1) {
          this.$confirm(isFinish === -1 ? '确认申报?' : '还有选填字段未填写, 是否继续申报?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.formFullLoading = true
            setTimeout(() => {
              this.formFullLoading = false
              this.$message.success('申报成功')
            }, 1000)
          }).catch(() => {
            this.isShowLoading = true
            this.activeIndex = isFinish
            this.activeName = this.formTitle[isFinish].name
            this.formData = GiantList[this.activeName]
            setTimeout(() => {
              this.isShowLoading = false
            }, 500)
            this.$message({
              type: 'info',
              message: '取消操作'
            })
          })
        } else {
          this.formFullLoading = true
          this.asynchronousFn(() => {
            this.activeIndex = isFinish
            this.activeName = this.formTitle[isFinish].name
            this.formData = GiantList[this.activeName]
          }).then(() => {
            setTimeout(() => {
              this.formFullLoading = false
              this.$message.warning('您还有表单未填写完成')
            }, 1000)
            this.$refs.giantForm[isFinish].$refs['formRef'].validate(val => {
              if (val) {
                console.log(val)
              }
            })
          })
        }
        /*let giantArr = this.deconstructObj()
        let isFinish = []
        this.$refs.giantForm.forEach(item=>{
          console.log(item.$refs['formRef'])
          item.$refs['formRef'].validate(val=>{
            if (val){
              isFinish.push(item)
            }
          })
        })
        console.log(isFinish)*/
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/styles/variables.scss";

  .form-box {
    height: calc(100vh - #{$headerHeight} - 34px);
    padding: 1rem 1rem;

    .top-btn {

      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;

      p {
        text-align: center;
        font-weight: bold;
      }

      ::v-deep .el-button {
        outline: none;
      }

      .el-button:hover {
        color: #4e6ef2;
      }
    }

    .giant-form {
      max-width: 1350px;
      margin: 0 auto;
    }

    .btn-box {
      display: flex;
      justify-content: center;

      .el-button {
        outline: none;
      }
    }

    .w-t {
      color: #909399;
    }

    .p-t {
      color: #67C23A;
    }
  }

  ::v-deep .box-style {
    text-align: center;
    padding: 5px 10px;
    border: 1px solid #c9c9c9;
    margin: 0 -1px -1px 0;
    font-size: 14px;
    color: #606266;
    font-weight: 700;
  }

  ::v-deep .el-tabs--left {
    display: flex;
    height: 100%;
  }

  ::v-deep .el-tabs__content {
    overflow-y: scroll;
    width: 100%;
  }

  ::v-deep .el-tabs--left .el-tabs__active-bar.is-left {
    width: 100%;
    border-right: 5px solid #409EFF;
  }

  ::v-deep .el-tabs__active-bar {
    background-color: rgba(0, 0, 0, .1);
  }

  ::v-deep .el-tabs__item {
    padding: 0 10px;
    height: auto;
  }

  ::v-deep .el-tabs--left .el-tabs__header.is-left {
    width: 13rem;
  }

  ::v-deep .el-tabs__item {
    white-space: pre-wrap;
    line-height: 32px;
  }
</style>
