import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { Columns } from 'ngx-easy-table'
import { TableConfig } from 'app/config/table.config'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { CustomerstatisService } from 'app/services/customer/customerstatis.service'
import { LoggerService } from '@ngx-toolkit/logger'

@Component({
  selector: 'app-customer-statis',
  templateUrl: './customer-statis.page.html',
  styleUrls: ['./customer-statis.page.scss'],
  providers:[CustomerstatisService]
})
export class CustomerStatisPage implements OnInit {
  @ViewChild('nameRowTpl') public nameRowTpl: TemplateRef<any>

  public rows = []

  public columns: Columns[]

  constructor(
    public tableConfig: TableConfig,
    public router: Router,
    public customerstatisservice: CustomerstatisService,
    private logger: LoggerService) {
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

    this.customerstatisservice.getCustomerStatis({}).subscribe(data => {
      this.rows = data
    })
  }
}
