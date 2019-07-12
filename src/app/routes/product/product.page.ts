import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { ProductService } from 'app/services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  providers: [ProductService]
})
export class ProductPage implements OnInit {
  public productList = []

  public menuList = [
    {
      icon: 'menu',
      label: '产品目录',
      url: '/product/product-directory'
    },
    {
      icon: 'search',
      label: '产品查询',
      url: '/product/product-query'
    },
    {
      icon: 'pricetags',
      label: '产品对比',
      url: '/product/product-compare'
    },
    {
      icon: 'stats',
      label: '产品排名',
      url: '/product/product-rank'
    }
  ]

  constructor(public router: Router, public productService: ProductService) {}

  public ngOnInit() {
    this.productService.getProductList({ type: '' }).subscribe(data => {
      this.productList = data
    })
  }
}
