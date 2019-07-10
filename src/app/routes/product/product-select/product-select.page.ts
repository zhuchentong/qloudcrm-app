import { Component, OnInit, Input } from '@angular/core'
import { ProductService } from 'app/services/product.service'
import { ProductType } from 'app/config/dict.config'
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.page.html',
  styleUrls: ['./product-select.page.scss'],
  providers: [ProductService]
})
export class ProductSelectPage implements OnInit {
  @Input()
  public count: number

  public selectList: any[] = []

  public tabIndex = 0
  public currentType = ProductType[this.tabIndex].code
  public productDataSet = []
  public productTypeList = ProductType

  public get currentProductList() {
    return this.productDataSet.filter(x => x.tag === this.currentType)
  }

  constructor(
    private productService: ProductService,
    private modalController: ModalController
  ) {}

  public ngOnInit() {
    this.getPruductList()
  }

  public onTabChange({ index }) {
    this.currentType = ProductType[index].code
  }

  public onSubmit() {
    this.modalController.dismiss(this.selectList)
  }

  public onSelect(item) {
    if (this.selectList.includes(item)) {
      const index = this.selectList.findIndex(x => x === item)
      this.selectList.splice(index, 1)
    } else {
      this.selectList.length < this.count && this.selectList.push(item)
    }
  }

  public getPruductList() {
    this.productService.getProductList({}).subscribe(data => {
      this.productDataSet = data
    })
  }
}
