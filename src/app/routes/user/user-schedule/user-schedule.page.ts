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
  public myScheduleList = []
  public scheduleForm: FormGroup
  public format = 'yyyy-MM-dd'
  public viewT: Date =new Date()
  public isToday:boolean = true

//  public testdata: UserSchedule[] = []
  public calendar = {
    currentDate: new Date(),
    calendarModel: 'month',
    dateFormatter: {
      formatMonthViewDay: function(date:Date) {
        return date.getDate()
      },
      formatMonthViewDayHeader: (date:Date)=> {
        return this.datePipe.transform(date,'EE','+0800','zh-cn')
      },
      formatMonthViewTitle: (date:Date) => {
      // date.setDate(this.viewT.getDate())
        return date
      },
      formatWeekViewDayHeader:(date:Date) =>{
        return 'testWDH'
      },
      formatWeekViewTitle:(date:Date) => {
        return 'testWT'
      },
      formatWeekViewHourColumn: (date:Date) =>{
        return 'testWH'
      },
      formatDayViewHourColumn: (date:Date) => {
        return 'testDH'
      },
      formatDayViewTitle: (date:Date) =>{
        return date
      }
    }
  }

  constructor(private store: Store,
              private router: Router,
              private userService: UserService,
              private logger: LoggerService,
              public formBuilder: FormBuilder,
              public alertController: AlertController,
              public datePipe: DatePipe) {
   // this.viewT =new Date()
  }

  public ngOnInit() {
    //  this.queryUserSceduleList({infoKeyWords: ''})
    this.loadEvent()
    this.logger.info('initial')
    this.logger.info(this.viewT)

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
      this.myScheduleList = data
    })
  }





  public onCurrentDateChanged(event) {
    this.userService
      .searchUserSchedule({
        infoKeyWords: this.datePipe.transform(event, this.format)
      })
      .subscribe(data => {
        //   this.logger.info(data)
        // this.myScheduleList = data
      })
    this.viewT=event.selectedTime
    // this.logger.info('onCurrentDateChanged :' +  this.viewT)
  }

  public onTimeSelected(event) {
    // this.logger.info(event)
    // this.logger.info('event.selectTime :' +  event.selectedTime)
    // this.logger.info('onTimeSelected :' +  this.viewT)
     this.viewT=event.selectedTime
  }


  public reloadSource(startTime, endTime) {
    // this.logger.info('@@@@@@@@@@@@@@@@' + startTime + '@@@' + endTime)
  }

  public onViewTitleChanged(event) {
    // this.logger.info('onViewTitleChanged :' +  this.viewT)
   // this.viewT=event.selectedTime

  }

  public onEventSelected(event) {
   this.logger.info('onEventSelected :' + event)
  }

  public loadEvent() {
    this.logger.info('loadEvent')

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




  public addSchedualPage() {
    this.router.navigate(['/user/user-schedule-add'])
  }

  public tolistPage() {
    this.router.navigate(['/user/user-schedule-list','全部'])
  }


 public today() {
    this.calendar.currentDate = new Date()
   this.viewT =  this.calendar.currentDate
 }

 public showEventList(eventDate){
  // this.logger.info('showEventList')
  //  this.logger.info(this.datePipe.transform(eventDate,'yyyy-MM-dd'))
   this.router.navigate(['/user/user-schedule-list',this.datePipe.transform(eventDate,'yyyy-MM-dd')])
 }
}
