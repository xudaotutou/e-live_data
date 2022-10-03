import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import SmoothLine from "@/components/charts/Line.vue"
import Bar from "@/components/charts/Bar.vue"
// describe("chart container", () => {
//   // it.skip("mount chart and inject width/height", () => {
//   //   let list = [GridComponent, LineChart, UniversalTransition];
//   //   let option = {
//   //     xAxis: {
//   //       type: 'category',
//   //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   //     },
//   //     yAxis: {
//   //       type: 'value'
//   //     },
//   //     series: [
//   //       {
//   //         data: [150, 230, 224, 218, 135, 147, 260],
//   //         type: 'line'
//   //       }
//   //     ]
//   //   };
//   //   let wrapper = mount(Chart,{
//   //     props:{
//   //       useList:list,
//   //       option
//   //     }
//   //   })
//   // })
//   it.todo("render type: bar")
//   it.todo("render type: line")
// })

describe("line",()=>{
  it("mount", ()=>{
    const xData =  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const yData =  [820, 932, 901, 934, 1290, 1330, 1320]
    let wrapper = mount(SmoothLine,{
      props:{
        xData,
        yData
      }
    })
    expect(wrapper.find("svg").exists()).equal(true)
  })
})
describe("bar",()=>{
  it("mount", ()=>{
    const xData =  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const yData =  [820, 932, 901, 934, 1290, 1330, 1320]
    let wrapper = mount(Bar,{
      props:{
        xData,
        yData
      }
    })
    expect(wrapper.find("svg").exists()).equal(true)
  })
})