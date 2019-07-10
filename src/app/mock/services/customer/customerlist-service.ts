import customerlistJson from 'assets/mock/customer/customerlist.json'
import { customerlistController } from 'app/config/service/customer/customerlist.controller'
import { MockService } from 'app/mock/mock.decorators'

export class CustomerlistController {
  @MockService({
    service: customerlistController.getCustomerList
  })
  public static getCustomerList(params) {
    if (params.name === undefined) {
      return customerlistJson
    } else {
      return customerlistJson.filter(x => x.name.includes(params.name))
    }
  }
}
