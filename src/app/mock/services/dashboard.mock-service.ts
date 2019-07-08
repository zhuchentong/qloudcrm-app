import { IMockInterface } from '../mock.interface'
import dashboardJson from 'assets/mock/dashboard.json'
import { dashboardController } from 'app/config/service/dashboard.controller'
import { Mock } from 'protractor/built/driverProviders'
import { MockService } from '../mock.decorators'

export class DashboardMockService {
  @MockService({
    service: dashboardController.getMessageList
  })
  public static getMessageList() {
    return dashboardJson
  }
}
