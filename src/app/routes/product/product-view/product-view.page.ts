import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss']
})
export class ProductPageComponent implements OnInit {
  public option1 = {
    title: {
      text: '理财产品分布图',
      "textStyle": {
        "fontSize": 14,
        "color": "#3498db"
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} ({d}%)'
    },
    "color": ["#893448", "#d95850", "#eb8146", "#ffb248", "#f2d643", "#ebdba4"],
    series: [
      {
        name: '资产占比',
        type: 'pie',
        radius: '60%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '其他资产' },
          { value: 310, name: '现金银行存款' },
          { value: 234, name: '非标准债券投资' },
          { value: 135, name: '权益类资产' },
          { value: 1548, name: '债卷货币市场' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  public option2 = {
    title: {
      text: '产品收益率',
      "textStyle": {
        "fontSize": 14,
        "color": "#3498db"
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    "color": ["#f95372", "#40daf1", "#00abff", "#8bd22f"],
    // legend: {
    //   data: [
    //     '其他资产',
    //     '现金银行存款',
    //     '非标准债券投资',
    //     '权益类资产',
    //     '债卷货币市场'
    //   ]
    // },
    grid: {
      left: '1',
      right: '3%',
      bottom: '3%',
      containLabel: false
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      "show": false
    },
    series: [
      {
        name: '其他资产',
        type: 'line',
        stack: '总量',
        data: [3, 4, 1, 3.4, 5, 6, 6.6]
      },
      {
        name: '现金银行存款',
        type: 'line',
        stack: '总量',
        data: [1.5, 3.4, 2.1, 3.45, 4.25, 3.86, 4.6]
      },
      {
        name: '非标准债券投资',
        type: 'line',
        stack: '总量',
        data: [3.5, 4.7, 4.9, 5.4, 5.34, 5.43, 5.6]
      },
      {
        name: '权益类资产',
        type: 'line',
        stack: '总量',
        data: [3.5, 4.4, 5.1, 3.4, 2.35, 4.6, 7.7]
      },
      {
        name: '债卷货币市场',
        type: 'line',
        stack: '总量',
        data: [6.34, 5.64, 7.41, 6.4, 5.65, 4.34, 4.89]
      }
    ]
  }

  public option3 = {
    title: {
      text: '总资产收益率',
      "textStyle": {
        "fontSize": 14,
        "color": "#3498db"
      }
    },
    xAxis: {
        type: 'category',
      "left": "4%",
      "boundaryGap": true,
      "interval": 1,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    yAxis: {
      type: 'value',
      show: true
    },
    series: [{
        data: [1.4, 5.8, 5.1, 4.56, 5.43, 6.2, 4.9],
      "name": "",
      "type": "line",
      "itemStyle": {
        "normal": {
          "color": "#186ba0"
        }
      },
      "smooth": true,
      "symbol": "circle",
      "symbolSize": 5,
      "sampling": "average",
      "areaStyle": {
        "normal": {
          "color": "#186ba0"
        }
      }
    }]
}

  constructor() {}

  public ngOnInit() {}
}
