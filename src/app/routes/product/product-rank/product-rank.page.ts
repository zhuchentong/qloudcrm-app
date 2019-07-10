import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { ProductRankService } from 'app/services/product-rank.service'
@Component({
  selector: 'app-product-rank',
  templateUrl: './product-rank.page.html',
  styleUrls: ['./product-rank.page.scss'],
  providers: [ProductRankService]
})
export class ProductRankPage implements OnInit {
  public productList = []

  constructor(
    public router: Router,
    public productrankService: ProductRankService
  ) {}

  public ngOnInit() {
    this.productrankService.getProductRankList({ type: '' }).subscribe(data => {
      this.productList = data
    })
  }
}
