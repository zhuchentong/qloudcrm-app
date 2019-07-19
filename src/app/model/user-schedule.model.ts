import { Model } from 'app/model'
import { Type } from 'class-transformer'
import {IEvent} from 'ionic2-calendar/calendar'

export class UserSchedule extends Model implements IEvent{
  public title: string // 计划主题
  public allDay: boolean = false
  public statu: string // 计划状态
  public targetName: string // 目标姓名
  public targetLeve: string //  目标等级
  public contactWay: string // 联系方式
  public recommendProduct: string // 推荐产品
  @Type(() => Date)
  public startTime: Date // 计划联络时间
  @Type(() => Date)
  public endTime: Date // 计划联络时间
  public infoKeyWords: string // 搜索关键字
}
