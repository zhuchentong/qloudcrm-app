import { Injectable } from '@angular/core'
import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { userController } from 'app/config/service/user.controller'
import { UserinfoModel } from 'app/model/userInfo.model'
import { MessageModel } from 'app/model/message.model'

@Injectable()
export class UserService {
  //  public userInfo: UserinfoModel

  constructor(private net: NetService) {}

  public getUserInfo(params): Observable<any> {
    return this.net.send({
      service: userController.getUserInfo,
      params,
      model: UserinfoModel
    })
  }

  public getUserLogin(params): Observable<any> {
    return this.net.send({
      service: userController.userLogin,
      params,
      model: UserinfoModel
    })
  }

  public getUserInfoSettingMenu() {
    return [
      { lable: '账号管理', url: '/user/user-focus' },
      { lable: '消息管理', url: '/user/user-schedule' },
      { lable: '清空缓存', url: '/user/user-perform' },
      { lable: '反馈', url: '/user/user-tools' },
      { lable: '关于', url: '/user/user-setting' }
    ]
  }
}

// export class UserInfo {
//   constructor(
//     public userName: string,
//     public userId: string,
//     public userRole: string,
//     public userPosition: string
//   ) {}
// }

export class UserManagerMenu {
  constructor(public lable: string, public url: string) {}
}
