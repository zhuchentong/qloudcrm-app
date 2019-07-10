import { Type } from 'class-transformer'
import { IMockInterface } from '../mock.interface'
import productJson from 'assets/mock/product.json'
import { productController } from 'app/config/service/product.controller'
import { Mock } from 'protractor/built/driverProviders'
import { MockService } from '../mock.decorators'

export class ProductMockService {
  @MockService({
    service: productController.getProductList
  })
  public static getProductList(params) {
    if (params.type === undefined) {
      return productJson
    } else {
      return productJson.filter(x => x.type.includes(params.type))
    }
  }
}
