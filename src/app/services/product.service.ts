import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { productController } from 'app/config/service/product.controller'
import { ProductModel } from 'app/model/product.model'
@Injectable()
export class ProductService {
  constructor(private net: NetService) {}
  public getProductList(params?): Observable<ProductModel[]> {
    return this.net.send({
      service: productController.getProductList,
      params,
      model: ProductModel
    })
  }
}
