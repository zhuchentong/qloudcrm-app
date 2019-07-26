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
  public customerCategory = [
    { flagchage: false, name: '待发薪客户' },
    { flagchage: false, name: '商旅客户' },
    { flagchage: false, name: '理财达人' },
    { flagchage: false, name: '睡眠客户' }
  ]
  public customerType = [
    { flagchage: false, name: '保守型' },
    { flagchage: false, name: '激进型' },
    { flagchage: false, name: '冒险型' },
    { flagchage: false, name: '稳健型' }
  ]
  public customerClass = [
    { flagchage: false, name: '普通客户' },
    { flagchage: false, name: '重要客户' },
    { flagchage: false, name: '精选客户' }
  ]
  public customerLeverl = [
    { flagchage: false, name: '银卡客户' },
    { flagchage: false, name: '金卡客户' },
    { flagchage: false, name: '钻石客户' },
    { flagchage: false, name: '全卡客户' }
  ]
  public cssflag: any = ''
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private menu: MenuController,
    public customerlistService: CustomerlistService,
    private logger: LoggerService
  ) {}

  public ngOnInit() {}

  /**
   * 右边筛选栏
   */
  public openEnd() {
    this.menu.open('end')
    this.setchage()
  }

  /**
   * @param 切换样式 
   */
  public changeCss(event, i) {
    if (i === '1') {
      this.changecssPublic(event)
    }
    if (i === '2') {
      this.changecssPublic(event)
    }
    if (i === '3') {
      this.changecssPublic(event)
    }
    if (i === '4') {
      this.changecssPublic(event)
    }
  }

  /**
   *
   * @param event 切换样式公共方法
   */
  public changecssPublic(event) {
    if (event.flagchage === false) {
      event.flagchage = true
    } else {
      event.flagchage = false
    }
  }

  public onSearchChange(event) {
    this.customerlistService
      .getCustomerList({ name: event })
      .subscribe(data => {
        this.logger.log(data)
        this.customerList = data
      })
  }

  public querySenior() {
    this.customerlistService.getCustomerList({ name: '' }).subscribe(data => {
      this.logger.log(data)
      this.customerList = data
    })
  }

  // 重置
  public setchage() {
    this.resetPublic(this.customerCategory)
    this.resetPublic(this.customerType)
    this.resetPublic(this.customerClass)
    this.resetPublic(this.customerLeverl)
  }
  // 重置公共方法
  public resetPublic(itemarray) {
    for (const item of itemarray) {
      if (item.flagchage === true) {
        item.flagchage = false
      }
    }
  }
}
