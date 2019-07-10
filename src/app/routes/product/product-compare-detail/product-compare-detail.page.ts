import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product-compare-detail',
  templateUrl: './product-compare-detail.page.html',
  styleUrls: ['./product-compare-detail.page.scss']
})
export class ProductCompareDetailPage implements OnInit {
  public firstProduct: any = {}
  public secondProduct: any = {}

  constructor() {}

  public ngOnInit() {
    const listJSON = localStorage.getItem('product-compare-list')
    const [first, second] = JSON.parse(listJSON)
    this.firstProduct = first
    this.secondProduct = second
  }
}
