import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.page.html',
  styleUrls: ['./marketing.page.scss']
})
export class MarketingPage {
  public option1 = {
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

  public option2 = {
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

  option = {
    tooltip: {},
    legend: {
      top: 20,
      itemWidth: 12,
      itemHeight: 12,
      data: ['贷款业务', '理财业务']
    },
    radar: {
      radius: '60%',
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          opacity: .2
        }
      },
      splitLine: {
        lineStyle: {
          opacity: .2
        }
      },
      splitArea: {
        areaStyle: {
          opacity: 1,
          shadowBlur: 45,
          shadowColor: 'rgba(0,0,0,.5)',
          shadowOffsetX: 0,
          shadowOffsetY: 15,
        }
      },
      indicator: [{
        name: '销售',
        max: 6000
      }, {
        name: '互动',
        max: 16000
      }, {
        name: '回款',
        max: 30000
      }, {
        name: '评价',
        max: 35000
      }, {
        name: '其他',
        max: 50000
      }, {
        name: '市场',
        max: 25000
      }]
    },
    series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      symbolSize: 0,
      areaStyle: {
        normal: {
          shadowBlur: 13,
          shadowColor: 'rgba(0,0,0,.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          opacity: 1
        }
      },
      data: [{
        value: [5000, 7000, 12000, 11000, 15000, 14000],
        name: '贷款业务',
      }, {
        value: [2500, 12000, 8000, 8500, 12000, 12000],
        name: '理财业务',
      }]
    }],
    color: ['#d77169', '#72355f']
  };


  public circlechartOption = {
    title: {
      x: '29%',
      y: '37%',
      textStyle: {
        fontWeight: 400,
        fontSize: 16,
        color: '#FFFFFF'
      },
      text: '60%'
    },
    grid: {
      top: 5,
      bottom: 5,
    },
    color: ['#f5f5f5', '#3498db'],
    series: [{
      name: 'valueOfMarket',
      type: 'pie',
      center: ['50%', '50%'], // 饼图的圆心坐标
      radius: ['60%', '70%'],
      avoidLabelOverlap: false,
      hoverAnimation: false,
      label: { //  饼图图形上的文本标签
        normal: { // normal 是图形在默认状态下的样式
          show: false
        }
      },
      data: [
        {
          value: 60,
          name: '',
          label: {
            normal: {
              show: true
            }
          }
        },
        {
          value: 40,
          label: {
            normal: {
              show: false
            }
          }
        }
      ]
    }]
  };

  public circlechartOption1  = {
    title: {
      x: '29%',
      y: '37%',
      textStyle: {
        fontWeight: 400,
        fontSize: 14,
        color: '#FFFFFF'
      },
      text: '30%'
    },
    grid: {
      top: 5,
      bottom: 5,
    },
    color: ['#f5f5f5', '#e74c3c'],
    series: [{
      name: 'valueOfMarket',
      type: 'pie',
      center: ['50%', '50%'], // 饼图的圆心坐标
      radius: ['60%', '70%'],
      avoidLabelOverlap: false,
      hoverAnimation: false,
      label: { //  饼图图形上的文本标签
        normal: { // normal 是图形在默认状态下的样式
          show: false
        }
      },
      data: [
        {
          value: 30,
          name: '',
          label: {
            normal: {
              show: true
            }
          }
        },
        {
          value: 70,
          label: {
            normal: {
              show: false
            }
          }
        }
      ]
    }]
  };

  funnelOption = {
    color: ['#efbb1a', '#d77169', '#c14f60', '#953f61', '#72355f', ],
    series : [
      {
        name:'漏斗图',
        type:'funnel',
        x: '5%',
        y: 20,
        //x2: 80,
        y2: 20,
        width: '90%',
        // height: {totalHeight} - y - y2,
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort : 'descending', // 'ascending', 'descending'
        gap :0,
        data:[
          {value:100, name:'分配'},
          {value:95, name:'已互动'},
          {value:65, name:'已反馈'},
          {value:32, name:'感兴趣'},
          {value:12, name:'签约成功'}
        ].sort(function (a, b) { return a.value - b.value}),
        roseType: true,
        label: {
          normal: {
            formatter: function (params) {
              return params.name + ' ' + params.value + '%';
            },
            position: 'center'
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 0,
            shadowBlur: 30,
            shadowOffsetX: 0,
            shadowOffsetY: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}
