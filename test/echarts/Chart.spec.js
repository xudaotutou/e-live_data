import Chart from "@/components/charts/Chart.vue"
import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest";
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';

describe("chart container", () => {
  it.skip("mount chart and inject width/height", () => {
    let list = [GridComponent, LineChart, UniversalTransition];
    let option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    let wrapper = mount(Chart,{
      props:{
        useList:list,
        option
      }
    })
  })

  it.todo("render type: bar")
  it.todo("render type: line")
})