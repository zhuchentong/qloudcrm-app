import dashboardJson from 'assets/mock/dashboard.json'
import { dashboardController } from 'app/config/service/dashboard.controller'
import { MockService } from '../mock.decorators'
import { HttpErrorResponse } from '@angular/common/http'

export class DashboardMockService {
  @MockService({
    service: dashboardController.getMessageList
  })
  public static getMessageList(params) {
    throw new Error('测试')
    return dashboardJson.filter(x => x.name.includes(params.name))
  }
}
