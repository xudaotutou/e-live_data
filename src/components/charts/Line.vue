<script setup>
import Chart from './Chart.vue';
import { GridComponent, TitleComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';

/**
 * xData: 目录
 * yData：二维数组
 * title: 就是个标题
 * smooth：是否要丝滑
 */
const props = defineProps({
  xData:Array,
  yData:Array,
  title:String,
  smooth:Boolean
})
let useList = [GridComponent, LineChart, UniversalTransition,TitleComponent];

let option = ref({
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
      type:"line",
      smooth:props.smooth
    })
  })
  option.value.xAxis.data = props.xData 
})
</script>

<template>
  <Chart :use-list="useList" :option="option"></Chart>
</template>

<style scoped>

</style>