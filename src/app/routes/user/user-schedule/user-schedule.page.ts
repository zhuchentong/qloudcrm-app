import {Component, OnInit, ViewChild} from '@angular/core'
import {Store} from '@ngxs/store'
import {Router} from '@angular/router'
import {LoggerService} from '@ngx-toolkit/logger'
import {UserService} from 'app/services/user.service'
import {UserSchedule} from 'app/model/user-schedule.model'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {AlertController} from '@ionic/angular'
import {DatePipe} from '@angular/common'

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.page.html',
  styleUrls: ['./user-schedule.page.scss']
})
export class UserSchedulePage implements OnInit {
  public mySchedule = '我的计划'
  public createSchedule = '新增计划'
  public createButtonValue = '新增'
  // @ViewChild(CalendarComponent)
  // public myCalendar:CalendarComponent
  // public eventSource
  public myScheduleList = []
  public scheduleForm: FormGroup
  public format = 'yyyy-MM-dd'
//  public testdata: UserSchedule[] = []
  public calendar = {
    currentDate: new Date(),
    calendarModel: 'month'
  }

  constructor(private store: Store,
              private router: Router,
              private userService: UserService,
              private logger: LoggerService,
              public formBuilder: FormBuilder,
              public alertController: AlertController,
              public datepipe: DatePipe) {
  }

  public ngOnInit() {
    //  this.queryUserSceduleList({infoKeyWords: ''})
    this.loadEvent()


    this.scheduleForm = this.formBuilder.group({
      topic: ['', Validators.required],
      contactDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      targetName: ['', Validators.required],
      targetLeve: ['', Validators.required],
      contactWay: ['', Validators.required],
      recommendProduct: ['', Validators.required]
    })
  }

  public onInputInfo(event) {
    this.queryUserSceduleList({infoKeyWords: event.target.value})
  }

  public queryUserSceduleList(params) {
    this.userService.searchUserSchedule(params).subscribe(data => {
      this.logger.info(data)
      this.myScheduleList = data
      // data.forEach( item =>{
      //   this.myScheduleList.push({
      //     title: item.title,
      //     allDay: item.allDay,
      //     statu: item.statu,
      //     targetName: item.targetName,
      //     targetLeve: item.targetLeve,
      //     contactWay: item.contactWay,
      //     recommendProduct: item.recommendProduct,
      //     startTime:new Date(item.startTime),
      //     endTime: new Date(item.endTime),
      //     infoKeyWords: item.infoKeyWords
      //   })
      // })
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
        // this.myScheduleList = data
      })
  }

  public onTimeSelected(event) {
    // this.logger.info(this.datepipe.transform(event.selectedTime, this.format))
    //  this.userService
    //    .searchUserSchedule({
    //      infoKeyWords: this.datepipe.transform(event.selectedTime, this.format)
    //    })
    //    .subscribe(data => {
    //      //   this.logger.info(data)
    //      this.myScheduleList = data
    //    })
  }


  public reloadSource(startTime, endTime) {
    // this.logger.info('@@@@@@@@@@@@@@@@' + startTime + '@@@' + endTime)
  }

  public onViewTitleChanged(event) {
    // this.logger.info('onViewTitleChanged :' + event)
  }

  public onEventSelected(event) {
    // this.logger.info('onEventSelected :' + event)
  }

  public loadEvent() {
    // this.logger.info('loadEvent')

    // this.myScheduleList= this.createRandomEvents()

    //  this.logger.info(this.myScheduleList)
    this.queryUserSceduleList({infoKeyWords: ''})
    // this.myScheduleList.forEach((item) =>{
    //     this.eventSource.push({
    //       title:item.title,
    //       allDay:false,
    //       startTime: item.startTime,
    //       endTime: item.endTime,
    //     })
    // })
  }


  public onOpenDetail(scheduleID) {
    this.logger.info('click a item')
    this.router.navigate(['/user/user-schedule-item',scheduleID])
    // localStorage.setItem('current-message', JSON.stringify(this.data))
    // const url = this.routeList[this.data.tag] || this.routeList[this.data.type]
    // url && this.router.navigateByUrl(url)
  }

}
