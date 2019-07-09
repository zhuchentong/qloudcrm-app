import { Model } from 'app/model'
import { Type } from 'class-transformer'

export class UserinfoModel extends Model {
  public userName: string
  public userId: string
  public userRole: string
  public userPosition: string
  public loginPwd: string
}
