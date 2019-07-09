import { Component, Injectable, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from 'app/services/user.service'
import { UserinfoModel } from 'app/model/userInfo.model'
import { LoggerService } from '@ngx-toolkit/logger'
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
@Injectable()
export class UserPage implements OnInit {
  private userMenu = [
    { lable: '我的关注', url: '/user/user-focus' },
    { lable: '我的计划', url: '/user/user-schedule' },
    { lable: '我的业绩', url: '/user/user-perform' },
    { lable: '我的工具', url: '/user/user-tools' },
    { lable: '设置', url: '/user/user-setting' }
  ]
  private user: UserinfoModel
  private userIcon = 'menu'
  private pic = './assets/images/avatar.svg'

  private userInfoMenu = [{ lable: '退出', url: '' }]

  constructor(
    private router: Router,
    private userService: UserService,
    private logger: LoggerService
  ) {
    this.userService.getUserInfo({ userId: 'zhangsan' }).subscribe(data => {
      logger.info('sadsadsa:' + data)
      this.user = data
    })
  }

  public ngOnInit() {}

  public menuControl(requrl: string) {
    this.router.navigate([requrl])
  }
}
