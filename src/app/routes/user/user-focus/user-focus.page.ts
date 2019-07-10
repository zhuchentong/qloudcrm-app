import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-user-focus',
  templateUrl: './user-focus.page.html',
  styleUrls: ['./user-focus.page.scss']
})
export class UserFocusPage implements OnInit {
  private myFocus = '我的关注'
  private userFocusTabs = [
    { tabName: '营销活动', length: 1 },
    { tabName: '客户', length: 1 },
    { tabName: '产品', length: 1 },
    { tabName: '渠道', length: 1 },
    { tabName: '事件', length: 1 }
  ]
  public tabIndex = 0
  constructor() {}

  public ngOnInit() {}

  public onTabChange({ index }) {
    // this.currentMessageType =
    //   index === 0 ? '' : this.messageTypeNumber[index - 1].code
  }
}
