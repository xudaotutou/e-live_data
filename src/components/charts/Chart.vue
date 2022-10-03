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
const { useList = [], option = {}} = defineProps({
  useList: Array,
  option: Object,
})

const container = ref(null)
let myChart
echarts.use([
  ...useList,
  SVGRenderer
])
// 抽离出来使得resize事件可以在全局挂载和卸载
const resizeDom = ()=>{
    myChart && myChart.resize()
  }

onMounted(() => {
  // container.value.el.id = chartId.toString()
  let dom = container.value
  myChart = echarts.init(dom)
  myChart && myChart.setOption(option, null, {
    renderer: 'svg'
  })
  window.addEventListener("resize", resizeDom)
})

watch(option, ()=>{
  myChart && option && myChart.setOption(option)
  console.log(option, 'ttt')
})
onBeforeUnmount(() => {
  myChart && myChart.dispose()
  window.removeEventListener("resize",resizeDom)
})
</script>

<template>
  <div ref="container" class="container"></div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>