const KEY = 'hm-toutiao-77-user'
export default {
  setUser (user) {
    // 存储用户信息到sessionStorage
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
    // console.log(user)
  },
  getUser () {
    // 获取用户信息从sessionStorage
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  }
}
