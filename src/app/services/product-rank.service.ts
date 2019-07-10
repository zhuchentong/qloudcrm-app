import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { productRankController } from 'app/config/service/product/product-rank.controller'
import { MessageModel } from 'app/model/message.model'

@Injectable()
export class ProductRankService {
  constructor(private net: NetService) {}

  public getProductRankList(params): Observable<MessageModel[]> {
    return this.net.send({
      service: productRankController.getProductRankList,
      params,
      model: MessageModel
    })
  }
}
