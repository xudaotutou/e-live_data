<template>
<div class="main">
    <el-container class="main-content">
      <el-header class="page-header">
        <nav-header />
      </el-header>
      <el-container class="page">
        <el-aside>
          <aside-menu />
        </el-aside>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavHeader from "@/components/nav-header";
import AsideMenu from "@/components/aside-menu";
export default {
  components: {
    AsideMenu,
    NavHeader,
  }
}
</script>

<style>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
  background-color: #f0f2f5;
}

.el-header {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
  height: 48px !important;
  background-color: #fff;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #fff;
  transition: width 0.3s linear;
  margin-top: 10px;
  width: 180px;
}

.el-main {
  min-width: 610px;
  color: #333;
  text-align: center;
  background-color: #fff;
  padding: 0;
  margin: 10px;
}

</style>