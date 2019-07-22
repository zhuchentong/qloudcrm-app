import messageJson from 'assets/mock/message.json'
import { dashboardController } from 'app/config/service/dashboard.controller'
import { MockService } from '../../mock.decorators'
import { HttpErrorResponse } from '@angular/common/http'
import { filterParams } from 'app/mock/mock.util'

export class DashboardMockService {
  @MockService({
    service: dashboardController.getMessageList
  })
  public static getMessageList(requestParams) {
    const filters = [
      {
        key: 'range',
        validate: params => {
          const { startTime, endTime } = params.range
          if (!startTime || !endTime) {
            throw new Error('请提交开始时间和结束事件')
          }
        },
        filter: params => x => {
          const { startTime, endTime } = params.range
          const time = Date.parse(x.time)
          const start = Date.parse(startTime)
          const end = Date.parse(endTime)
          return time >= start && time <= end
        }
      }
    ]

    return filterParams(messageJson, requestParams, filters)
  }
}
