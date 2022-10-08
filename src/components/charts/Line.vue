<script setup>
import Chart from './Chart.vue';
import { GridComponent, LegendComponent} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';

/**
 * xData: 目录
 * yData：二维数组
 * title: 就是个标题
 * smooth：是否要丝滑
 */
const props = defineProps({
  option:Object
})
let useList = [GridComponent, LineChart, UniversalTransition, LegendComponent];
</script>

<template>
  <Chart :use-list="useList" :option="props.option"></Chart>
</template>

<style scoped>

</style>