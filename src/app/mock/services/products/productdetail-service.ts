import productDetailJson from 'assets/mock/product/productDetail.json'
import { productDetailController } from 'app/config/service/product/product-detail.controller'
import { MockService } from '../../mock.decorators'

export class ProductDetailService {
  @MockService({
    service: productDetailController.getProductDetailList
  })
  public static getProductDetailList() {
    return productDetailJson
  }
}
