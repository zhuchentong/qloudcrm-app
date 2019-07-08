import { Model } from 'app/model'
import { Type } from 'class-transformer'

export class MessageModel extends Model {
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

  public test: string

  public get a() {
    return this.test.substr(0, 3)
  }
}
