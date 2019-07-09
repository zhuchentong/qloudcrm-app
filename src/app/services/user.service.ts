import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable()
export class UserService {
  public userInfo: UserInfo

  constructor(private router: Router) {
    this.userInfo = new UserInfo('张三', 'zhangsan', 'saler', '销售经理')
  }

  public menuControl2(requrl: string) {
    this.router.navigate([requrl])
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

export class UserInfo {
  constructor(
    public userName: string,
    public userId: string,
    public userRole: string,
    public userPosition: string
  ) {}
}

export class UserManagerMenu {
  constructor(public lable: string, public url: string) {}
}
