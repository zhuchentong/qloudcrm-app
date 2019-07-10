import userinfos from 'assets/mock/userInfo.json'
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
}