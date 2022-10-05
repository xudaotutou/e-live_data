<script setup>
import { GridComponent, TitleComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import Chart from './Chart.vue';
const useList = ([GridComponent, BarChart, TitleComponent]);

/**
 * xData: 目录
 * yData：二维数组
 * title: 就是个标题
 */
 const props = defineProps({
  option:Object
})


</script>

<template>
<Chart :option="props.option" :use-list="useList"></Chart>
</template>

<style scoped>

</style>