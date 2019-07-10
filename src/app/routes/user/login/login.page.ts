import { Component, Injectable, OnInit } from '@angular/core'
import { LoggerService } from '@ngx-toolkit/logger'
import { UserService } from 'app/services/user.service'
import { UpdateDictAction } from 'app/store/action/dict.action'
import * as dict from 'app/config/dict.config'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
@Injectable()
export class LoginPage implements OnInit {
  private userId: string
  private loginPwd: string
  private loginInfo: string
  private loginInfoDisplay: boolean
  constructor(
    private router: Router,
    private logger: LoggerService,
    private userService: UserService
  ) {
    this.userId = ''
    this.loginPwd = ''
    this.loginInfo = ''
    this.loginInfoDisplay = false
  }

  public ngOnInit() {}

  public logIn() {
    this.logger.info(this.userId + ' @@@@@@ ' + this.loginPwd)
    if (
      this.userService.login({ userId: this.userId, loginPwd: this.loginPwd })
    ) {
      this.router.navigate([''])
    } else {
      this.loginInfoDisplay = true
      this.loginInfo = '用户名或密码错误！'
    }
  }
}
