import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor() {}

  public ngOnInit() {}

  public logIn(username: string, pwd: string) {
    console.log(username, '  ', pwd)
  }
}
