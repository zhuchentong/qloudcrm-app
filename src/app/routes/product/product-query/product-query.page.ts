import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { ProductService } from 'app/services/product.service'
import { ProductModel } from 'app/model/product.model'
import { LoggerService } from '@ngx-toolkit/logger'
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
    public productService: ProductService,
    private logger: LoggerService
  ) {}

  public ngOnInit() {}
  public onSearchChange(event) {
    this.productService.getProductList({ type: event }).subscribe(data => {
      this.a = data
      this.logger.log(data)
      this.productList = data
    })
  }
}
