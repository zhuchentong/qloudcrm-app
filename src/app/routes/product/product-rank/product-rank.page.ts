import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { ProductService } from 'app/services/product.service'
@Component({
  selector: 'app-product-rank',
  templateUrl: './product-rank.page.html',
  styleUrls: ['./product-rank.page.scss'],
  providers: [ProductService]
})
export class ProductRankPage implements OnInit {
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

  constructor(public router: Router, public productService: ProductService) {}

  public ngOnInit() {
    this.productService.getProductList().subscribe(data => {
      this.productList = data.slice(6, 13)
    })
  }
}
