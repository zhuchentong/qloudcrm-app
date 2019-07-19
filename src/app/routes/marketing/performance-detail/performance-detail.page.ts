import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-performance-detail',
  templateUrl: './performance-detail.page.html',
  styleUrls: ['./performance-detail.page.scss']
})
export class PerformanceDetailPage implements OnInit {
  public date

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
  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.date = this.route.snapshot.paramMap.get('date')
  }
}
