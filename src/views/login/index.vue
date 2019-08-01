<template>
  <div class="container">
      <el-card class="card">
          <img src="../../assets/images/logo_index.png" alt="">
      </el-card>
  </div>
</template>

<script>
export default {}
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
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    img {
        display: block;
        width: 220px;
        margin: 0 auto;
        // margin: 0 auto只对块元素生效
    }
}

// .el-card__body{
//   background: red;
// }
</style>
