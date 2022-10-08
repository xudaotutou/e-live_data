<script setup>
import * as echarts from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { TitleComponent, TooltipComponent} from 'echarts/components'
// option && myChart.setOption(option);
const { useList = [], option = {} } = defineProps({
  useList: Array,
  option: Object,
})

const container = ref(null)
let myChart
echarts.use([
  ...useList,
  SVGRenderer,
  TitleComponent,
  TooltipComponent
])
// 抽离出来使得resize事件可以在全局挂载和卸载
const resizeDom = () => {
  myChart && myChart.resize()
}

onMounted(() => {
  // container.value.el.id = chartId.toString()
  let dom = container.value
  myChart = echarts.init(dom)
  myChart && myChart.setOption({
    tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
    ...option
  }, null, {
    renderer: 'svg'
  })
  window.addEventListener("resize", resizeDom)
})

watch(option, (newData) => {
  myChart && newData && myChart.setOption(newData,true)
}, { 
  deep:true
})
onBeforeUnmount(() => {
  myChart && myChart.dispose()
  window.removeEventListener("resize", resizeDom)
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