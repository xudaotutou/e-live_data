<template>
  <div class="page-content">
    <div class="header">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-success="handleChange"
        :file-list="fileList"
        class="el-upload"
      ><el-button>批量导入</el-button>
      </el-upload>
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
import { write, utils } from 'xlsx'

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
};

let handleChange = (res, file, fileList) => {
  for (let i = 0; i < fileList.length; i++) {
    if (file.name != fileList[i].name) {
      this.fileList.push({
        name: file.name,
        url: "",
        uid: file.uid
      });
    }
  }
  const files = { 0: file };
  this.readExcel(files);
}
let readExcel = (file) => {
  const fileReader = new FileReader();
  fileReader.onload = ev => {
    try {
      const data = ev.target.result;
      const workbook = read(data, { type: "binary" });
      const params = [];
      workbook.SheetNames.forEach(item => {
        this.tableData.push(utils.sheet_to_json(workbook.Sheets[item]));
      });
      if (this.tableData.length > 0) {
        for (const key in this.tableData[0][0]) {
          this.tableHead.push(key);
        }
      }
    } catch (e) {
      console.log("error:" + e);
      return false;
    }
  };
  fileReader.readAsBinaryString(file[0].raw);
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