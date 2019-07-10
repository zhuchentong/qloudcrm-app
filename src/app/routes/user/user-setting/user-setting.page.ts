import { Component, Injectable, OnInit } from '@angular/core'
import { UserManagerMenu, UserService } from 'app/services/user.service'
import { UserInfoModel } from 'app/model/user-info.model'

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.page.html',
  styleUrls: ['./user-setting.page.scss']
})
@Injectable()
export class UserSettingPage implements OnInit {
  private user: UserInfoModel
  private menu: any[]
  constructor(private userService: UserService) {}

  public ngOnInit() {
    this.userService.getUserInfo({ userId: 'zhangsan' }).subscribe(data => {
      this.user = data
    })
    this.menu = this.userService.getUserInfoSettingMenu()
  }
}
