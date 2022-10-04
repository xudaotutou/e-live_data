<template>
  <div class="order-data">
    <ld-card v-bind="cardConfig">
    </ld-card>
    <page-search v-bind="searchConfig">
    </page-search>
  </div>
</template>

<script>
import LdCard from "@/base-ui/card";
export default {
  components: {
    LdCard,
  }
}

</script>
<script setup>

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
      label: "商品编号",
      type: "input",
      placeholder: "请输入商品编号"
    },
    {
      label: "商品名称",
      type: "input",
      placeholder: "请输入商品名称"
    },
    {
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
      label: "商品链接",
      type: "input",
      placeholder: "请输入商品链接"
    },
    {
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

</script>

<style scoped>
.page-search {
  border-top: 20px solid #f0f2f5
}
</style>