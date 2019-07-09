import { Component, Injectable, OnInit } from '@angular/core'
import {
  UserInfo,
  UserManagerMenu,
  UserService
} from 'app/services/user.service'

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.page.html',
  styleUrls: ['./user-setting.page.scss']
})
@Injectable()
export class UserSettingPage implements OnInit {
  private user: UserInfo
  private menu: any[]
  constructor(private userService: UserService) {}

  public ngOnInit() {
    this.user = this.userService.userInfo
    this.menu = this.userService.getUserInfoSettingMenu()
  }
}
