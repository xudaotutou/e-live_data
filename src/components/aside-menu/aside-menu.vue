<template>
  <div class="aside-menu">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        active-text-color="#ff9000"
        @select="handleSelect"
      >
      <template v-for="item in menuList" :key="item.id">
        <el-menu-item :index="item.path"><el-icon><component :is="item.icon" /></el-icon>{{item.name}}</el-menu-item>
      </template>
        <!-- <el-menu-item index="1"><el-icon><Monitor /></el-icon>直播数据</el-menu-item>
        <el-menu-item index="2"><el-icon><DataLine /></el-icon>用户分析</el-menu-item>
        <el-menu-item index="3"><el-icon><Goods /></el-icon>商品数据</el-menu-item>
        <el-menu-item index="4"><el-icon><Document /></el-icon>订单数据</el-menu-item>
        <el-menu-item index="5"><el-icon><User /></el-icon>个人中心</el-menu-item> -->
      </el-menu>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const menuList = [{
  name:'直播数据',
  id:'1',
  path:'/main/LiveData',
  icon: 'Monitor'
}, {
  name:'个人中心',
  id:'5',
  path:'/main/UserCenter',
  icon: 'User'
}]
const activeIndex = ref('/main/UserCenter')

const router = useRouter();
const handleSelect = (path) => {
  router.push({path})
}

</script>

<style scoped>

</style>