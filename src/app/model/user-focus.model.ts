import { Model } from 'app/model'
import { Type } from 'class-transformer'

export class UserFocusModel extends Model {
  public title: string
  public time: string
  public info: string
  public type: string
}
