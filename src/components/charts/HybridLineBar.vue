<script setup>
import { LegendComponent , GridComponent  } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { LineChart } from 'echarts/charts';
import Chart from './Chart.vue';
const useList = ([BarChart, LineChart, LegendComponent, GridComponent]);

const props = defineProps({
  option:Object
})

</script>
  
<template>
  <Chart :option="props.option" :use-list="useList"></Chart>
</template>