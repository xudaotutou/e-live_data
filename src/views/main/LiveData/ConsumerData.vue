<script setup>
// import Bar from '@/components/charts/Bar.vue';
import {getConsumer} from "@/utils/api/chartData.js"
const overviewList = ref([
  {
    name: "GMV",
    value: 12256,
    delta: 0,
    cardClass: "overview-GMV-Card"
  },
  {
    name: "PCU",
    value: 12256,
    delta: 0,
    cardClass: "overview-PCU-Card"
  },
  {
    name: "ACU",
    value: 12256,
    delta: 114,
    cardClass: "overview-ACU-Card"
  },
  {
    name: "平均停留时长",
    value: 12256,
    delta: 112,
    cardClass: "overview-AVT-Card"
  }
])
const orderCountOption = ref({
  color: ["#e9951a"],
  title: {
    text: "订单数量"
  },
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: 
    {
      data: [],
      type: 'line',
    }
})
const orderValueOption = ref({
  color: ['#e9951a'],
  title: {
    text: "订单金额"
  },
  xAxis: {
    type: 'category',
    data: [
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: 
    {
      data: [
      ],
      type: 'bar',
    }
})

const saleSort = ref([])

const saleKey = [
  ["ranking", "排名"],
  ["tradeName", "商品名称"],
  ["orderQuantity", "订单量"],
  ["clickRate", "点击量"]
]

const userDataOption = ref({
  color: ["#e9951a", "#f39423", "#f9c78b"],
  title: {
    text: "用户数据分析"
  },
  tooltip:{
    trigger:'axis',
  },
  legend:{
  },
  xAxis: {
    type: 'category',
    data:[]
  },
  yAxis: [
    {
      type: 'value',
      name: "人数",
      position: 'left',
      axisLabel: {
        formatter: '{value}'
      },
    },
    {
      type: 'value',
      name: "转粉率/互动率",
      position: 'right',
      axisLabel: {
        formatter: '{value} %'
      }
    },
  ],
  series: [
    {
      // 人数
      name: "人数",
      data: [122,333],
      type: "line",
    }, {
      // 转粉率
      name: "转粉率",
      data: [33,22],
      yAxisIndex: 1,
      type: "bar",
    }, {
      // 互动率
      name: "互动率",
      data: [22, 89],
      yAxisIndex: 1,
      type: "bar",
    }
  ]
})

onBeforeMount(()=>getConsumer().then(res=>{
    // 蠢了点
    overviewList.value[0].value = res.liveAnalysis.gmv
    overviewList.value[1].value = res.liveAnalysis.pcu
    overviewList.value[2].value = res.liveAnalysis.acu.value
    overviewList.value[2].delta = res.liveAnalysis.acu.lastTime
    overviewList.value[3].value = res.liveAnalysis.averageTime.value
    overviewList.value[3].delta = res.liveAnalysis.averageTime.lastTime

    orderCountOption.value.xAxis.data = res.orderQuantity.xAxisData
    orderCountOption.value.series.data = res.orderQuantity.seriesData

    orderValueOption.value.xAxis.data = res.orderAmount.xAxisData
    orderValueOption.value.series.data = res.orderAmount.seriesData

    saleSort.value = res.topSale

    // userDataOption.value.xAxis.data = res.orderAmount.xAxisData
    // userDataOption.value.series.data = res.orderAmount.seriesData
}))
</script>

<template>
  <div class="container">
    <el-card class="card-box first-row">
      <div class="overview-title">直播分析</div>
      <el-row>
        <el-col :span="6" v-for="(kv,i) in overviewList" :key="kv.name" class="overview">
          <!-- <el-card class="overview-card" :class="[kv.cardClass]"> -->
          <div class="overview-info " :class="[kv.cardClass]">
            <div class="overview-info-title">{{kv.name}}</div>
            <div class="overview-value">
              <div>{{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(kv.value)}}</div>
              <div v-if="kv.delta > 0">增长了{{kv.delta}}</div>
            </div>
          </div>
          <!-- </el-card> -->

        </el-col>
      </el-row>
    </el-card>
    <el-row class="second-row">
      <el-col :span="16">
        <el-card class="card-box ">
          <div class="order-box midle-row-container">
            <div class="order-chart">
              <Bar :option="orderCountOption"></Bar>
            </div>
            <div class="order-chart">
              <Line :option="orderValueOption"></Line>
            </div>
          </div>

        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card-box">
          <div class="midle-row-container">
            <h2>商品销量榜单</h2>
            <el-table :data="saleSort" :default-sort="{ order: 'descending' }" style="width: 100%" max-height="300">
              <el-table-column v-for=" obj in saleKey" :key="obj[1]" :prop="obj[0]" :label="obj[1]" sortable />
            </el-table>
          </div>
        </el-card>

      </el-col>
    </el-row>
    <el-card class="third-row card-box">
      <div class="user-chart">
        <HybridLineBar :option="userDataOption"></HybridLineBar>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
}

.overview-GMV-Card {
  background-image: linear-gradient(to top, #fff7e9, #fff);
}

.overview-PCU-Card {
  background-image: linear-gradient(to top, #f6cc9a, #fef7ec);
}

.overview-ACU-Card {
  background-image: linear-gradient(to top, #fcedd8, #fff);
}

.overview-AVT-Card {
  background-image: linear-gradient(to top, #f3f3f3, #fff);
}

.overview-title {
  font-size: large;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
}

.overview-info-title {
  font-size: 1vw;
  margin-bottom: 1vh;
}

.overview-info {
  margin: 0 1vw 0 0;
  height: 100%;
  padding: 1vh 1vw;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
}



.overview-value {
  font-size: 0.8vw;
  margin-top: 2px;
}

.overview-value :nth-child(1) {
  font-size: 1.4vw;
  margin-bottom: 10px;
}

.card-box {
  height: 100%;
  margin: 4px;
}

.order-box {
  display: flex;
}

.order-chart {
  height: 40vh;
  width: 50%;
}

.first-row {
  height: 22vh;
}

.second-row {
  height: 45vh;
  margin: 8px 0;
}

.third-row {
  height: 40vh;
  margin-top: 10px;
}

/* .midle-row-container {
  height: 100%;
} */
.user-chart {
  height: 30vh;
}
</style>