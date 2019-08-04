<template>
  <div class="container">
    <el-card class="card">
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 表单 -->
      <el-form ref="form" :model="form" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号" status-icon></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="form.code" style="width:170px;padding-right:10px" placeholder="请输入验证码" status-icon></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :checked="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    const checkPhone = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) { return callback(new Error('手机号格式不对')) }
      callback()
    }
    return {
      form: {
        mobile: '13911111111',
        code: '246810'
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.form.validate(valid => {
        if (valid) {
          // console.log(1)
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.form).then(res => {
            // console.log(123)
            // console.log(res.data)
            store.setUser(res.data.data)
            this.$router.push('/')
          })
            .catch(() => {
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  position: absolute;
  /* 因为宽高是基于浏览器设置的百分比格式，所以必须绝对定位 */
  width: 100%;
  height: 100%;
  //背景图定位 / 背景图尺寸 contain 等比缩放完整在容器内显示  cover  等比缩放完全铺面容器
  background: url(../../assets/images/login_bg.jpg) no-repeat center/cover;
}
.card {
  width: 340px;
  height: 340px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    display: block;
    width: 220px;
    margin: 0 auto 10px;
    // margin: 0 auto只对块元素生效
  }
}

// .el-card__body{
//   background: red;
// }
</style>
