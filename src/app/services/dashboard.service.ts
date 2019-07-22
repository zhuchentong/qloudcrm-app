import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { dashboardController } from 'app/config/service/dashboard.controller'
import { MessageModel } from 'app/model/message.model'

@Injectable()
export class DashboardService {
  constructor(private net: NetService) {}

  public getMessageList(params?): Observable<MessageModel[]> {
    return this.net.send({
      service: dashboardController.getMessageList,
      model: MessageModel,
      params
    })
  }
}
