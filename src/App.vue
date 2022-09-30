<script setup>
import Header from './components/Header.vue';
import AsideMenu from './components/AsideMenu.vue';
const zIndex = ref(3000)
const size = ref('small')
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <el-container class="app-container">
      <el-header>
        <Header></Header>
      </el-header>
      <el-container class="main-container">
        <el-aside width="10vw">
          <AsideMenu></AsideMenu>
        </el-aside>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  background-color: yellow;
}
</style>
<style>
#app {
  text-align: center;
  padding: 0;
  color: var(--ep-text-color-primary);
}
</style>