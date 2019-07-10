import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { CustomerlistService } from 'app/services/customer/customerlist.service'
import { ProductModel } from 'app/model/product.model'
import { LoggerService } from '@ngx-toolkit/logger'

@Component({
  selector: 'app-customer-query',
  templateUrl: './customer-query.page.html',
  styleUrls: ['./customer-query.page.scss'],
  providers: [CustomerlistService]
})
export class CustomerQueryPage implements OnInit {
  public customerList = []

  constructor(
    public router: Router,
    public customerlistService: CustomerlistService,
    private logger: LoggerService
  ) {}

  public ngOnInit() {}

  public onSearchChange(event) {
    this.customerlistService
      .getCustomerList({ name: event })
      .subscribe(data => {
        this.logger.log(data)
        this.customerList = data
      })
  }
}
