import { Model } from 'app/model'
import { Type } from 'class-transformer'

export class UserSchedule extends Model {
  public topic: string // 计划主题
  public statu: string // 计划状态
  public targetName: string // 目标姓名
  public targetLeve: string //  目标等级
  public contactWay: string // 联系方式
  public recommendProduct: string // 推荐产品
  public contactDate: string // 计划联络时间
  public infoKeyWords: string // 搜索关键字
}
