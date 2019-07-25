import { Component, OnInit, NgZone, ViewChild } from '@angular/core'
import { ProductService } from 'app/services/product.service'
import { ProductModel } from 'app/model/product.model'
import { MenuControllerI } from '@ionic/core'
import { MenuController } from '@ionic/angular'
import { ProductType } from 'app/config/dict.config'
import { DictConfigService } from 'app/shared/utils/dict-config.service'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import coordtransform from 'coordtransform'
import { NgxAmapComponent } from 'ngx-amap'
@Component({
  selector: 'app-product-map',
  templateUrl: './product-map.page.html',
  styleUrls: ['./product-map.page.scss'],
  providers: [ProductService, Geolocation]
})
export class ProductMapPage implements OnInit {
  @ViewChild('map')
  public map: NgxAmapComponent
  public center
  public currentProduct
  public searchContent
  private productDataSet: any[] = []
  public productType: string[] = ['理财类', '银行存款类', '债券类']
  public icon = {
    size: {
      width: 40,
      height: 40
    },
    image: '/assets/images/product/money.png',
    imageOffset: {
      x: 0,
      y: -60
    }
  }
  public get productList(): any[] {
    return this.productDataSet
      .filter(
        x => !this.searchContent || x.productName.includes(this.searchContent)
      )
      .filter(x => this.productType.includes(x.type))
  }

  constructor(
    private productService: ProductService,
    private menu: MenuController,
    public dictConfigService: DictConfigService,
    private geolocation: Geolocation,
    private zone: NgZone
  ) {}

  public async ngOnInit() {
    await this.getPosition()
    this.getProductList()
  }

  /**
   * 获取产品列表
   */
  public getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.productDataSet = data.map(x => {
        x['position'] = this.center.map(
          point => point + (Math.random() / 30) * (Math.random() > 0.5 ? -1 : 1)
        )
        x['label'] = {
          offset: {
            x: -50,
            y: 35
          },
          content: `<div class="marker-label">${x['label']}</div>`,
          direction: 'center'
        }
        return x
      })
    })
  }

  private getPosition() {
    return this.geolocation.getCurrentPosition().then(resp => {
      this.center = coordtransform.wgs84togcj02(
        resp.coords.longitude,
        resp.coords.latitude
      )
    })
  }

  public onOpenMenu() {
    this.menu.enable(true, 'menu')
    this.menu.open('menu')
  }

  public onOpenList() {
    this.menu.enable(true, 'product')
    this.menu.open('product')
  }

  public onProductChange({ detail: { checked, value } }) {
    const list = [...this.productType]
    if (checked) {
      list.push(value)
    } else {
      list.splice(list.findIndex(x => x === value), 1)
    }
    this.zone.run(() => {
      this.productType = list
    })
  }

  public setCenter(position) {
    this.map.setCenter(position)
    this.menu.close('product')
  }

  public onOpenMarker(product) {
    this.currentProduct = product
  }

  public onSearchChange(e) {
    console.log(e)
  }
}
