<script setup>
import Line from '@/components/charts/Line.vue';
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
    xAxis: {
      type: 'category',
      data: [
        "9-11",
        "9-12",
        "9-13",
        "9-14",
        "9-15",
        "9-16",
        "9-17",
        "9-18",
        "9-19",
        "9-20"
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
          100,
          140,
          230,
          100,
          120,
          220,
          210,
          150,
          130,
          120
        ]
      },
      {
        name: "活跃用户数",
        type: "line",
        data: [
          220,
          182,
          191,
          234,
          290,
          330,
          310,
          220,
          210,
          150
        ]
      },
      {
        name: "流失用户数",
        type: "line",
        data: [
          150,
          232,
          201,
          154,
          190,
          330,
          350,
          280,
          260,
          290
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
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00"
      ]
    },
    yAxis:{
      type:'value'
    },
    legend:{},
    "series": [
      {
        "data": [
          10,
          22,
          28,
          36,
          42,
          20,
          32,
          28,
          33,
          46,
          50
        ],
        "type": "line",
      },
      {
        "data": [
          10,
          12,
          28,
          26,
          12,
          20,
          22,
          28,
          13,
          26,
          20
        ],
        "type": "line",
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
      "50以下",
      "100-300",
      "300-500",
      "500以上"
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
        320,
        362,
        301,
        334
      ]
    },
    {
      "name": "B",
      "type": "bar",
      "stack": "total",
      "data": [
        120,
        132,
        101,
        134
      ]
    },
    {
      "name": "C",
      "type": "bar",
      "stack": "total",
      "data": [
        220,
        182,
        391,
        234
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
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
    },
    series: [{
      name: "偏好",
      type: 'pie',
      label: false,
      radius: ['40%', '70%'],
      data: [
        {
          "value": 335,
          "name": "家电"
        },
        {
          "value": 310,
          "name": "食品"
        },
        {
          "value": 234,
          "name": "美妆"
        },
        {
          "value": 135,
          "name": "衣服"
        },
        {
          "value": 1548,
          "name": "鞋包"
        },
        {
          "value": 135,
          "name": "书籍"
        }
      ]
    }]
  }
  // {
  //   tooltip: {
  //     trigger: 'item'
  //   },
  //   legend: {
  //     top: '5%',
  //     left: 'center'
  //   },
  //   series: [
  //     {
  //       name: 'Access From',
  //       type: 'pie',
  //       radius: ['40%', '70%'],
  //       avoidLabelOverlap: false,
  //       label: {
  //         show: false,
  //         position: 'center'
  //       },
  //       labelLine: {
  //         show: false
  //       },
  //       data: [
  //         { value: 1048, name: 'Search Engine' },
  //         { value: 735, name: 'Direct' },
  //         { value: 580, name: 'Email' },
  //         { value: 484, name: 'Union Ads' },
  //         { value: 300, name: 'Video Ads' }
  //       ]
  //     }
  //   ]
  // }
)
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
    <!-- <el-row>
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
    </el-row> -->
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