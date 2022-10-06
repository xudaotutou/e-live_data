<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { ref } from "vue";
let locale = ref(zhCn)
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style scoped>
</style>
<style>
#app {
  text-align: center;
  padding: 0;
  color: var(--ep-text-color-primary);
}
</style>