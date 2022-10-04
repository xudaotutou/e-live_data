<script setup>
// import Bar from '@/components/charts/Bar.vue';

const overviewList = [
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
]

const orderData = {
  "title": "订单金额",
  "xData": [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月"
  ],
  "yData": [[
    100,
    140,
    224,
    100,
    139
  ]]
}

const saleSort = ref([
  {
    "ranking": 1,
    "tradeName": "用魔法打败魔法",
    "orderQuantity": 1500,
    "clickRate": 32214
  },
  {
    "ranking": 2,
    "tradeName": "王多鱼",
    "orderQuantity": 1500,
    "clickRate": 32214
  },
  {
    "ranking": 3,
    "tradeName": "小李子",
    "orderQuantity": 1500,
    "clickRate": 32214
  },
  {
    "ranking": 4,
    "tradeName": "用魔法打败魔法",
    "orderQuantity": 1500,
    "clickRate": 32214
  },
  {
    "ranking": 5,
    "tradeName": "用魔法打败魔法",
    "orderQuantity": 1500,
    "clickRate": 32214
  },
  {
    "ranking": 6,
    "tradeName": "用魔法打败魔法",
    "orderQuantity": 1500,
    "clickRate": 32214
  },
  {
    "ranking": 7,
    "tradeName": "用魔法打败魔法",
    "orderQuantity": 1500,
    "clickRate": 32214
  },
  {
    "ranking": 8,
    "tradeName": "用魔法打败魔法",
    "orderQuantity": 1500,
    "clickRate": 32214
  },
  {
    "ranking": 9,
    "tradeName": "用魔法打败魔法",
    "orderQuantity": 1500,
    "clickRate": 32214
  },
  {
    "ranking": 10,
    "tradeName": "用魔法打败魔法",
    "orderQuantity": 1500,
    "clickRate": 32214
  }
])

const saleKey = [
  ["ranking", "排名"],
  ["tradeName", "商品名称"],
  ["orderQuantity", "订单量"],
  ["clickRate", "点击量"]
]

const userData = [
  {
    // 人数
    name: "人数",
    data: [1000, 129],
    type: "line",
    
  }, {
    // 转粉率
    name:"转粉率",
    data: [0.67,0.76],
    yAxisIndex: 1,
    type: "bar",
  }, {
    // 互动率
    name: "互动率",
    data: [0.67, 0.76],
    yAxisIndex: 2,
    type: "bar",
  }
]
const _userData = [
  {
    ts: "",
    conversion: 0.66,
    interactive: 0.77,
    peopleCount: 1000
  }, {
    ts: "",
    conversion: 0.67,
    interactive: 0.76,
    peopleCount: 129
  }
]
const userY =  [
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
      name: "转粉率",
      position: 'right',
      offset: 80,
      axisLabel: {
        formatter: '{value} %'
      }
    },
    {
      type: 'value',
      name: "互动率",
      position: 'right',
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ]
</script>

<template>
  <div class="container">
    <el-card class="card-box first-row">
      <span class="overview-title">直播分析</span>
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
              <Bar :title="orderData.title" :x-data="orderData.xData" :y-data="orderData.yData"></Bar>
            </div>
            <div class="order-chart">
              <Line :title="orderData.title" :x-data="orderData.xData" :y-data="orderData.yData" :area="false"></Line>
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
        <HybridLineBar :y-data="userData" :y-axis="userY"></HybridLineBar>
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
}

.overview-info-title {
  font-size: 1vw;
}

.overview-info {
  margin: 0 1vw;
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
  height: 10vh;
}

.second-row {
  height: 45vh;
  margin: 8px 0;
}

.third-row {
  height: 30vh;
  margin-top: 10px;
}

/* .midle-row-container {
  height: 100%;
} */
.user-chart {
  height: 30vh;
}
</style>