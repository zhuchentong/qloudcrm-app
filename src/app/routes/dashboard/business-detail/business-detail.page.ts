import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { Columns } from 'ngx-easy-table'
import { TableConfig } from 'app/config/table.config'

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.page.html',
  styleUrls: ['./business-detail.page.scss']
})
export class BusinessDetailPage implements OnInit {
  public rows = [
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安'
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
      { key: 'city', title: '城市' }
    ]
  }
}
