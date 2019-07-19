import {Component, Input, OnInit} from '@angular/core'

import { LoggerService } from '@ngx-toolkit/logger'
import { Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { UserService } from 'app/services/user.service'
import { UserFocusModel } from 'app/model/user-focus.model'
import { DictType } from 'app/config/enum.config'
import { DictState } from 'app/store/state/dict.state'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user-focus',
  templateUrl: './user-focus.page.html',
  styleUrls: ['./user-focus.page.scss']
})
export class UserFocusPage implements OnInit {
  public myFocus = '所有'
  // private userFocusTabs = [
  //   { tabName: '营销活动', length: 1 ,type: 'active'},
  //   { tabName: '客户', length: 1 ,type: 'customer'},
  //   { tabName: '产品', length: 1 ,type: 'product'},
  //   { tabName: '渠道', length: 1 ,type: 'channel'},
  //   { tabName: '事件', length: 1 ,type: 'incident'}
  // ]

  public currentFocusType: any = ''
  public userFocusDataSet: UserFocusModel[]
  public focusTypeNumber: any[] = []
  public tabIndex = 0
  public fixedTabs = false

  @Input()
  public data

  constructor(
    public router: Router,
    private userService: UserService,
    public store: Store,
    private logger: LoggerService
  ) {}

  public ngOnInit() {
    this.getFocusList()
  }

  public get currentFocusList() {
    return this.userFocusDataSet.filter(
      x => !this.currentFocusType || x.type === this.currentFocusType
    )
  }

  public getFocusList(event?) {
    this.userService.getUserFocus().subscribe(data => {
      this.userFocusDataSet = data
      this.getFocusNumber()
      setTimeout(() => {
        event && event.target.complete()
      }, 1000)
    })
  }

  public onTabChange({ index }) {
    this.currentFocusType =
      index === 0 ? '' : this.focusTypeNumber[index - 1].code
  }

  // private getMessageNumber() {
  private getFocusNumber() {
    this.focusTypeNumber = this.store
      .selectSnapshot(DictState.getDict(DictType.FocusType))
      .map(x => {
        const focusList = this.userFocusDataSet.filter(
          message => message.type === x.code
        )

        return {
          ...x,
          length: focusList.length
        }
      })
  }

  public onScroll(event) {
    this.fixedTabs = event.detail.currentY > 80
  }

  public getItemClass() {
    return {
      [`${this.data.type.toLowerCase()}-item`]: true
    }
  }
}
