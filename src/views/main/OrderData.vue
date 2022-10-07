<template>
  <div class="order-data">
    <LdCard v-bind="cardConfig" :quantity="quantity"></LdCard>
    <PageSearch v-bind="searchConfig" @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick">
    </PageSearch>
    <PageContent v-bind="contentConfig" :tableData="listData">
    </PageContent>
  </div>
</template>

<script setup>
import LdCard from "@/base-ui/card";
import { getOrderData } from '@/utils/api/orderData'
import Util from "@/utils/filterUtils"

let listData = ref([])
let quantity = ref({})
getOrderData().then(res=>{
listData.value = res.data
quantity.value = res.product
})

const handleResetClick = () => {
  getOrderData().then(res=>{
  listData.value = res.data
  quantity.value = res.product
  })
}
const handleQueryClick = (queryInfo) => {
  getOrderData().then(res=>{
  listData.value = res.data
  quantity.value = res.product
  })
  console.log(queryInfo)
  // let 
}
let cardConfig = {
  colLayout:{
    span: 8,
  },
  cardItems: [{title:"总订单数", key: "totalOrders", unit:'单'}, {title:"总交易额", key: "totalTransactions", unit:'单'}, {title:"平均客单价", key: "averagePrice", unit:'元'}]
}
const searchConfig ={
  title: '订单查询',
  colLayout:{
    span: 8,
  },
  labelWidth: "80px",
  formItems: [
    {
      field: 'id',
      label: "订单编号",
      type: "input",
      placeholder: "请输入订单编号"
    },
    {
      field: 'link',
      label: "订单链接",
      type: "input",
      placeholder: "请输入订单链接"
    },
    {
      field: 'name',
      label: "用户名称",
      type: "input",
      placeholder: "请输入用户名称",
    },
    {
      field: 'price',
      label: "订单金额",
      type: "select",
      placeholder: "请选择金额范围",
      options: [
        { title: "0~50", value: 1 },
        { title: "50~200", value: 2 },
        { title: "200~500", value: 3 },
        { title: "500~1000", value: 4 },
        { title: "1000以上", value: 5 },
      ]
    },
    {
      field: 'createTime',
      label: "创建时间",
      type: "date",
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
const contentConfig ={
  tableCount: 10,
  propList: [
    { prop: "number", label: "订单编号", minWidth: "100", align: 'center' },
    { prop: "link", label: "订单链接", minWidth: "100" },
    { prop: "userName", label: "用户名称", minWidth: "100" },
    { prop: "price", label: "订单金额", minWidth: "120", sortable: true },
    { prop: "createTime", label: "创建时间", minWidth: "150", sortable: true },
    { prop: "transactionTime", label: "交易时间", minWidth: "150" },
    { prop: "state",label: "状态",minWidth: "120"},
    {
      prop: "operation",
      label: "操作",
      minWidth: "120",
    },
  ]
}
</script>

<style scoped>
.page-search {
  border-top: 15px solid #f0f2f5;
}
.page-content {
  border-top: 15px solid #f0f2f5;
  margin-bottom: 40px
}
</style>