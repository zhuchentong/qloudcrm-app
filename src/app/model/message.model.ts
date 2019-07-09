import { Model } from 'app/model'
import { Type } from 'class-transformer'

export class MessageModel extends Model {
  // 消息ID
  public id: string

  // 消息标题
  public title: string

  // 消息内容
  public content: string

  // 消息类型
  public type: string

  // 发送时间
  public time: Date

  // 发送用户
  public sender: string

  // 消息目标
  public target: string

  // 目标类型
  public targetType: string

  // 消息数据
  public data: any
}
