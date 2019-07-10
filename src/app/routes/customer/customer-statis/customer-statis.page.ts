import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { Columns } from 'ngx-easy-table'
import { TableConfig } from 'app/config/table.config'

@Component({
  selector: 'app-customer-statis',
  templateUrl: './customer-statis.page.html',
  styleUrls: ['./customer-statis.page.scss']
})
export class CustomerStatisPage implements OnInit {
  @ViewChild('nameRowTpl') public nameRowTpl: TemplateRef<any>

  public rows = [
    {
      productTyepe: '额度类贷款',
      customerNum: '1522',
      dkye: '60003',
      rjz: '6.9%',
      yjz: '3.7%'
    },
    {
      productTyepe: 'CFC类贷款',
      customerNum: '234',
      dkye: '145673',
      rjz: '4%',
      yjz: '3%'
    },
    {
      productTyepe: '消费类贷款',
      customerNum: '999',
      dkye: '90673',
      rjz: '34%',
      yjz: '2%'
    },
    {
      productTyepe: '住房类贷款',
      customerNum: '999',
      dkye: '783900',
      rjz: '1.4%',
      yjz: '3.9%'
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
      { key: 'productTyepe', title: '产品类型' },
      { key: 'customerNum', title: '客户数目' }
    ]
  }
}
