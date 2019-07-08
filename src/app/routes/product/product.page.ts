import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss']
})
export class ProductPage implements OnInit {
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

  public productList = [
    {
      type: 'E时代商户贷款',
      color: this.colorList.color1,
      level: '低',
      content: '针对中小企业的商户贷款，快速放款',
      amount: '1-15万',
      num: '150',
      url: '/product/product-detail'
    },
    {
      type: 'E时代商户贷款',
      color: this.colorList.color2,
      level: '低',
      content: '针对中小企业的商户贷款，快速放款',
      amount: '1-15万',
      num: '150',
      url: '/product/product-detail'
    },
    {
      type: 'E时代商户贷款',
      color: this.colorList.color3,
      level: '低',
      content: '针对中小企业的商户贷款，快速放款',
      amount: '1-15万',
      num: '150',
      url: '/product/product-detail'
    }
  ]

  constructor(public router: Router) {}

  ngOnInit() {}
}
