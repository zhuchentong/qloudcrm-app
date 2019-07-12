import { Component, Injectable, OnInit } from '@angular/core'
import { LoggerService } from '@ngx-toolkit/logger'
import { UserService } from 'app/services/user.service'
import { UpdateDictAction } from 'app/store/action/dict.action'
import * as dict from 'app/config/dict.config'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
@Injectable()
export class LoginPage implements OnInit {
  public userId: string
  public loginPwd: string
  public loginInfo: string
  public loginInfoDisplay: boolean

  public loginForm: FormGroup
  constructor(
    public router: Router,
    public logger: LoggerService,
    public userService: UserService,
    public formBuilder: FormBuilder
  ) {
    this.userId = ''
    this.loginPwd = ''
    this.loginInfo = ''
    this.loginInfoDisplay = false
  }

  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: [''],
      loginPwd: ['']
    })
  }

  public logIn() {
    this.logger.info(this.loginForm)
    if (this.userService.login(this.loginForm.value)) {
      this.router.navigate([''])
    } else {
      this.loginInfoDisplay = true
      this.loginInfo = '用户名或密码错误！'
    }
  }
}
