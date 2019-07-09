import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { productController } from 'app/config/service/product.controller'
@Injectable()
export class ProductService {
  constructor(private net: NetService) {}
  public getProductList(): Observable<any> {
    return this.net.send({
      service: productController.getProductList
    })
  }
}
