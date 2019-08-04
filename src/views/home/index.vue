<template>
  <el-container class="wrapper">
    <!-- 侧边 -->
    <el-aside :width="isCollapse?'60px':'200px'">
      <div class="logo" :class="{miniLogo:isCollapse}"></div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 主体 -->
    <el-container>
      <!-- 主体-头部 -->
      <el-header>
        <span class="el-icon-s-fold" @click="toggleMenu"></span>
        <span>江苏传智播客科技教育有限公司</span>
        <span class="userLogin">
          <img src="../../assets/images/avatar.jpg" alt />
          <el-dropdown>
            <span class="el-dropdown-link">
              用户名称
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人设置</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </el-header>
      <!-- 主体-中心 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleMenu () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped lang='less'>
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.el-header {
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  .el-icon-s-fold {
    margin-right: 10px;
    font-size: 30px;
    vertical-align: middle;
  }
}

.userLogin {
  float: right;
  img {
    vertical-align: middle;
    width: 30px;
    height: 30px;
  }
  .el-dropdown-link {
    font-weight: bold;
  }
}
.el-aside {
  background-color: #002033;
}
.el-menu {
  border-right: none;
}
.logo {
  width: 100%;
  height: 60px;
  background: #002244 url(../../assets/images/logo_admin.png) no-repeat center /
    140px auto;
}
.miniLogo {
  background-image: url(../../assets/images/logo_admin_01.png);
  background-size: 36px auto;
}
</style>
