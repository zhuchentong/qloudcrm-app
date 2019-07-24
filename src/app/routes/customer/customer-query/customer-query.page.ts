import { Component, OnInit } from '@angular/core'
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { CustomerlistService } from 'app/services/customer/customerlist.service'
import { ProductModel } from 'app/model/product.model'
import { LoggerService } from '@ngx-toolkit/logger'
import { MenuController } from '@ionic/angular'

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
    private route: ActivatedRoute,
    private menu: MenuController,
    public customerlistService: CustomerlistService,
    private logger: LoggerService
  ) {}

  public ngOnInit() {}

  public openEnd() {
    this.menu.open('end')
  }

  public onSearchChange(event) {
    this.customerlistService
      .getCustomerList({ name: event })
      .subscribe(data => {
        this.logger.log(data)
        this.customerList = data
      })
  }
}
