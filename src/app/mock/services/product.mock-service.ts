import { IMockInterface } from '../mock.interface'
import productJson from 'assets/mock/product.json'
import { productController } from 'app/config/service/product.controller'
import { Mock } from 'protractor/built/driverProviders'
import { MockService } from '../mock.decorators'

export class ProductMockService {
  @MockService({
    service: productController.getProductList
  })
  public static getMessageList() {
    return productJson
  }
}
