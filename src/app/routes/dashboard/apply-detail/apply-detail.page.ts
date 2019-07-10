import { Component, OnInit } from '@angular/core'
import { Columns } from 'ngx-easy-table'
import { TableConfig } from 'app/config/table.config'

@Component({
  selector: 'app-apply-detail',
  templateUrl: './apply-detail.page.html',
  styleUrls: ['./apply-detail.page.scss']
})
export class ApplyDetailPage implements OnInit {
  public rows = [
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥130,000',
      status: '成功'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '驳回'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '数据不完整'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '成功'
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
      { key: 'status', title: '申请状态' }
    ]
  }
}
