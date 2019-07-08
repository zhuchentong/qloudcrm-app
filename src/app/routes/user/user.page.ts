import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPage implements OnInit {
  private userMenu = [
    { lable: '我的关注', url: '/user/user-focus' },
    { lable: '我的计划', url: '/user/user-schedule' },
    { lable: '我的业绩', url: '/user/user-perform' },
    { lable: '我的工具', url: '/user/user-tools' },
    { lable: '设置', url: '/user/user-setting' }
  ]

  private user: UserInfo
  private userIcon = 'menu'
  private pic = './assets/images/avatar.svg'
  private userName = '张三'
  private userInfoMenu = [{ lable: '退出', url: '' }]

  constructor(private router: Router) {
    this.user = new UserInfo('张三', 'zhangsan', 'seller', '销售经理')
  }

  private ngOnInit() {}

  public menuControl(requrl: string) {
    this.router.navigateByUrl(requrl)
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
