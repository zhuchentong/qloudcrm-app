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
  public colorList = {
    color1: {
      icon: '#d5a441',
      text: '#ffffff',
      background1: '#d5a441',
      background2: '#dfac45'
    },
    color2: {
      icon: '#5ea8d6',
      text: '#ffffff',
      background1: '#5ea8d6',
      background2: '#69baec'
    },
    color3: {
      icon: '#9978d6',
      text: '#ffffff',
      background1: '#9978d6',
      background2: '#a984ec'
    },
    color4: {
      icon: '#43af7d',
      text: '#FFFFF3',
      background1: '#43af7d',
      background2: '#49bd88'
    }
  }

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
      url: ''
    },
    {
      icon: 'stats',
      label: '产品排名',
      url: '/product/product-rank'
    }
  ]

  constructor(public router: Router, public productService: ProductService) {}

  public ngOnInit() {
    this.productService.getProductList().subscribe(data => {
      this.productList = data.slice(0, 6)
    })
  }
}
