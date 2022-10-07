<template>
  <div class="product-data">
    <LdCard v-bind="cardConfig" :quantity="quantity"></LdCard>
    <PageSearch v-bind="searchConfig">
    </PageSearch>
    <PageContent v-bind="contentConfig" :tableData="listData">
    </PageContent>
  </div>
</template>

<script setup>
import LdCard from "@/base-ui/card";
import { getProductData } from '@/utils/api/productData.js'
let listData = ref([])
let quantity = ref({})
getProductData().then(res=>{
listData.value = res.data
quantity.value = res.product
})

const handleResetClick = () => {
  getProductData().then(res=>{
  listData.value = res.data
  quantity.value = res.product
  })
}
const handleQueryClick = (queryInfo) => {
  getProductData().then(res=>{
  listData.value = res.data
  quantity.value = res.product
  })
}

let cardConfig = {
  colLayout:{
    span: 8,
  },
  cardItems: [{title:"上架商品", key: "onlineGoods", unit:'件'}, {title:"已下架商品", key: "offlineGoods", unit:'件'}, {title:"待上架商品", key: "goods", unit:'件'}]
}
const searchConfig ={
  title: '查询商品',
  colLayout:{
    span: 8,
  },
  labelWidth: "80px",
  formItems: [
    {
      field: 'number',
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
      field: 'type',
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
const contentConfig ={
  tableCount: 10,
  propList: [
    { prop: "number", label: "商品编号", minWidth: "100", align: 'center' },
    { prop: "name", label: "商品名称", minWidth: "100" },
    { prop: "link", label: "链接", minWidth: "100" },
    { prop: "type", label: "类型", minWidth: "100" },
    { prop: "price", label: "价格", minWidth: "100", sortable: true },
    { prop: "clickRate", label: "曝光点击率", minWidth: "120", sortable: true },
    { prop: "orderPlacementRate", label: "点击下单率", minWidth: "120", sortable: true },
    { prop: "state",label: "状态",minWidth: "100"},
    { prop: "uptime", label: "创建时间", minWidth: "150", sortable: true },
    { prop: "downtime", label: "下架时间", minWidth: "150" },
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