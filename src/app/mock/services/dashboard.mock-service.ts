import dashboardJson from 'assets/mock/dashboard.json'
import { dashboardController } from 'app/config/service/dashboard.controller'
import { MockService } from '../mock.decorators'

export class DashboardMockService {
  @MockService({
    service: dashboardController.getMessageList
  })
  public static getMessageList(params) {
    return dashboardJson.filter(x => x.name.includes(params.name))
  }
}
