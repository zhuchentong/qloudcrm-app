import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DashboardService } from 'app/services/dashboard.service'
import { MessageModel } from 'app/model/message.model'
import { Store } from '@ngxs/store'
import { DictType } from 'app/config/enum.config'
import { DictState } from 'app/store/state/dict.state'
import { LoggerService } from '@ngx-toolkit/logger'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [DashboardService]
})
export class DashboardPage implements OnInit {
  public tabIndex = 0
  public messageDataSet: MessageModel[]
  public currentMessageType: any = ''
  public messageTypeNumber: any[] = []

  public colorList = {
    color1: {
      icon: '#d5a441',
      text: '#ffffff',
      background1: '#d5a441',
      background2: '#dfac45'
    },
    color2: {
      icon: '#5ea8d6',
      text: '#ffffff',
      background1: '#5ea8d6',
      background2: '#69baec'
    },
    color3: {
      icon: '#9978d6',
      text: '#ffffff',
      background1: '#9978d6',
      background2: '#a984ec'
    },
    color4: {
      icon: '#43af7d',
      text: '#FFFFF3',
      background1: '#43af7d',
      background2: '#49bd88'
    }
  }

  /**
   * 获取当前消息列表
   */
  public get currentMessageList() {
    return this.messageDataSet.filter(
      x => !this.currentMessageType || x.type === this.currentMessageType
    )
  }

  constructor(
    public router: Router,
    private dashboardService: DashboardService,
    public store: Store,
    private logger: LoggerService
  ) {}

  /**
   * 初始化
   */
  public ngOnInit() {
    this.getMessageList()
  }

  /**
   * 获取消息列表
   */
  private getMessageList() {
    this.dashboardService.getMessageList().subscribe(data => {
      this.messageDataSet = data
      this.getMessageNumber()
    })
  }

  /**
   * 获取消息数量
   */
  private getMessageNumber() {
    this.messageTypeNumber = this.store
      .selectSnapshot(DictState.getDict(DictType.MessageType))
      .map(x => {
        const messageList = this.messageDataSet.filter(
          message => message.type === x.code
        )

        return {
          ...x,
          length: messageList.length
        }
      })
  }

  /**
   * 监听tab页变化
   * @param param tabIndex
   */
  public onTabChange({ index }) {
    this.currentMessageType =
      index === 0 ? '' : this.messageTypeNumber[index - 1].code
  }
}
