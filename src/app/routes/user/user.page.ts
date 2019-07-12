import { Component, Injectable, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from 'app/services/user.service'
import { UserInfoModel } from 'app/model/user-info.model'
import { LoggerService } from '@ngx-toolkit/logger'
import { Store } from '@ngxs/store'
import { UserState } from 'app/store/state/user.state'
import { LogoutAction } from 'app/store/action/user.action'
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
@Injectable()
export class UserPage implements OnInit {
  public userMenu = [
    { lable: '我的关注', url: '/user/user-focus' },
    { lable: '我的计划', url: '/user/user-schedule' },
    { lable: '我的业绩', url: '/tabs/marketing' },
    { lable: '我的工具', url: '/user/user-tools' },
    { lable: '设置', url: '/user/user-setting' },
    { lable: '退出', url: 'logout' }
  ]
  public user: UserInfoModel
  public userIcon = 'menu'
  public pic = './assets/images/avatar.svg'

  public userInfoMenu = [{ lable: '退出', url: '' }]

  constructor(
    private store: Store,
    private router: Router,
    private userService: UserService,
    private logger: LoggerService
  ) {
    // this.userService.getUserInfo({ userId: 'zhangsan' }).subscribe(data => {
    //   logger.info('sadsadsa:' + data)
    //   this.user = data
    // })
    this.user = this.store.selectSnapshot(UserState.getUser)
  }

  public ngOnInit() {}

  public menuControl(requrl: string) {
    if (requrl === 'logout') {
      this.store.dispatch(LogoutAction)
      this.router.navigate(['/user/user-login'])
    } else {
      this.router.navigate([requrl])
    }
  }
}
