import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { customerhistoryController } from 'app/config/service/customer/customerhistory.controller'
import { MessageModel } from 'app/model/message.model'

@Injectable()
export class CustomerhistoryService {
  constructor(private net: NetService) {}

  public getCustomerhistory(params): Observable<MessageModel[]> {
    return this.net.send({
      service: customerhistoryController.getCustomerhistory,
      params,
      model: MessageModel
    })
  }
}
