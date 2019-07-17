import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { customerstatisController } from 'app/config/service/customer/customerstatis.controller'
import { MessageModel } from 'app/model/message.model'

@Injectable()
export class CustomerstatisService {
  constructor(private net: NetService) {}

  public getCustomerStatis(params): Observable<MessageModel[]> {
    return this.net.send({
      service: customerstatisController.getCustomerstatis,
      params,
      model: MessageModel
    })
  }
}
