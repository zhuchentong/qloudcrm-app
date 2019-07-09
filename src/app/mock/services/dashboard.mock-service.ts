import messageJson from 'assets/mock/message.json'
import { dashboardController } from 'app/config/service/dashboard.controller'
import { MockService } from '../mock.decorators'
import { HttpErrorResponse } from '@angular/common/http'

export class DashboardMockService {
  @MockService({
    service: dashboardController.getMessageList
  })
  public static getMessageList() {
    return messageJson
  }
}
