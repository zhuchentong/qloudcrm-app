import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { CustomerlistService } from 'app/services/customer/customerlist.service'
import { LoggerService } from '@ngx-toolkit/logger'
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
  providers: [CustomerlistService]
})
export class CustomerListPage implements OnInit {
  public customerList = []
  public customerlength: any

  public menuList = [
    {
      icon: 'search',
      label: '客户查询',
      url: 'customer-query'
    },
    {
      icon: 'people',
      label: '客户分组',
      url: 'customer-group'
    },
    {
      icon: 'pulse',
      label: '客户统计',
      url: 'customer-statis'
    },
    {
      icon: 'timer',
      label: '访问历史',
      url: 'customer-history'
    }
  ]

  constructor(
    public router: Router,
    public customerlistService: CustomerlistService,
    private logger: LoggerService
  ) {}

  public ngOnInit() {
    this.customerlistService.getCustomerList({ name: '' }).subscribe(data => {
      this.logger.log(data)
      this.customerList = data
      this.customerlength = data.length
    })
  }
}
