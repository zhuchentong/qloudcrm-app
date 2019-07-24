import {Component, OnInit} from '@angular/core'
import {Store} from '@ngxs/store'
import {AlertController} from '@ionic/angular'
import {DatePipe} from '@angular/common'
import {ActivatedRoute, Router} from '@angular/router'
import {UserService} from 'app/services/user.service'
import {LoggerService} from '@ngx-toolkit/logger'
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-user-schedule-list',
  templateUrl: './user-schedule-list.page.html',
  styleUrls: ['./user-schedule-list.page.scss'],
})
export class UserScheduleListPage implements OnInit {

  public scheduleDate:string
  public myScheduleList = []
  public queryString:string

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
    this.scheduleDate =  this.activatedRoute.snapshot.params['scheduleDate']
    this.logger.info('ngOnInit:'+this.scheduleDate)
    if('全部' ===  this.scheduleDate) {
      this.queryUserSceduleList({infoKeyWords: ''})
    }
    else {
      this.queryUserSceduleList({infoKeyWords: this.scheduleDate})
    }
  }

  public queryByKeyWord() {
    if('全部' ===  this.scheduleDate) {
      this.queryUserSceduleList({infoKeyWords: this.queryString})
    }else {
      this.queryUserSceduleList({infoKeyWords: this.scheduleDate+' '+this.queryString})
    }
  }

  public queryUserSceduleList(params) {
    this.userService.searchUserSchedule(params).subscribe(data => {
      this.myScheduleList = data
    })
    this.logger.info(this.myScheduleList.length)
  }

  public onOpenDetail(scheduleID) {
//    this.logger.info('click a item')
    this.router.navigate(['/user/user-schedule-item', scheduleID])
    // localStorage.setItem('current-message', JSON.stringify(this.data))
    // const url = this.routeList[this.data.tag] || this.routeList[this.data.type]
    // url && this.router.navigateByUrl(url)
  }
}
