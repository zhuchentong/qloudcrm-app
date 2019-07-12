import { Component, Injectable, OnInit } from '@angular/core'
import { LoggerService } from '@ngx-toolkit/logger'
import { UserService } from 'app/services/user.service'
import { UpdateDictAction } from 'app/store/action/dict.action'
import * as dict from 'app/config/dict.config'
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginAction } from 'app/store/action/user.action'
import { Store } from '@ngxs/store'

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
  private redirect
  public loginForm: FormGroup
  constructor(
    private store: Store,
    public router: Router,
    private route: ActivatedRoute,
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
    this.redirect = this.route.snapshot.paramMap.get('redirect') || ''
    this.loginForm = this.formBuilder.group({
      userId: ['zhangsan', Validators.required],
      loginPwd: ['zhangsan123', Validators.required]
    })
  }

  public logIn() {
    if (!this.loginForm.valid) {
      return
    }

    this.userService.getUserLogin(this.loginForm.value).subscribe(data => {
      this.store.dispatch(new LoginAction(data))
      this.router.navigate([this.redirect], {
        replaceUrl: true
      })
    })
  }
}
