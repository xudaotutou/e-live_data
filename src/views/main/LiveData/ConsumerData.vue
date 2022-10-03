<script setup>
import Bar from '../../../components/charts/Bar.vue';
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
</script>

<template>
  <el-card class="card-box">
    <span class="overview-title">直播分析</span>
    <el-row>
      <el-col :span="6" v-for="(kv,i) in overviewList" :key="kv.name" class="overview">
        <!-- <el-card class="overview-card" :class="[kv.cardClass]"> -->
        <div class="overview-info " :class="[kv.cardClass]">
          <h2>{{kv.name}}</h2>
          <div class="overview-value">
            <div>{{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(kv.value)}}</div>
            <div v-if="kv.delta > 0">增长了{{kv.delta}}</div>
          </div>
        </div>
        <!-- </el-card> -->

      </el-col>
    </el-row>
  </el-card>
  <el-row>
    <el-col :span="16">
      <el-card class="card-box ">
        <div class="order-box">
          <div class="order-chart">
            <Bar :title="orderData.title" :x-data="orderData.xData" :y-data="orderData.yData"></Bar>
          </div>
          <div class="order-chart">
            <Bar :title="orderData.title" :x-data="orderData.xData" :y-data="orderData.yData"></Bar>
          </div>
        </div>

      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="card-box"></el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
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

.overview-info {
  margin: 0.5vw;
  height: 10vw;
  padding: 0.5vw;
  height: 8vw;
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  justify-content: flex-start;
}

.overview-title {
  font-size: large;
}

.overview-value {
  margin-top: 1vw;
}

.overview-value :nth-child(1) {
  font-size: xx-large;
  margin-bottom: 10px;
}

.card-box {
  margin: 0.2vw;
}

.order-box {
  display: flex;
}

.order-chart {
  height: 20vw;
  width: 50%;
}
</style>