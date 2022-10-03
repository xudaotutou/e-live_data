<script setup>
import { GridComponent, TitleComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import Chart from './Chart.vue';
const useList = ([GridComponent, BarChart,TitleComponent]);

/**
 * xData: 目录
 * yData：二维数组
 * title: 就是个标题
 */
 const props = defineProps({
  xData:Array,
  yData:Array,
  title:String,
})

const option = ref({
  title:{
    text:""
  },
  xAxis: {
    type: 'category',
    data: props.xData
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: props.yData,
      type: 'line',
      smooth: props.smooth
    }
  ]
})
if(props.title){
  option.value.title.text = props.title
}
watchEffect(()=>{
  // option.value.series[0].data = props.yData
  option.value.series.length = 0
  props.yData.forEach((yd)=>{
    option.value.series.push({
      data:yd,
      type:"bar",
    })
  })
  option.value.xAxis.data = props.xData 
})
</script>

<template>
<Chart :option="option" :use-list="useList"></Chart>
</template>

<style scoped>

</style>