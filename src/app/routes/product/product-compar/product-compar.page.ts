import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { ProductSelectPage } from '../product-select/product-select.page'
import { Router } from '@angular/router'
@Component({
  selector: 'app-product-compar',
  templateUrl: './product-compar.page.html',
  styleUrls: ['./product-compar.page.scss']
})
export class ProductComparPage implements OnInit {
  // 对比列表
  public compareList: any[] = []
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  public ngOnInit() {}

  public async onSelectProduct() {
    const modal = await this.modalController.create({
      component: ProductSelectPage,
      componentProps: {
        count: 2
      },
      showBackdrop: true,
      backdropDismiss: true
    })

    modal.onDidDismiss().then(({ data }) => {
      this.compareList = [...data]
    })

    modal.present()
  }

  public onProductCompare() {
    localStorage.setItem(
      'product-compare-list',
      JSON.stringify(this.compareList)
    )
    this.router.navigateByUrl('/product/product-compare-detail')
  }
}
