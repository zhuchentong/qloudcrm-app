import customerdetailJson from 'assets/mock/customer/customerdetail.json'
import { customerdetailController } from 'app/config/service/customer/customerdetail.controller'
import { MockService } from 'app/mock/mock.decorators'

export class CustomerdetailController {
  @MockService({
    service: customerdetailController.getCustomerdetail
  })
  public static getCustomerhistory(params) {
    return customerdetailJson
  }
}
