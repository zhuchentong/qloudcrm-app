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
  public a: ProductModel[]
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
  }
  public onSearchChange(event) {
    this.productService.getProductList({ productName: event }).subscribe(data => {
      this.a = data
      this.logger.log(data)
      this.productList = data
    })
  }
}
