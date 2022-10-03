<script setup>
import Line from '@/components/charts/Line.vue';

const xData = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
const yData = ref([[150, 230, 224, 218, 135, 147, 260]])
onMounted(() => {
  // setInterval(()=>{
  //   console.log('hhh')
  //   yData.value = yData.value.map(x=>x *1.1)
  // },2000)
})
const overviewList = [
  { name: "直播人数", value: 123 },
  { name: "关注人数", value: 123 },
  { name: "浏览量", value: 123 }
]
const historyLive = [
  {
    "liveTime": "2022-9-30",
    "liveContent": "疯狂星期四宠粉大促",
    "liveDuration": "2小时10分钟",
    "views": 15674778,
    "orderQuantity": 34678,
    "orderAmount": 3147856
  },
  {
    "liveTime": "2022-9-29"
    ,
    "liveContent": "疯狂星期四宠粉大促"
    ,
    "liveDuration": "2小时9分钟"
    ,
    "views": 15674778
    ,
    "orderQuantity": 34678
    ,
    "orderAmount": 3147856
  },
]
const historyKey = [
  ["liveTime", "时间"],
  ["liveContent", "内容主题"],
  ["liveDuration", "持续时长"],
  ["views", "浏览量"],
  ["orderQuantity", "订单量"],
  ["orderAmount", "订单金额"]
]
let user = "xxx"
</script>

<template>
  <div class="container">
    <el-row>
      <el-col :span="24">
        <h2>{{user}}的直播间</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" v-for="(kv,i) in overviewList" :key="kv.name" class="overview">
        <el-icon>
          <User />
        </el-icon>
        <div class="overview-info">
          <div>{{kv.name}}</div>
          <div><b>{{kv.value}}</b></div>
        </div>
      </el-col>
    </el-row>
    <div class="chart-container">
      <Line :xData="xData" :yData="yData" title="UV价值曲线" :smooth="true"></Line>
    </div>
    <div class="table-container">
      <h2>历史直播</h2>
      <el-table :data="historyLive" :default-sort="{ order: 'descending' }" style="width: 100%" max-height="450">
        <el-table-column v-for=" obj in historyKey" :key="obj[1]" :prop="obj[0]" :label="obj[1]" sortable />
      </el-table>
    </div>
  </div>
  <div>

  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 20vw;
  margin: 0 auto;
}

.overview {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vw;
}

.overview .el-icon {
  width: 3vw;
  height: 3vw;
  border-radius: 40%;
  background: #f87b21;
  font-size: larger;
  color: #fefcfb;
}

.overview-info {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin-left: 1vw;
}

.table-container,
.chart-container {
  width: 70vw;
  margin: 0 auto;
}
</style>