import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DashboardService } from 'app/services/dashboard.service'
import { MessageModel } from 'app/model/message.model'
import { Store } from '@ngxs/store'
import { DictType, MessageType } from 'app/config/enum.config'
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
  public fixedTabs = false
  private iconList = {}
  public slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: true
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
  public getMessageList(event?) {
    this.dashboardService.getMessageList().subscribe(data => {
      this.messageDataSet = data
      this.getMessageNumber()
      setTimeout(() => {
        event && event.target.complete()
      }, 1000)
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
          length: messageList.length,
          icon: 'assets/icon/dashboard/' + x.code.toLowerCase() + '.svg'
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

  /**
   * 滚动监听
   */
  public onScroll(event) {
    this.fixedTabs = event.detail.currentY > 80
  }

  public onOpenMessageType(message) {
    this.router.navigate(['/dashboard/message-list', { type: message.code }])
  }
}
