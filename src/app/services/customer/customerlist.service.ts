import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { customerlistController } from 'app/config/service/customer/customerlist.controller'
import { MessageModel } from 'app/model/message.model'

@Injectable()
export class CustomerlistService {
  constructor(private net: NetService) {}

  public getCustomerList(params): Observable<MessageModel[]> {
    return this.net.send({
      service: customerlistController.getCustomerList,
      params,
      model: MessageModel
    })
  }
}
