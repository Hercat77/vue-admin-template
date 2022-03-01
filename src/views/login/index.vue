<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <h3 class="title">佳软后台管理系统</h3>

      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        >
          <span slot="prefix" class="svg-container"><svg-icon icon-class="user" /></span>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        >
          <span slot="prefix" class="svg-container"><svg-icon icon-class="password" /></span>
        </el-input>
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-form-item prop="captcha">
        <el-input
          v-model="loginForm.captcha"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" class="login-code-img" @click="getCode">
        </div>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
      >登 录
      </el-button>

      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div>

    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不得少于6位'))
      } else {
        callback()
      }
    }
    return {
      codeUrl: '',
      loginForm: {
        username: 'admin',
        password: '111111',
        captcha: '',
        captchaId: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        captcha: [{ required: true, trigger: 'change', message: '请输入验证码' }]
      },
      loading: false,
      // 验证码开关
      captchaOnOff: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    getCode() {
      this.loginForm.captchaId = new Date().getTime()
      // this.codeUrl = getCaptcha() + '?captchaId=' + this.loginForm.captchaId
      // this.captchaOnOff = this.codeUrl === '' ? true : false
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg: #37e;
  $light_gray: #fff;
  $dark_gray: #889aa4;
  $cursor: #707070;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
    }
  }

  /* reset element-ui css */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: $bg;

    .el-input {
      display: inline-block;
      height: 38px;
      width: 100%;

      input {
        background: transparent;
        //border: 0px;
        //-webkit-appearance: none;
        //border-radius: 0px;
        padding: 12px 5px 12px 35px;
        //color: $light_gray;
        height: 38px;
        //caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $light_gray inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .login-form {
      position: relative;
      width: 400px;
      padding: 25px 25px 5px 25px;
      border-radius: 6px;
      background: $light_gray;

      .svg-container {
        height: 43px;
        width: 14px;
        margin-left: 2px;
        //padding: 2px 5px 0px 5px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
      }
    }

    .login-code {
      width: 33%;
      height: 38px;
      float: right;

      img {
        cursor: pointer;
        vertical-align: middle;
      }
    }

    .tips {
      font-size: 14px;
      color: $cursor;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .title {
      color: $cursor;
      margin: 0px auto 40px auto;
      text-align: center;
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 2px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }

    .el-form-item {
      //border: 1px solid rgba(255, 255, 255, 0.1);
      //background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>
