<script setup>
import Line from '@/components/charts/Line.vue';
import {getNowRoom }from "@/utils/api/chartData.js"


const option = ref({
  color: ["#e9951a"],
  title: {
    text: "UV价值曲线"
  },
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: {
      data: [],
      type: 'line',
      smooth: true,
      areaStyle: {}
    }
  
})
const overviewList = ref([
  { name: "直播人数", value: 123 },
  { name: "关注人数", value: 123 },
  { name: "浏览量", value: 123 }
])
const historyLive = ref([
])
const historyKey = [
  ["liveTime", "时间"],
  ["liveContent", "内容主题"],
  ["liveDuration", "持续时长"],
  ["views", "浏览量"],
  ["orderQuantity", "订单量"],
  ["orderAmount", "订单金额"]
]
let user = ref("xxx")

// {
//   "code": 200,
//   "user": {
//     "userName": "111",
//     "liveTimes": 47,
//     "followQuantity": 468,
//     "views": 15647
//   },
//   "uv": {
//     "titleText": "UV价值曲线",
//     "xAxisData": [
//       "9-11",
//       "9-12",
//       "9-13",
//       "9-14",
//       "9-15",
//       "9-16",
//       "9-17",
//       "9-18",
//       "9-19",
//       "9-20",
//       "9-21",
//       "9-22"
//     ],
//     "seriesData": [
//       100,
//       140,
//       230,
//       100,
//       120,
//       220,
//       210,
//       150,
//       130,
//       120,
//       190,
//       220
//     ]
//   },
//   "historyLive": [
//     {
//       "id": 1,
//       "liveTime": "2022-9-30",
//       "timeSlot": "16:30~18:47",
//       "liveContent": "疯狂星期四宠粉大促",
//       "liveDuration": "2小时10分钟",
//       "views": 15674778,
//       "orderQuantity": 34678,
//       "orderAmount": 3147856
//     }
//   ]
// }
onBeforeMount(()=>getNowRoom().then(res=>{
  console.log(res)
  historyLive.value = res.historyLive
  overviewList.value[0].value = res.user.liveTimes
  overviewList.value[1].value = res.user.followQuantity
  overviewList.value[2].value = res.user.views
  user.value = res.user.userName
  
  // option.value.xAxis.data.length = 0
  // option.value.xAxis.data.push(...res.uv.xAxisData)
  option.value.xAxis.data = res.uv.xAxisData
  option.value.series.data = res.uv.seriesData
  // option.value.series.data.push(...res.uv.seriesData)
  console.log('res',res.uv.xAxisData, 'option',option.value)
}))
// setInterval(()=>{
//   option.value.series.data = option.value.series.data.map(_=>_ + 1)
// },1000)
</script>

<template>
  <div class="room-container">
    <el-card class="box-card first-card">
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
        <Line :option="option"></Line>
      </div>
    </el-card>
    <el-card class="box-card second-card">
      <div class="table-container">

        <h2>历史直播</h2>
        <el-table :data="historyLive" :default-sort="{ order: 'descending' }" style="width: 100%" max-height="450">
          <el-table-column v-for=" obj in historyKey" :key="obj[1]" :prop="obj[0]" :label="obj[1]" sortable />
        </el-table>

      </div>
    </el-card>
  </div>
</template>

<style scoped>
.room-container {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  height: 90vh;
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
  height: 25vh;
  margin: 0 auto;
}

.first-card {
  height: 50vh;
}
.box-card {
  margin: 0.5vw;
}
.second-card {
  height: 50vh;
}
</style>