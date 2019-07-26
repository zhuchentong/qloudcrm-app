import { Component, OnInit } from '@angular/core'
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { ProductService } from 'app/services/product.service'
import { ProductModel } from 'app/model/product.model'
import { LoggerService } from '@ngx-toolkit/logger'
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-product-query',
  templateUrl: './product-query.page.html',
  styleUrls: ['./product-query.page.scss'],
  providers: [ProductService]
})
export class ProductQueryPage implements OnInit {
  public productList = []
  public financialparam = ''
  public riskparam = ''
  public productType = [
    { flagchage: false, name: '债劵类' },
    { flagchage: false, name: '银行存款类' }
  ]
  public productfx = [
    { flagchage: false, name: 'R1(低)' },
    { flagchage: false, name: 'R2(中低)' },
    { flagchage: false, name: 'R3(中)' },
    { flagchage: false, name: 'R4(中高)' },
    { flagchage: false, name: 'R5(高)' }
  ]
  public productzq = [
    { flagchage: false, name: '一年内' },
    { flagchage: false, name: '三年内' },
    { flagchage: false, name: '三年以上' }
  ]
  public productprice = [
    { flagchage: false, name: '一万元以内' },
    { flagchage: false, name: '10万元以内' },
    { flagchage: false, name: '10万-50万内' },
    { flagchage: false, name: '50万以上' }
  ]
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public productService: ProductService,
    private logger: LoggerService,
    private menu: MenuController
  ) {}

  public ngOnInit() {
    // const eventdata = this.route.snapshot.paramMap.get('searchdata')
  }

  public openEnd() {
    this.menu.open('end')
    this.restFun()
  }
  public onSearchChange(event) {
    this.productService
      .getProductList({ productName: event })
      .subscribe(data => {
        this.logger.log(data)
        this.productList = data
      })
  }
  public changeCss(event,i) {
    if (i === '1') {
      this.changecssPubcli(event)
    }
    if (i === '2') {
      this.changecssPubcli(event)
    }
    if (i === '3') {
      this.changecssPubcli(event)
    }
    if (i === '4') {
      this.changecssPubcli(event)
    }
  }

  /**
   * 样式切换
   */
  public changecssPubcli(event){
    if (event.flagchage === false) {
      event.flagchage = true
    } else {
      event.flagchage = false
    }
  }
  /**
   * 高级查询
   */
  public Querysenior() {
    this.productService
    .getProductList({ productName: ''})
    .subscribe(data => {
      this.logger.log(data)
      this.productList = data
    })
  }

  /**
   * 重置样式
   */
  public resetPublic(itemarray){
    for (const item of itemarray) {
      if (item.flagchage === true) {
        item.flagchage = false
      }
    }
  }
   public restFun(){ 
    this.resetPublic(this.productType)
    this.resetPublic(this.productfx)
    this.resetPublic(this.productzq)
    this.resetPublic(this.productprice)
   }
}
