<template>
  <div class="order-data">
    <LdCard v-bind="cardConfig"></LdCard>
    <PageSearch v-bind="searchConfig">
    </PageSearch>
    <div class="header">
      <el-button
        >批量导入</el-button
      >
      <el-button
        ><el-icon><Download /></el-icon>下载</el-button
      >
    </div>
    <el-table :data="tableData">
      <template v-for="propItem in contentConfig" :key="propItem.prop">
        <el-table-column v-if="propItem.prop === 'operation'" v-bind="propItem">
          <a>查看</a>
        </el-table-column>
        <el-table-column v-else v-bind="propItem">
        </el-table-column>
        </template>
    </el-table>
    <div class="footer">
      <el-pagination
        layout="total, prev, pager, next"
        :total="tableCount"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script setup>
import LdCard from "@/base-ui/card";

let cardConfig = {
  colLayout:{
    span: 8,
  },
  cardItems: [{title:"总订单数", quantity: "3547", unit:'单'}, {title:"总交易额", quantity: "133547", unit:'单'}, {title:"平均客单价", quantity: "347", unit:'元'}]
}
const searchConfig ={
  title: '查询商品',
  colLayout:{
    span: 8,
  },
  labelWidth: "80px",
  formItems: [
    {
      field: 'goodsId',
      label: "商品编号",
      type: "input",
      placeholder: "请输入商品编号"
    },
    {
      field: 'name',
      label: "商品名称",
      type: "input",
      placeholder: "请输入商品名称"
    },
    {
      field: 'category',
      label: "商品类型",
      type: "select",
      placeholder: "全部",
      options: [
        { title: "家电", value: 0 },
        { title: "数码", value: 1 },
        { title: "美妆", value: 2 },
        { title: "服饰", value: 3 },
      ]
    },
    {
      field: 'price',
      label: "价格区间",
      type: "select",
      placeholder: "全部",
      options: [
        { title: "0~50", value: 1 },
        { title: "50~200", value: 2 },
        { title: "200~500", value: 3 },
        { title: "500~1000", value: 4 },
        { title: "1000以上", value: 5 },
      ]
    },
    {
      field: 'link',
      label: "商品链接",
      type: "input",
      placeholder: "请输入商品链接"
    },
    {
      field: 'status',
      label: "状态",
      type: "select",
      placeholder: "全部",
      options: [
        { title: "已下架", value: 1 },
        { title: "未上架", value: 0 },
      ]
    }
  ]
}
let tableCount = 10
let tableData = [{
            "number": "232",
            "link": "iPhone14",
            "userName": "张三",
            "price": 5999,
            "createTime": "2022-9-27",
            "transactionTime": "-",
            "state": "已取消"
        },
        {
            "number": "233",
            "link": "iPhone14",
            "userName": "李四",
            "price": 5999,
            "createTime": "2022-9-27 10:20",
            "transactionTime": "2022-9-27 10:20",
            "state": "已完成"
        }]
let contentConfig = [
    { prop: "number", label: "订单编号", minWidth: "100", align: 'center' },
    { prop: "link", label: "订单链接", minWidth: "100" },
    { prop: "userName", label: "用户名称", minWidth: "100" },
    { prop: "price", label: "订单金额", minWidth: "100", sortable: true },
    { prop: "createTime", label: "创建时间", minWidth: "150", sortable: true },
    { prop: "transactionTime", label: "交易时间", minWidth: "150" },
    { prop: "state",label: "状态",minWidth: "120"},
    {
      prop: "operation",
      label: "操作",
      minWidth: "120",
    },
  ]
</script>

<style scoped>
.page-search {
  border-top: 20px solid #f0f2f5
}
</style>