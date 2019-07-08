import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { dashboardController } from 'app/config/service/dashboard.controller'

@Injectable()
export class DashboardService {
  constructor(private net: NetService) {}

  public getMessageList(): Observable<any> {
    return this.net.send({
      service: dashboardController.getMessageList
    })
  }
}
