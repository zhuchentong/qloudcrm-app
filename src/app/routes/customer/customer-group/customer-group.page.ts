import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { CustomerlistService } from 'app/services/customer/customerlist.service'
import { LoggerService } from '@ngx-toolkit/logger'

@Component({
  selector: 'app-customer-group',
  templateUrl: './customer-group.page.html',
  styleUrls: ['./customer-group.page.scss'],
  providers: [CustomerlistService]
})
export class CustomerGroupPage implements OnInit {
  public customerList = []
  constructor(
    public router: Router,
    public customerlistService: CustomerlistService,
    private logger: LoggerService
  ) {}

  public ngOnInit() {
    this.customerlistService.getCustomerList({ name: '' }).subscribe(data => {
      this.customerList = data
    })
  }
}
