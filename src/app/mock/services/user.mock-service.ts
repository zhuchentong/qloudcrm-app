import userinfos from 'assets/mock/userInfo.json'
import userFocus from 'assets/mock/user-focus.json'
import userSchedules from 'assets/mock/users-chedule.json'
import { MockService } from '../mock.decorators'
import { userController } from 'app/config/service/user.controller'
import { LoggerService } from '@ngx-toolkit/logger'

export class UserMockService {
  //  private static logger: LoggerService =new LoggerService()
  @MockService({
    service: userController.getUserInfo
  })
  public static getUserInfo(params) {
    let result = null
    userinfos.forEach((value, index, array) => {
      // console.log('params.userId :'+params.userId+'@item :' + value+'@value.userId:'+value.userId)
      if (value.userId === params.userId) {
        // console.log('eacho')
        result = value
        return result
      } else {
        return null
      }
    })
    return result
  }

  @MockService({
    service: userController.userLogin
  })
  public static userLogin(params) {
    let result = null
    //  console.log('params.userId :'+params.userId+'@loginPwd :' + params.loginPwd)
    userinfos.forEach((value, index, array) => {
      //      console.log('params.userId :'+params.userId+'@item :' + value+'@value.userId:'+value.userId)
      if (
        value.userId === params.userId &&
        value.loginPwd === params.loginPwd
      ) {
        //   console.log('eacho')
        result = value
        return result
      } else {
        return null
      }
    })
    return result
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
