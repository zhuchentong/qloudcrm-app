import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { CustomerhistoryService } from 'app/services/customer/customerhistory.service'
import { LoggerService } from '@ngx-toolkit/logger'

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.page.html',
  styleUrls: ['./customer-history.page.scss'],
  providers: [CustomerhistoryService]
})
export class CustomerHistoryPage implements OnInit {
  public customerList = []

  constructor(
    public router: Router,
    public customerhistoryservice: CustomerhistoryService,
    private logger: LoggerService
  ) {}

  public ngOnInit() {
    this.customerhistoryservice.getCustomerhistory({ name: '' }).subscribe(data => {
      this.customerList = data
    })
  }
}
