import userinfos from 'assets/mock/userInfo.json'
import userFocus from 'assets/mock/user-focus.json'
import userSchedules from 'assets/mock/users-chedule.json'
import { MockService } from '../mock.decorators'
import { userController } from 'app/config/service/user.controller'
import { LoggerService } from '@ngx-toolkit/logger'
import { UserInfoModel } from 'app/model/user-info.model'

export class UserMockService {
  //  private static logger: LoggerService =new LoggerService()
  @MockService({
    service: userController.getUserInfo
  })
  public static getUserInfo(params: UserInfoModel) {
    const user = userinfos.find(x => x.userId === params.userId)
    if (user) {
      return user
    } else {
      throw new Error('用户不存在')
    }
  }

  @MockService({
    service: userController.userLogin
  })
  public static userLogin(params) {
    const user = userinfos.find(
      x => x.userId === params.userId && x.loginPwd === params.loginPwd
    )
    if (user) {
      return user
    } else {
      throw new Error('用户名密码错误')
    }
  }

  @MockService({
    service: userController.getUserFocus
  })
  public static getUserFocus() {
    let result = null
    result = userFocus
    return result
    //  if(params.type === 'all'){
    //    result = userFocus
    //  }
    // result = new Array()
    //   userFocus.filter(item => {
    //    if(params.type === item ['type'])
    //      result.push(item)
    //  } )
    //  return result
  }

  @MockService({
    service: userController.getUserSchedule
  })
  public static getUserSchedule(params) {
    let result = null
    result = userSchedules
    return result
  }
  @MockService({
    service: userController.createUserSchedule
  })
  public static createUserSchedule(params) {
    userSchedules.push({
      topic: params.topic,
      statu: params.statu,
      targetName: params.targetName,
      targetLeve: params.targetLeve,
      contactWay: params.contactWay,
      recommendProduct: params.recommendProduct,
      contactDate: params.contactDate,
      infoKeyWords:
        params.topic +
        ' ' +
        params.statu +
        ' ' +
        params.targetName +
        ' ' +
        params.targetLeve +
        ' ' +
        params.contactWay +
        ' ' +
        params.recommendProduct +
        ' ' +
        params.contactDate
    })
  }
}
