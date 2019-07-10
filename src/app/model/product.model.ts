import { Model } from 'app/model'
import { Type } from 'class-transformer'

export class ProductModel extends Model {
  // @Expose()
  // public id
  // @Expose()
  // public itemNumber: string
  // @Expose()
  // public itemPoint: string
  // @Expose()
  // public itemTitle: string
  // @Expose()
  // public riskLevel: number
  // @Expose()
  // public parentId: string
  // @Expose()
  // public type: 'PATH' | 'ITEM'

  public type: string

  public get a() {
    return this.type
    // return this.type.substr(0, 4)
  }
}
