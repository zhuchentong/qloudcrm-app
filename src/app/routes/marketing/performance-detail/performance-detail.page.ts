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

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.date = this.route.snapshot.paramMap.get('date')
  }
}
