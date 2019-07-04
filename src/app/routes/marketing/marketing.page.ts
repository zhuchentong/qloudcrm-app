import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.page.html',
  styleUrls: ['./marketing.page.scss']
})
export class MarketingPage {
  public option_1 = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: '业务指标',
        type: 'gauge',
        detail: { formatter: '{value}%' },
        axisTick: { show: false },
        data: [{ value: 50, name: '完成率' }]
      }
    ]
  }

  public option_2 = {
    tooltip: {},
    legend: {
      data: ['贷款', '理财']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        { name: '销售', max: 6500 },
        { name: '回款', max: 16000 },
        { name: '评价', max: 38000 }
      ]
    },
    series: [
      {
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '贷款'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '理财'
          }
        ]
      }
    ]
  }
}
