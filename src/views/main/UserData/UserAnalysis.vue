<script setup>
import Line from '@/components/charts/Line.vue';
import { getUserAnalysis } from '../../../utils/api/chartData';
const circleData = ref([
  { name: "转化率", value: 40 },
  { name: "增长率", value: 30 },
  { name: "流失率", value: 60 }
])

const userOverview =
  ref({
    title: {
      text: "用户总览"
    },
    legend: {},
    tooltip:{
      trigger:"axis"
    },
    xAxis: {
      type: 'category',
      data: [
      ]
    },
    yAxis: [
      {
        type: 'value',
        name: "用户数",
      }
    ],
    series: [
      {
        name: "总用户数",
        type: "line",
        data: [
        ]
      },
      {
        name: "活跃用户数",
        type: "line",
        data: [
        ]
      },
      {
        name: "流失用户数",
        type: "line",
        data: [
        ]
      }
    ]
  })

const dailyDataOption = ref(
  {
    "title": {
      text: "日平均时段指标"
    },
    "xAxis": {
      type: "category",
      data: [
      ]
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%'
      }
    },
    tooltip: {
      trigger: 'axis',
      // formatter: '{b0}<br/>{a0}: {c0}<br />{a1}: {c1}'
      valueFormatter(str) { return `${str}%` }
    },
    legend: {},
    "series": [
      {
        "data": [
        ],
        "type": "line",
        name: "转化率"
      },
      {
        "data": [
        ],
        "type": "line",
        name: "增长率"
      }
    ]
  })
const consumeList = ref({
  "title": {
    text: "消费能力区间"
  },
  "yAxis": {
    type: "category",
    data: [
    ]
  },
  "xAxis": [
    {
      type: 'value'
    }
  ],
  legend: {},
  "series": [
    {
      "name": "A",
      "type": "bar",
      "stack": "total",
      "data": [
      ]
    },
    {
      "name": "B",
      "type": "bar",
      "stack": "total",
      "data": [
      ]
    },
    {
      "name": "C",
      "type": "bar",
      "stack": "total",
      "data": [
      ]
    }
  ]
})
const consumeListCircle = ref(
  {
    "title": {
      text: "用户偏好"
    },
    tooltip: {
      trigger: 'item',
      // formatter: '{a} <br/>{b}: {c} ({d}%)'
      valueFormatter(str) { return `${str}%` }
    },
    legend: {
    },
    series: {
      name: "偏好",
      type: 'pie',
      label: false,
      radius: ['40%', '70%'],
      data: [
      ]
    }
  }
)

onBeforeMount(() => {
  getUserAnalysis().then(res => {
    circleData.value[1].value =  res.overview.growthRate
    circleData.value[0].value = res.overview.conversionRate
    circleData.value[2].value = res.overview.lossRate
  
    userOverview.value.xAxis.data = res.overview.xAxisData
    res.overview.seriesData.forEach((v,i)=>{
      userOverview.value.series[i].data = v.data
    })

    consumeList.value.yAxis.data = res.consume.yAxisData
    res.consume.seriesData.forEach((v, i)=>{
      consumeList.value.series[i].data = v.data
    })

    consumeListCircle.value.series.data = res.preference.seriesData

    dailyDataOption.value.xAxis.data = res.averageIndex.xAxisData
    res.averageIndex.seriesData.forEach((v,i)=>{
      console.log(v)
      dailyDataOption.value.series[i].data = v.data
    })
  })
})
</script>

<template>
  <div>
    <el-row class="first-row">
      <el-col :span="3">
        <el-card class="box-card">
          <div v-for="kv in circleData" :key="kv.name" class="progress-container">
            <el-progress type="circle" :percentage="kv.value" :width="80" />
            <div>{{kv.name}}</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="21">
        <el-card class="box-card">
          <div class="overview-line">
            <Line :option="userOverview"></Line>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card class="box-card">
          <div class="consume-bar">
            <Bar :option="consumeList"></Bar>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div class="consume-circle">
            <Circle :option="consumeListCircle"></Circle>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="third-row">
      <el-col :span="24">
        <el-card class="box-card">
          <div class="daily-line">
            <Line :option="dailyDataOption"></Line>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.overview-line {
  height: 40vh;
  width: 100%;
}

.progress-container {
  margin-bottom: 2vh;
}

.first-row {
  height: 50vh;
  margin-bottom: 5px;
}

.third-row {
  margin-top: 5px;
}

.box-card {
  margin: 5px;
  height: 100%;
}

.consume-bar,
.consume-circle {
  height: 30vh;
}

.daily-line {
  height: 30vh;
}
</style>