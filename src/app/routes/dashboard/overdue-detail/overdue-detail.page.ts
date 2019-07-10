import { Component, OnInit } from '@angular/core'
import { TableConfig } from 'app/config/table.config'
import { Columns } from 'ngx-easy-table'

@Component({
  selector: 'app-overdue-detail',
  templateUrl: './overdue-detail.page.html',
  styleUrls: ['./overdue-detail.page.scss']
})
export class OverdueDetailPage implements OnInit {
  public rows = [
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥12,000',
      date: '30天'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥22,000',
      date: '10天'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥32,000',
      date: '45天'
    }
  ]

  public columns: Columns[]

  constructor(public tableConfig: TableConfig) {
    this.tableConfig.update({
      detailsTemplate: true,
      showDetailsArrow: true
    })
  }

  public ngOnInit() {
    this.columns = [
      { key: 'name', title: '商户名称' },
      { key: 'city', title: '城市' },
      { key: 'date', title: '逾期天数' }
    ]
  }
}
