import { Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { Router } from '@angular/router'
import { LoggerService } from '@ngx-toolkit/logger'
import { UserService } from 'app/services/user.service'

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.page.html',
  styleUrls: ['./user-schedule.page.scss']
})
export class UserSchedulePage implements OnInit {
  public mySchedule = '我的计划'
  public createSchedule = '新增计划'
  constructor(
    private store: Store,
    private router: Router,
    private userService: UserService,
    private logger: LoggerService
  ) {}

  public ngOnInit() {}

  public onInputInfo(event) {}
}
