<template>
  <div class="page-content">
    <div class="header">
      <el-button>批量导入</el-button>
      <el-button><el-icon><Download /></el-icon>下载</el-button>
    </div>
    <el-table :data="tableData">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-if="propItem.prop === 'operation'" v-bind="propItem">
          <a>查看</a>
        </el-table-column>
        <el-table-column v-else v-bind="propItem">
        </el-table-column>
        </template>
    </el-table>
    <div class="footer">
      <el-pagination
        layout="->, total, prev, pager, next"
        :total="tableCount"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    propList: Array,
    tableCount: Number,
    tableData: Array,
})
</script>

<style scoped>
.page-content {
  margin-top: 10px;
  padding-top: 10px
} 
.header {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
}
.el-pagination {
  text-align: right;
}
</style>