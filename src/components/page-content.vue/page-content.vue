<template>
  <div class="page-content">
    <div class="header">
      <el-button>批量导入</el-button>
      <el-button><el-icon><Download /></el-icon>&nbsp;下载</el-button>
    </div>
    <el-table :data="tableData">
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
const props = defineProps({
    propList: Array,
    tableCount: Number,
    tableData: Array,
})

//分页器信息变了就获取新数据
const pageInfo = ref({ currentPage: 1 }); //默认第1页
watch(pageInfo, () => getPageData()); 

//获取新数据
// const getPageData = (queryInfo) => {
//   store.dispatch("system/getPageListAction", {
//     pageName: props.pageName, //pageUrl 部门是/department/list，角色是/role/list...
//     queryInfo: {
//       ...queryInfo, //把queryInfo的东西全部拿出来，一个一个条件都可以查询
//     },
//   });
// }; //不同页面就dispatch不同的东西，有不同的操作}
// getPageData(); //一调用就可以发送网络请求</script>

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