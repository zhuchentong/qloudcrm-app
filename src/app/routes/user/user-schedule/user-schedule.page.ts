import { Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { Router } from '@angular/router'
import { LoggerService } from '@ngx-toolkit/logger'
import { UserService } from 'app/services/user.service'
import { UserSchedule } from 'app/model/user-schedule.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginAction } from 'app/store/action/user.action'
import { AlertController } from '@ionic/angular'

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
  constructor(
    private store: Store,
    private router: Router,
    private userService: UserService,
    private logger: LoggerService,
    public formBuilder: FormBuilder,
    public alertController: AlertController
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
}
