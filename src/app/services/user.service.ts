import { Injectable } from '@angular/core'
import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { userController } from 'app/config/service/user.controller'
import { UserInfoModel } from 'app/model/user-info.model'
import { MessageModel } from 'app/model/message.model'
import { UpdateDictAction } from 'app/store/action/dict.action'
import { LoggerService } from '@ngx-toolkit/logger'
import { Store } from '@ngxs/store'
import { LoginAction } from 'app/store/action/user.action'
import { UserFocusModel } from 'app/model/user-focus.model'

@Injectable()
export class UserService {
  //  public userInfo: UserinfoModel

  constructor(
    private store: Store,
    private logger: LoggerService,
    private net: NetService
  ) {}

  public getUserInfo(params): Observable<any> {
    return this.net.send({
      service: userController.getUserInfo,
      params,
      model: UserInfoModel
    })
  }

  public getUserLogin(params): Observable<any> {
    return this.net.send({
      service: userController.userLogin,
      params,
      model: UserInfoModel
    })
  }

  public getUserFocus(): Observable<any> {
    return this.net.send({
      service: userController.getUserFocus,
      model: UserFocusModel
    })
  }

  public getUserInfoSettingMenu() {
    return [
      { lable: '账号管理', url: '' },
      { lable: '消息管理', url: '' },
      { lable: '清空缓存', url: '' },
      { lable: '反馈', url: '' },
      { lable: '关于', url: '' }
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
