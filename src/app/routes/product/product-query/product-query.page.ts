import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product-query',
  templateUrl: './product-query.page.html',
  styleUrls: ['./product-query.page.scss']
})
export class ProductQueryPage implements OnInit {
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
      type: '民营企业小户贷款',
      color: this.colorList.color2,
      level: '低',
      content: '针对中小企业的商户贷款，快速放款',
      amount: '2-10万',
      num: '1000',
      url: '/product/product-detail'
    },
    {
      type: '大数据高端商户贷款',
      color: this.colorList.color3,
      level: '低',
      content: '针对中高端商户贷款商户贷款，快速放款',
      amount: '50-100万',
      num: '200',
      url: '/product/product-detail'
    },
    {
      type: '资金链危机商户贷款',
      color: this.colorList.color3,
      level: '高',
      content: '针对中小企业的商户贷款，快速放款',
      amount: '50-200万',
      num: '20',
      url: '/product/product-detail'
    },
    {
      type: '政府扶持企业商户贷款',
      color: this.colorList.color3,
      level: '低',
      content: '针对中小企业的商户贷款，快速放款',
      amount: '20-40万',
      num: '1950',
      url: '/product/product-detail'
    },
    {
      type: '试营业商户贷款',
      color: this.colorList.color3,
      level: '高',
      content: '针对中小企业的商户贷款，快速放款',
      amount: '15-30万',
      num: '300',
      url: '/product/product-detail'
    }
  ]

  constructor() {}

  public ngOnInit() {}
}
