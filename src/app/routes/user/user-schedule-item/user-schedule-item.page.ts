import {Component, OnInit} from '@angular/core'
import {UserSchedule} from 'app/model/user-schedule.model'
import {LoggerService} from '@ngx-toolkit/logger'
import {DatePipe} from '@angular/common'
import {Store} from '@ngxs/store'
import {UserService} from 'app/services/user.service'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {FormBuilder} from '@angular/forms'
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-user-schedule-item',
  templateUrl: './user-schedule-item.page.html',
  styleUrls: ['./user-schedule-item.page.scss'],
})

export class UserScheduleItemPage implements OnInit {
  public createButtonValue = '联系客户'
  public scheduleInfo
  public scheduleID: string

  constructor(private store: Store,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private logger: LoggerService,
              public formBuilder: FormBuilder,
              public alertController: AlertController,
              public datepipe: DatePipe) {


  }

  public ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.logger.info(params['scheduleID'])
      let scheduleIDvalue = params['scheduleID']
      this.userService.getUserScheduleByID({scheduleID: params['scheduleID']}).subscribe((data) => {
         // console.log('request query')
        this.scheduleInfo = data
        // console.log(this.scheduleInfo)
      })
      this.logger.info(this.scheduleInfo === null)
    })
  }

}
