<script setup>
import Chart from "./Chart.vue"
import { LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
let useList = ([
  LegendComponent,
  PieChart,
  LabelLayout
]);
const props = defineProps({
  option: Object
})
</script>

<template>
  <Chart :use-list="useList" :option="props.option"></Chart>
</template>

<style scoped>

</style>