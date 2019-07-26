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
    // {
    //   icon: 'search',
    //   label: '产品查询',
    //   url: '/product/product-query'
    // },
    {
      icon: 'camera',
      label: '产品视图',
      url: '/product/product-view'
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
    },
    {
      icon: 'map',
      label: '竞品地图',
      url: '/product/product-map'
    }
  ]

  constructor(public router: Router, public productService: ProductService) {}

  public ngOnInit() {
    this.productService.getProductList({ productName: '' }).subscribe(data => {
      this.productList = data
    })
  }

  public onSearchChange(event) {
    if (event !== ' ' && event !== '') {
      this.router.navigate(['/product/product-query'])
    }
  }
}
