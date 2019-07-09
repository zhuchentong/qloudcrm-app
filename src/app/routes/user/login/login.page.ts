import { Component, Injectable, OnInit } from '@angular/core'
import { LoggerService } from '@ngx-toolkit/logger'
import { UserService } from 'app/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
@Injectable()
export class LoginPage implements OnInit {
  private userId: string
  private loginPwd: string
  constructor(private logger: LoggerService, private userService: UserService) {
    this.userId = ''
    this.loginPwd = ''
  }

  public ngOnInit() {}

  public logIn() {
    this.logger.info(this.userId + ' @@@@@@ ' + this.loginPwd)
    this.userService
      .getUserLogin({ userId: this.userId, loginPwd: this.loginPwd })
      .subscribe(data => {
        this.logger.info('sadsadsa:' + data)
        if (data == null) {
          this.logger.info('用户不存在@@@@' + data)
        } else {
          this.logger.info('用户存在@@@@' + data)
        }
      })
  }
}
