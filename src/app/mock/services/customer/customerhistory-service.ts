import customerhistoryJson from 'assets/mock/customer/customerhistory.json'
import { customerhistoryController } from 'app/config/service/customer/customerhistory.controller'
import { MockService } from 'app/mock/mock.decorators'

export class CustomerhistoryController {
  @MockService({
    service: customerhistoryController.getCustomerhistory
  })
  public static getCustomerhistory(params) {
    return customerhistoryJson
  }
}
