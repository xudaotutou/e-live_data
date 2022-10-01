<script setup>
import Chart from "@/components/charts/Chart.vue";
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';

let list = [GridComponent, LineChart, UniversalTransition];
let option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
let style = {
  width: "1200px",
  height: "1000px"
}
</script>

<template>
  <Chart :option="option" :useList="list"></Chart>
  <div>
    直播数据
  </div>
</template>

<style scoped>

</style>