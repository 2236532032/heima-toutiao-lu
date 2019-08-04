import axios from 'axios'
import store from '@/store'
import router from '@/router'

// axios-默认配置选项
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// axios.defaults.headers = {
//   Authorization: `Bearer ${store.getUser().token}`
// }
// console.log('store.getUser().token', store.getUser().token)

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 修改config
  config.headers = {
    Authorization: `Bearer ${store.getUser().token}`
  }
  // 在发送请求之前做些什么
  // 修改config,追加headers
  return config
}, (error) => {
  // 错误处理
  return Promise.reject(error)
})

// 响应拦截器：在每次响应后 做某一些事情
axios.interceptors.response.use((res) => {
  // 成功的时候做一些事情
  return res
}, (err) => {
  // 失败的时候做一些事情
  // 获取响应状态码 err对象包含响应对象  err.response
  // 响应对象中包含状态码  err.response.status
  if (err.response.status === 401) {
    // 跳转到登录页面 this.$router.push('/login')
    // 方式1：
    // $router.push('/login') 其实 地址栏改成  #/login
    // location.hash = '#/login'
    // 方式2：
    // 此时没有vue实例，$router对象获取不到，通过router实例直接使用
    router.push('/login')
  }
  return Promise.reject(err)
})
export default axios

// 页面刷新时，没有token
// 登录成功后  存储了token，点内容管理时，能获取到响应数据
