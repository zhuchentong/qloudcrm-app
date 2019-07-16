import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { ProductDetailService } from 'app/services/product/product-detail.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  providers: [ProductDetailService]
})
export class ProductDetailPage implements OnInit {
  public detaildata: any
  constructor(
    public router: Router,
    public productDetailservice: ProductDetailService
  ) {}

  public ngOnInit() {
    this.productDetailservice.getProductDetailList().subscribe(data => {
      this.detaildata = data
    })
  }
}
