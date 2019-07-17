import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { productDetailController } from 'app/config/service/product/product-detail.controller'
import { MessageModel } from 'app/model/message.model'

@Injectable()
export class ProductDetailService {
  constructor(private net: NetService) {}

  public getProductDetailList(): Observable<MessageModel[]> {
    return this.net.send({
      service: productDetailController.getProductDetailList,
      model: MessageModel
    })
  }
}
