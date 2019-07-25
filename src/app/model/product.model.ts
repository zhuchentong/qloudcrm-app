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

  public position: number[]
  public type: string
}
