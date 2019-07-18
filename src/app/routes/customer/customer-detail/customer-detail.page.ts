import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { CustomerdetailService } from 'app/services/customer/customerdetail.service'
import { LoggerService } from '@ngx-toolkit/logger'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.page.html',
  styleUrls: ['./customer-detail.page.scss'],
  providers: [CustomerdetailService]
})
export class CustomerDetailPage implements OnInit {
  public customerdetail: any
  constructor(
    public router: Router,
    public customerdetailservice: CustomerdetailService,
    private logger: LoggerService
  ) {}

  public ngOnInit() {
    this.customerdetailservice.getCustomerdetail({}).subscribe(data => {
      this.customerdetail = data
      this.logger.log(this.customerdetail)
    })
  }

  public renderHeader1() {
    return '互动记录'
  }

  public renderHeader2() {
    return '推荐购买产品'
  }

  public renderHeader3() {
    return '已购买产品'
  }
  public renderHeader4() {
    return '已参加活动'
  }
}
