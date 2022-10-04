<script setup>
import { GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { LineChart } from 'echarts/charts';
import Chart from './Chart.vue';
const useList = ([GridComponent, BarChart, TitleComponent, LineChart, TooltipComponent, LegendComponent]);

/**
 * xData: 目录
 * yData：原先的配置数组[{}{}]
 * title: 就是个标题
 * yAxis:[{type:data, position:'left'}]
 */
const props = defineProps({
  xData: Array,
  yData: Array,
  title: String,
  yAxis: Array
})

const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: props.yAxis.map(v=>v.name),
  },
  color: ["#e9951a"],
  title: {
    text: ""
  },
  xAxis: {
    type: 'category',
    data: props.xData
  },
  yAxis: props.yAxis,
  series: [
    {
      data: [],
      type: 'line',
      smooth: props.smooth
    }
  ]
})
if (props.title) {
  option.value.title.text = props.title
}
watchEffect(() => {
  // option.value.series[0].data = props.yData
  option.value.series.length = 0
  props.yData.length > 0 && props.yData.forEach((yd) => {
    option.value.series.push(yd)
  })
  option.value.xAxis.data = props.xData
})
</script>
  
<template>
  <Chart :option="option" :use-list="useList"></Chart>
</template>