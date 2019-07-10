import { Component, OnInit } from '@angular/core'
import { Columns } from 'ngx-easy-table'
import { TableConfig } from 'app/config/table.config'

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.page.html',
  styleUrls: ['./review-detail.page.scss']
})
export class ReviewDetailPage implements OnInit {
  public rows = [
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥130,000',
      status: '已拨款'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '申请中'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '已面签'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '已拨款'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '成功'
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
      { key: 'status', title: '当前流程' }
    ]
  }
}
