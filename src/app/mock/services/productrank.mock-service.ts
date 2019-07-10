import { Type } from 'class-transformer'
import { IMockInterface } from '../mock.interface'
import productRankJson from 'assets/mock/product/productRank.json'
import { productRankController } from 'app/config/service/product/product-rank.controller'
import { Mock } from 'protractor/built/driverProviders'
import { MockService } from '../mock.decorators'

export class ProductrankMockService {
  @MockService({
    service: productRankController.getProductRankList
  })
  public static getProductRankList() {
    return productRankJson
  }
}
