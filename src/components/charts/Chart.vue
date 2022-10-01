<script setup>
import * as echarts from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
// import { GridComponent } from 'echarts/components';
// import { LineChart } from 'echarts/charts';
// import { UniversalTransition } from 'echarts/features';

// echarts.use([GridComponent, LineChart, SVGRenderer, UniversalTransition]);

// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [150, 230, 224, 218, 135, 147, 260],
//       type: 'line'
//     }
//   ]
// };

// option && myChart.setOption(option);
const {useList=[], option={}, style={width:"full",height:"full"}} = defineProps({
  useList:Array,
  option:Object,
  style:Object
})

const container = ref(null)
let myChart
echarts.use([
  ...useList,
  SVGRenderer
])
onMounted(()=>{
  // container.value.el.id = chartId.toString()
  let dom = container.value
  myChart = echarts.init(dom)
  myChart && myChart.setOption(option, null, {
      renderer: 'svg'
    })
})

onBeforeUnmount(()=>{
  myChart && myChart.dispose()
})
</script>

<template>
<div ref="container" :style="style">???</div>
</template>

<style scoped>

</style>