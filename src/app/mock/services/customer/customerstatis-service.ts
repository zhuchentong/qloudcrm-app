import customerstatisJson from 'assets/mock/customer/customerstatis.json'
import { customerstatisController } from 'app/config/service/customer/customerstatis.controller'
import { MockService } from 'app/mock/mock.decorators'

export class CustomerstatisController {
  @MockService({
    service: customerstatisController.getCustomerstatis
  })
  public static getCustomerstatis(params) {
    return customerstatisJson
  }
}
