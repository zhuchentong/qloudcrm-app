import { Model } from '.'
import { Type, Expose } from 'class-transformer'

export class UserModel extends Model {
  @Expose()
  public id: string
  @Expose()
  public username: string
}
