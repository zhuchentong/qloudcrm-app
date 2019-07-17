import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { customerdetailController } from 'app/config/service/customer/customerdetail.controller'
import { MessageModel } from 'app/model/message.model'

@Injectable()
export class CustomerdetailService {
  constructor(private net: NetService) {}

  public getCustomerdetail(params): Observable<MessageModel[]> {
    return this.net.send({
      service: customerdetailController.getCustomerdetail,
      params,
      model: MessageModel
    })
  }
}
