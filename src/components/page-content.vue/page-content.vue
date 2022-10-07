<template>
  <div class="page-content">
    <div class="header">
      <strong>数据列表</strong>
      <el-button @click="handleDownload('demo')"><el-icon><Download /></el-icon>&nbsp;下载</el-button>
    </div>
    <el-table :data="tableData" id="excel_table">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-if="propItem.prop === 'operation'" v-bind="propItem">
          <a>查看</a>
        </el-table-column>
        <el-table-column v-else-if="propItem.prop === 'type'" v-bind="propItem">
          <template #default="scope">
            <img src="@/assets/digital.svg" width="20">
            {{scope.row.type}}
          </template>
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
import FileSaver from 'file-saver'
import { write, utils } from 'xlsx';

const props = defineProps({
    propList: Array,
    tableCount: Number,
    tableData: Array,
})

const handleDownload = (name) => {
  let table = document.getElementById("excel_table")
  let et = utils.table_to_book(table)
  let output = write(et, {
    bookType: "xlsx",
    bookSST: true,
    type: "array"
  })

  try {
      FileSaver.saveAs(new Blob([output], { type: "application/octet-stream" }), `${name}.xlsx`)
  } catch (e) {
    console.log(e)
  }

  return output
}
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
img{
  vertical-align: middle;
}
</style>