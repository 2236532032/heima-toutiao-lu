<template>
<div class="container">article</div>
</template>

<script>
export default {
  // 实例创建完成
  // 可以发请求，请求数据  页面 数据 静态数据
  // 但是这个时候不能操作dom
  created () {
    this.$http.get('http://ttapi.research.itcast.cn/mp/v1_0/articles').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style>

</style>
