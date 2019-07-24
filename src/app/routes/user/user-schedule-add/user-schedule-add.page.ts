import { Component, OnInit } from '@angular/core'
import {Store} from '@ngxs/store'
import {AlertController} from '@ionic/angular'
import {DatePipe} from '@angular/common'
import {Router} from '@angular/router'
import {UserService} from 'app/services/user.service'
import {LoggerService} from '@ngx-toolkit/logger'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-user-schedule-add',
  templateUrl: './user-schedule-add.page.html',
  styleUrls: ['./user-schedule-add.page.scss'],
})
export class UserScheduleAddPage implements OnInit {
  public componentTitle = '新增计划'
  public createButtonValue = '新增'
  public scheduleForm: FormGroup
  public format = 'yyyy-MM-dd'
  constructor(private store: Store,
              private router: Router,
              private userService: UserService,
              private logger: LoggerService,
              public formBuilder: FormBuilder,
              public alertController: AlertController,
              public datepipe: DatePipe) {

  }


  public ngOnInit() {
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
        //     this.logger.info(data)
        this.scheduleForm.reset()
        this.presentAlert(data)
      })
  }
}
