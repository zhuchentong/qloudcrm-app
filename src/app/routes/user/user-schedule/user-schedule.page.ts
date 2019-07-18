import { Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { Router } from '@angular/router'
import { LoggerService } from '@ngx-toolkit/logger'
import { UserService } from 'app/services/user.service'
import { UserSchedule } from 'app/model/user-schedule.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginAction } from 'app/store/action/user.action'
import { AlertController } from '@ionic/angular'
import { MonthViewComponent } from 'ionic2-calendar/monthview'
import { WeekViewComponent } from 'ionic2-calendar/weekview'
import { DayViewComponent } from 'ionic2-calendar/dayview'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.page.html',
  styleUrls: ['./user-schedule.page.scss']
})
export class UserSchedulePage implements OnInit {
  public mySchedule = '我的计划'
  public createSchedule = '新增计划'
  public createButtonValue = '新增'
  public myScheduleList: UserSchedule[]
  public scheduleForm: FormGroup
  public format = 'yyyy-MM-dd'
  public testdata = []
  public calendar = {
    currentDate: new Date(),
    calendarModel: 'month'
  }

  constructor(
    private store: Store,
    private router: Router,
    private userService: UserService,
    private logger: LoggerService,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public datepipe: DatePipe
  ) {}

  public ngOnInit() {
    this.queryUserSceduleList({ infoKeyWords: '' })

    this.scheduleForm = this.formBuilder.group({
      topic: ['', Validators.required],
      contactDate: ['', Validators.required],
      targetName: ['', Validators.required],
      targetLeve: ['', Validators.required],
      contactWay: ['', Validators.required],
      recommendProduct: ['', Validators.required]
    })
  }

  public onInputInfo(event) {
    this.queryUserSceduleList({ infoKeyWords: event.target.value })
  }

  public queryUserSceduleList(params) {
    this.userService.searchUserSchedule(params).subscribe(data => {
      //   this.logger.info(data)
      this.myScheduleList = data
      // this.myScheduleList[0].startTime.getTime()
    })
  }

  public async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: '消息',
      message: msg.message,
      buttons: ['OK']
    })
    await alert.present()
  }

  public addSchedule() {
    // if (!this.scheduleForm.valid) {
    //   return
    // }
    this.userService
      .createUserSchedule(this.scheduleForm.value)
      .subscribe(data => {
        this.logger.info(data)
        this.scheduleForm.reset()
        this.presentAlert(data)
      })
  }

  public onCurrentDateChanged(event) {
    this.logger.info(this.datepipe.transform(event, this.format))
    this.userService
      .searchUserSchedule({
        infoKeyWords: this.datepipe.transform(event, this.format)
      })
      .subscribe(data => {
        //   this.logger.info(data)
        this.myScheduleList = data
      })
  }

  public onTimeSelected(event) {
    this.logger.info(this.datepipe.transform(event.selectedTime, this.format))
    this.userService
      .searchUserSchedule({
        infoKeyWords: this.datepipe.transform(event.selectedTime, this.format)
      })
      .subscribe(data => {
        //   this.logger.info(data)
        this.myScheduleList = data
      })
  }
  public reloadSource(event) {
    this.logger.info('onViewTitleChanged :' + event)
  }
  public onViewTitleChanged(event) {
    this.logger.info('onViewTitleChanged :' + event)
  }
  public onEventSelected(event) {
    this.logger.info('onEventSelected :' + event)
  }
}
